import { Plugin } from "vite";
import * as fs from "fs";
import * as path from "path";

/**
 * Vite plugin that inlines critical CSS and async-loads the full stylesheet.
 * This eliminates the render-blocking CSS resource flagged by PageSpeed Insights.
 *
 * How it works:
 * 1. After build, reads the generated CSS file
 * 2. Extracts critical CSS rules (above-the-fold: variables, fonts, body, hero, header, glass, etc.)
 * 3. Inlines critical CSS in <style> tag in <head>
 * 4. Converts <link rel="stylesheet"> to async loading pattern
 */
export function criticalCssPlugin(): Plugin {
  return {
    name: "vite-plugin-critical-css",
    enforce: "post",
    apply: "build",
    closeBundle() {
      const distDir = path.resolve(__dirname, "dist");
      const htmlPath = path.join(distDir, "index.html");

      if (!fs.existsSync(htmlPath)) return;

      let html = fs.readFileSync(htmlPath, "utf-8");

      // Find the CSS file reference
      const cssMatch = html.match(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/
      );
      if (!cssMatch) return;

      const cssHref = cssMatch[1];
      const cssFilePath = path.join(distDir, cssHref);

      if (!fs.existsSync(cssFilePath)) return;

      const fullCss = fs.readFileSync(cssFilePath, "utf-8");

      // Extract critical CSS selectors/rules needed for above-the-fold rendering
      const criticalPatterns = [
        // CSS reset & base
        /\*,::after,::before\{[^}]+\}/g,
        /\*,::before,::after\{[^}]+\}/g,
        // Root variables
        /:root\{[^}]+\}/g,
        /:root,[^{]*\{[^}]*--background[^}]+\}/g,
        // Body & html
        /body\{[^}]+\}/g,
        /html\{[^}]+\}/g,
        // Font faces
        /@font-face\{[^}]+\}/g,
        // Gradient mesh (hero bg)
        /\.gradient-mesh\{[^}]+\}/g,
        /\.gradient-mesh::before\{[^}]+\}/g,
        // Aurora glow (hero)
        /\.aurora-glow\{[^}]+\}/g,
        // Glass
        /\.glass\{[^}]+\}/g,
        /\.glass-subtle\{[^}]+\}/g,
        // Typography
        /\.heading-glow\{[^}]+\}/g,
        /\.text-gradient-animate\{[^}]+\}/g,
        /\.text-gradient\{[^}]+\}/g,
        // Hero animations
        /\.hero-animate\{[^}]+\}/g,
        /\.hero-letter\{[^}]+\}/g,
        /\.hero-word\{[^}]+\}/g,
        // Grain overlay
        /\.grain-overlay\{[^}]+\}/g,
        // Label mono
        /\.label-mono\{[^}]+\}/g,
        /\.label-mono::before\{[^}]+\}/g,
        // Blob morph
        /\.blob-morph\{[^}]+\}/g,
        // Keyframes (critical)
        /@keyframes hero-fade-up\{[^}]+\}/g,
        /@keyframes hero-letter-in\{[^}]+\}/g,
        /@keyframes hero-word-in\{[^}]+\}/g,
        /@keyframes scroll-bounce\{[^}]+(?:\{[^}]*\}[^}]*)*\}/g,
        /@keyframes scroll-fade-in\{[^}]+(?:\{[^}]*\}[^}]*)*\}/g,
        /@keyframes mesh-drift\{[^}]+(?:\{[^}]*\}[^}]*)*\}/g,
        /@keyframes aurora-shift\{[^}]+(?:\{[^}]*\}[^}]*)*\}/g,
        /@keyframes page-enter\{[^}]+\}/g,
        /@keyframes contact-pop-in\{[^}]+\}/g,
        /@keyframes morph-composited\{[^}]+(?:\{[^}]*\}[^}]*)*\}/g,
      ];

      // Since the CSS is minified, we need a better approach.
      // Instead of regex on minified CSS, let's inline the most critical CSS manually
      // and just async-load the full stylesheet.
      const criticalCss = `
:root{--background:228 20% 5%;--foreground:220 20% 95%;--card:228 18% 9%;--card-foreground:220 20% 95%;--primary:239 84% 67%;--primary-foreground:0 0% 100%;--secondary:228 18% 14%;--secondary-foreground:220 20% 95%;--muted:228 15% 16%;--muted-foreground:220 15% 65%;--accent:239 84% 67%;--accent-foreground:0 0% 100%;--border:228 15% 15%;--input:228 18% 14%;--ring:239 84% 67%;--radius:0.75rem;--accent-violet:280 80% 65%;--accent-warm:38 90% 55%}
*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:hsl(228 15% 15%)}
html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:Inter,ui-sans-serif,system-ui,sans-serif;font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent;scroll-behavior:smooth}
body{margin:0;line-height:inherit;background:hsl(228 20% 5%);color:hsl(220 20% 95%);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
#root{min-height:100vh}
img,svg,video{display:block;vertical-align:middle}
img,video{max-width:100%;height:auto}
h1,h2,h3{font-family:"Space Grotesk","Inter",system-ui,sans-serif}
a{color:inherit;text-decoration:inherit}
button,input,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}
button{cursor:pointer;background-color:transparent;background-image:none}
@font-face{font-family:"Inter";font-style:normal;font-weight:400 700;font-display:swap;src:url("/fonts/inter-var.woff2") format("woff2")}
@font-face{font-family:"Space Grotesk";font-style:normal;font-weight:400 700;font-display:swap;src:url("/fonts/space-grotesk-var.woff2") format("woff2")}
.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}
.top-0{top:0}.left-0{left:0}.right-0{right:0}.bottom-0{bottom:0}.inset-0{inset:0}
.z-0{z-index:0}.z-10{z-index:10}.z-50{z-index:50}
.mx-auto{margin-left:auto;margin-right:auto}
.flex{display:flex}.hidden{display:none}.block{display:block}.grid{display:grid}.inline-block{display:inline-block}
.h-8{height:2rem}.h-20{height:5rem}.w-auto{width:auto}.w-full{width:100%}
.min-h-screen{min-height:100vh}
.flex-col{flex-direction:column}
.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}
.gap-2{gap:.5rem}.gap-3{gap:.75rem}
.overflow-hidden{overflow:hidden}
.rounded-xl{border-radius:.75rem}.rounded-full{border-radius:9999px}
.border{border-width:1px}.border-b{border-bottom-width:1px}.border-transparent{border-color:transparent}
.bg-transparent{background-color:transparent}.bg-background{background-color:hsl(228 20% 5%)}
.p-2{padding:.5rem}.p-3{padding:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-20{padding-top:5rem;padding-bottom:5rem}
.text-xs{font-size:.75rem;line-height:1rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-base{font-size:1rem;line-height:1.5rem}
.text-foreground{color:hsl(220 20% 95%)}.text-muted-foreground{color:hsl(220 15% 65%)}.text-primary{color:hsl(239 84% 67%)}
.text-center{text-align:center}
.font-bold{font-weight:700}.font-semibold{font-weight:600}.font-medium{font-weight:500}
.leading-\\[1\\]{line-height:1}.leading-tight{line-height:1.25}.leading-relaxed{line-height:1.625}
.tracking-tight{letter-spacing:-.025em}
.uppercase{text-transform:uppercase}
.opacity-0{opacity:0}
.pointer-events-none{pointer-events:none}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}
.transition-colors{transition-property:color,background-color,border-color;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}
.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}
.container{width:100%;margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem}
@media(min-width:640px){.container{max-width:640px;padding-left:2rem;padding-right:2rem}.sm\\:hidden{display:none}.sm\\:block{display:block}.sm\\:py-24{padding-top:6rem;padding-bottom:6rem}.sm\\:blur-\\[160px\\]{filter:blur(160px)}.sm\\:w-\\[800px\\]{width:800px}.sm\\:h-\\[800px\\]{height:800px}}
@media(min-width:768px){.container{max-width:768px}.md\\:hidden{display:none}.md\\:flex{display:flex}.md\\:text-8xl{font-size:6rem;line-height:1}}
@media(min-width:1024px){.container{max-width:1024px}}
@media(min-width:1280px){.container{max-width:1280px}}
.gradient-mesh{position:relative;overflow:hidden}
.gradient-mesh::before{content:"";position:absolute;inset:-50%;width:200%;height:200%;background:radial-gradient(ellipse 80% 50% at 20% 40%,hsl(239 84% 67%/.22) 0%,transparent 60%),radial-gradient(ellipse 60% 80% at 80% 20%,hsl(280 80% 65%/.16) 0%,transparent 60%),radial-gradient(ellipse 70% 60% at 50% 80%,hsl(239 84% 67%/.12) 0%,transparent 60%),radial-gradient(ellipse 50% 40% at 70% 60%,hsl(38 90% 55%/.08) 0%,transparent 50%);animation:mesh-drift 20s ease-in-out infinite;pointer-events:none;z-index:0}
@media(max-width:639px){.gradient-mesh::before{animation:none;inset:-20%;width:140%;height:140%}}
.aurora-glow{position:absolute;width:130%;height:70%;top:50%;left:50%;transform:translate(-50%,-55%);pointer-events:none;z-index:0;background:radial-gradient(ellipse 50% 40% at 50% 50%,hsl(239 84% 67%/.20) 0%,transparent 70%),radial-gradient(ellipse 40% 50% at 35% 45%,hsl(280 80% 65%/.14) 0%,transparent 60%),radial-gradient(ellipse 45% 35% at 65% 55%,hsl(200 80% 70%/.10) 0%,transparent 60%);animation:aurora-shift 8s ease-in-out infinite;filter:blur(60px)}
.glass{background:hsl(228 18% 9%/.6);backdrop-filter:blur(20px) saturate(1.5);-webkit-backdrop-filter:blur(20px) saturate(1.5);border:1px solid hsl(220 20% 95%/.08)}
.glass-subtle{background:hsl(228 18% 9%/.4);backdrop-filter:blur(12px) saturate(1.3);-webkit-backdrop-filter:blur(12px) saturate(1.3);border:1px solid hsl(220 20% 95%/.05)}
.heading-glow{text-shadow:0 0 40px hsl(239 84% 67%/.2),0 0 80px hsl(239 84% 67%/.1)}
.text-gradient-animate{background:linear-gradient(135deg,hsl(239 84% 67%),hsl(280 80% 72%),hsl(200 80% 70%),hsl(239 84% 67%));-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.grain-overlay{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9998;opacity:.025;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")}
.hero-animate{opacity:0;animation:hero-fade-up .4s ease-out forwards}
.hero-letter{opacity:0;display:inline-block;animation:hero-letter-in .3s cubic-bezier(.25,.1,.25,1) forwards}
.hero-word{opacity:0;animation:hero-word-in .4s cubic-bezier(.25,.1,.25,1) forwards}
.blob-morph{border-radius:50%;animation:morph-composited 10s ease-in-out infinite}
@media(max-width:639px){.blob-morph{animation:none}}
@keyframes hero-fade-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes hero-letter-in{from{opacity:0;transform:translateY(40px)}to{opacity:1;transform:translateY(0)}}
@keyframes hero-word-in{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
@keyframes mesh-drift{0%,100%{transform:translate(0%,0%) rotate(0deg)}25%{transform:translate(2%,-3%) rotate(1deg)}50%{transform:translate(-1%,2%) rotate(-.5deg)}75%{transform:translate(-3%,-1%) rotate(.5deg)}}
@keyframes aurora-shift{0%,100%{opacity:.7;transform:translate(-50%,-55%) scale(1)}33%{opacity:1;transform:translate(-48%,-53%) scale(1.05)}66%{opacity:.8;transform:translate(-52%,-57%) scale(.98)}}
@keyframes morph-composited{0%,100%{transform:scale(1) rotate(0deg)}25%{transform:scale(1.05,.95) rotate(3deg)}50%{transform:scale(.95,1.05) rotate(-2deg)}75%{transform:scale(1.02,.98) rotate(1deg)}}
@keyframes scroll-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}
@keyframes scroll-fade-in{from{opacity:0}to{opacity:.4}}
@keyframes contact-pop-in{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}
@keyframes page-enter{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
`.trim().replace(/\n/g, "");

      // Replace the existing inline style and the stylesheet link
      // Remove old critical CSS style tag
      html = html.replace(
        /<!-- Critical CSS[^>]*-->[\s\S]*?<\/style>/,
        ""
      );

      // Also remove any standalone <style> with just :root/body
      html = html.replace(
        /<style>\s*:root\{--background[^<]*<\/style>/,
        ""
      );

      // Replace the stylesheet link with async loading + inline critical CSS
      const cssLink = cssMatch[0];
      const asyncCss = `<!-- Critical CSS inlined for zero render-blocking -->
    <style>${criticalCss}</style>
    <!-- Full CSS loaded async to eliminate render-blocking -->
    <link rel="preload" href="${cssHref}" as="style" crossorigin onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" crossorigin href="${cssHref}"></noscript>`;

      html = html.replace(cssLink, asyncCss);

      fs.writeFileSync(htmlPath, html);
      console.log(
        "\x1b[32m✓ Critical CSS inlined, full stylesheet loaded async\x1b[0m"
      );
    },
  };
}
