import React, { memo, Suspense, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aboutusImg from "../assets/images/aboutus.jpeg";
import archive01 from "../assets/images/archive-01.jpg";
import archive02 from "../assets/images/archive-02.jpg";
import archive03 from "../assets/images/archive-03.jpg";
import archive05 from "../assets/images/archive-05.jpg";
import archive06 from "../assets/images/archive-06.jpg";

const carouselImages = [
  { src: aboutusImg, alt: "TransfiNITTe community and participants" },
  { src: archive01, alt: "TransfiNITTe teams collaborating" },
  { src: archive02, alt: "TransfiNITTe hacking session" },
  { src: archive03, alt: "TransfiNITTe development phase" },
  { src: archive05, alt: "TransfiNITTe project presentations" },
  { src: archive06, alt: "TransfiNITTe participants celebration" },
];

const AboutUsCarousel = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const goToPrev = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, []);

  const goToNext = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 40) {
      goToNext();
    } else if (distance < -40) {
      goToPrev();
    }
  };

  return (
    <div
      className="relative w-full aspect-[3/2] overflow-hidden rounded-[6px] group select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sliding Track */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0 relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover rounded pointer-events-none"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        onClick={goToPrev}
        aria-label="Previous image"
        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 z-10 cursor-pointer"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        type="button"
        onClick={goToNext}
        aria-label="Next image"
        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 z-10 cursor-pointer"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Counter Badge */}
      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md z-10 font-spacemono text-[0.7rem] sm:text-xs text-white tracking-wider">
        {String(currentIndex + 1).padStart(2, "0")} / {String(carouselImages.length).padStart(2, "0")}
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md z-10">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              currentIndex === index
                ? "w-5 h-1.5 bg-white"
                : "w-1.5 h-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
});

const AboutUsMobile = memo(() => (
  <div className="block md:hidden mx-auto bg-[#FFFFFF] dark:bg-black max-w-[92%] transition-colors duration-300">
    <div className="flex flex-col justify-center items-start gap-4 flex-shrink-0 border-l border-r border-l-edge border-r-edge py-6 px-4">
      <div className="flex items-start content-start gap-y-4 flex-1 py-1 flex-shrink-0 basis-0 flex-wrap w-full">
        <div className="flex w-auto h-auto items-start">
          <div className="flex w-auto h-fit flex-col justify-center text-[#1D1D1F] dark:text-offwhite font-spacegrotesk text-[2rem] font-normal leading-[48px] tracking-[-1.5px] transition-colors">
            About us
          </div>
          <div className="flex w-auto h-auto flex-col justify-center text-[#6B6B6B] dark:text-[#A1A1A1] font-spacemono leading-[28px] transition-colors">
            (1)
          </div>
        </div>
        <div className="w-full h-auto border rounded-[8px] p-2 border-[#E6E6E3] dark:border-[#454545] transition-colors">
          <AboutUsCarousel />
        </div>
        <div className="flex flex-col content-center items-center gap-3 flex-1 flex-shrink-0 basis-0 w-full">
          <div className="w-full h-auto text-[#6B6B6B] dark:text-[#A0A0A0] font-spacemono text-[0.875rem] text-justify leading-relaxed tracking-[0.4px] self-stretch transition-colors">
            Welcome to TransfiNITTe'26, NIT Trichy's premier hackathon, hosted
            by the Technical Council. This is where innovation meets
            action.
            <br />
            <br />
            Building on the success of TransfiNITTe'25, where 300+ participants
            pushed the limits in a 42-hour coding marathon, we're taking it up a
            notch. With 500+ participants and 100+ teams expected,
            TransfiNITTe'26 is set to redefine the hackathon experience.
            <br />
            <br />
            This isn't just a competition—it's a platform to create real
            solutions and make an impact. Join us, and be a part of something
            that truly matters.
          </div>
        </div>
      </div>
    </div>
  </div>
));

const AboutUsDesktop = memo(() => (
  <div className="hidden md:block mx-auto bg-[#FFFFFF] dark:bg-black max-w-[95%] xl:max-w-[93.194%] select-none transition-colors duration-300">
    <div className="flex w-full py-8 lg:py-12 px-6 lg:px-[46px] justify-between items-start border-r border-l border-r-edge border-l-edge">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start w-full">
        <div className="w-full lg:w-1/2 flex flex-col items-start gap-6 lg:gap-[37px] flex-shrink-0">
          <div className="flex w-auto h-auto items-start">
            <div className="flex w-auto h-fit flex-col justify-center text-[#1D1D1F] dark:text-offwhite font-spacegrotesk text-3xl lg:text-[3rem] font-normal leading-tight lg:leading-[60px] transition-colors">
              About us
            </div>
            <div className="flex w-auto h-auto flex-col justify-center text-[#6B6B6B] dark:text-[#A1A1A1] font-spacemono leading-[28px] transition-colors">
              (1)
            </div>
          </div>
          <div className="w-full h-auto text-[#6B6B6B] dark:text-[#A0A0A0] font-spacemono text-[0.95rem] lg:text-[1rem] leading-relaxed transition-colors">
            Welcome to TransfiNITTe'26, NIT Trichy's premier hackathon, hosted
            by the Technical Council. This is where innovation meets
            action.
            <br />
            <br />
            Building on the success of TransfiNITTe'25, where 300+ participants
            pushed the limits in a 42-hour coding marathon, we're taking it up a
            notch. With 500+ participants and 100+ teams expected,
            TransfiNITTe'26 is set to redefine the hackathon experience.
            <br />
            <br />
            This isn't just a competition—it's a platform to create real
            solutions and make an impact. Join us, and be a part of something
            that truly matters.
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-auto border border-dashed p-2 border-[#E6E6E3] dark:border-[#454545] rounded-[4px] transition-colors">
          <AboutUsCarousel />
        </div>
      </div>
    </div>
  </div>
));

const AboutUs = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <AboutUsMobile />
        <AboutUsDesktop />
      </Suspense>
    </div>
  );
};

export default AboutUs;
