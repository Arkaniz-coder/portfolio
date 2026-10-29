import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import SectionDivider from "@/components/SectionDivider";

// Lazy-load below-fold components to reduce initial JS execution
const MarqueeTicker = lazy(() => import("@/components/MarqueeTicker"));
const WhyArkaniz = lazy(() => import("@/components/WhyArkaniz"));
const WorkProcess = lazy(() => import("@/components/WorkProcess"));
const ServicesOffres = lazy(() => import("@/components/ServicesOffres"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQPreview = lazy(() => import("@/components/FAQPreview"));

const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={null}>
        <MarqueeTicker />
        <WhyArkaniz />
        <SectionDivider variant="dots" />
        <WorkProcess />
        <SectionDivider variant="line" />
        <ServicesOffres />
        <StatsSection />
        <SectionDivider variant="dots" />
        <Testimonials />
        <SectionDivider variant="line" />
        <FAQPreview />
        <SectionDivider variant="dots" />
      </Suspense>
    </>
  );
};

export default Home;
