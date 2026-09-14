import React, { lazy, Suspense, useEffect, useState } from "react";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const Timer = lazy(() => import("./components/Timer"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const Domains = lazy(() => import("./components/DomainsPrize"));
const Timeline = lazy(() => import("./components/Timeline"));
const PrizePool = lazy(() => import("./components/PrizePool"));
const GoodiesMerch = lazy(() => import("./components/GoodiesMerch"));
const Sponsors = lazy(() => import("./components/Sponsors"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Faq = lazy(() => import("./components/Faq"));
const Footer = lazy(() => import("./components/Footer"));

function LoadingScreen({ exiting = false }) {
  return (
    <div
      className={`loading-screen${exiting ? " exiting" : ""}`}
      aria-live="polite"
      aria-busy="true"
    ></div>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setLoaderExiting(true);
    }, 500);

    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, 1200);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingScreen />}>
        <Header />
        <Hero />
        <AboutUs />
        <Timer />
        <Domains />
        <Timeline />
        <PrizePool />
        <GoodiesMerch />
        <Sponsors />
        <Testimonials />
        <Faq />
        <Footer />
      </Suspense>

      {showLoader && <LoadingScreen exiting={loaderExiting} />}
    </>
  );
}

export default App;