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
const ImageGlider = lazy(() => import("./components/ImageGlider"));

function LoadingScreen({ exiting = false }) {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("CALIBRATING");
  const [clock, setClock] = useState("00:00:00");
  const [log, setLog] = useState("mounting subsystem drivers...");

  useEffect(() => {
    const statusWords = ["CALIBRATING", "SYNCHRONIZING", "COMPILING", "VERIFYING", "ALIGNING", "FINALIZING"];
    const logMessages = [
      "mounting subsystem drivers...",
      "verifying signal integrity...",
      "compiling telemetry cache...",
      "syncing clock reference...",
      "allocating render buffers...",
      "resolving node dependencies...",
      "handshake with core complete",
      "calibrating optical array...",
      "indexing memory sectors...",
      "establishing uplink...",
    ];

    let seconds = 0;
    let logIndex = 0;
    let progressValue = 0;

    const tickClock = setInterval(() => {
      seconds += 1;
      const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
      const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      setClock(`${h}:${m}:${s}`);
    }, 1000);

    const tickLog = setInterval(() => {
      setLog(`> ${logMessages[logIndex % logMessages.length]}`);
      logIndex += 1;
    }, 1900);

    const tickProgress = setInterval(() => {
      progressValue += Math.random() * 2.2;
      if (progressValue > 100) progressValue = 100;

      setProgress(Math.floor(progressValue));
      setStatus(statusWords[Math.min(Math.floor(progressValue / 17), statusWords.length - 1)]);

      if (progressValue >= 100) {
        setStatus("SYSTEM READY");
      }
    }, 90);

    return () => {
      clearInterval(tickClock);
      clearInterval(tickLog);
      clearInterval(tickProgress);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setStatus("SYSTEM READY");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen${exiting ? " exiting" : ""}`} aria-live="polite" aria-busy="true">
      <div className="scanlines" aria-hidden="true" />
      <div className="sweep" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      <div className="bracket tl" aria-hidden="true" />
      <div className="bracket tr" aria-hidden="true" />
      <div className="bracket bl" aria-hidden="true" />
      <div className="bracket br" aria-hidden="true" />

      <div className="core">
        <div className="ring r1" aria-hidden="true" />
        <div className="ring r2" aria-hidden="true" />
        <div className="ring r3" aria-hidden="true" />
        <div className="ticks" aria-hidden="true">
          {Array.from({ length: 60 }).map((_, index) => (
            <div key={index} style={{ transform: `rotate(${index * 6}deg)` }} />
          ))}
        </div>

        <div className="readout">
          <div className="status-word">LOADING PAGE</div>
        </div>
      </div>

      <div className="bar-wrap">
        <div className="bar-track">
          <div className="bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="bar-ticks" aria-hidden="true">
          {Array.from({ length: 20 }).map((_, index) => <div key={index} />)}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setLoaderExiting(true);
    }, 5000);
    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, 5700);

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
        <ImageGlider />
        <Timer />
        <AboutUs />
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
