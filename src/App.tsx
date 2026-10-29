import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

// Eager load Home (critical path)
import Home from "./pages/Home";

// Lazy load Toasters — not needed for initial render
const LazyToaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const LazySonner = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));

// Lazy load secondary pages
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const FaqPage = lazy(() => import("./pages/FAQPage"));
const MentionsLegales = lazy(() => import("./pages/MentionsLegales"));
const CGV = lazy(() => import("./pages/CGV"));
const Confidentialite = lazy(() => import("./pages/Confidentialite"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => (
  <>
    <Suspense fallback={null}>
      <LazyToaster />
      <LazySonner />
    </Suspense>
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
<Route path="/faq" element={<FaqPage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/cgv" element={<CGV />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </>
);

export default App;
