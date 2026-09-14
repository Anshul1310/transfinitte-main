import React, { memo, Suspense, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: "0",
    team: "Voyagers",
    role: "Winner, PS by Bajaj",
    quote:
      "“42 hours of pure energy, creativity, and unforgettable moments. We laughed, we learned, we built things we never imagined, and most importantly, we grew as a team.”",
  },
  {
    id: "1",
    team: "The Overclockers",
    role: "Podium Finish, PS by TSTS",
    quote:
      "“TransfiNITTe was an incredible opportunity that stood out for its industry-related problem statements. Winning the hackathon was a truly encouraging milestone.”",
  },
];

const TestimonialsContent = memo(() => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
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
    <section id="testimonials" className="mx-auto max-w-[92%] md:max-w-[95%] xl:max-w-[93.194%] bg-[#FFFFFF] dark:bg-black transition-colors duration-300">
      <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10 border-r border-l border-r-edge border-l-edge py-8 sm:py-10 lg:py-16 px-4 sm:px-6 lg:px-[46px]">
        {/* Title */}
        <div className="flex items-start">
          <h2 className="text-[#1D1D1F] dark:text-offwhite font-spacegrotesk text-[2rem] sm:text-3xl lg:text-4xl xl:text-[4rem] font-normal not-italic leading-tight transition-colors">
            Testimonials
          </h2>
          <span className="flex w-auto h-auto flex-col justify-center text-[#6B6B6B] dark:text-[#A1A1A1] font-medium not-italic font-spacemono text-sm sm:text-base lg:text-[18px] leading-[28px] transition-colors">
            (7)
          </span>
        </div>

        {/* Headline */}
        <div className="font-spacegrotesk text-xl sm:text-2xl lg:text-3xl xl:text-[2.5rem] font-normal leading-tight">
          <span className="text-[#6B6B6B] dark:text-[#888] transition-colors">We can&apos;t say better </span>
          <span className="text-[#1D1D1F] dark:text-white font-medium transition-colors">than our participants.</span>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full overflow-hidden border-t border-[#E6E6E3] dark:border-[#222] pt-6 sm:pt-8 lg:pt-10 transition-colors"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding Track */}
          <div
            className="flex w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 lg:gap-10 items-start min-h-[160px] sm:min-h-[130px] lg:min-h-[150px]">
                  {/* Left: Author / Team Info */}
                  <div className="md:col-span-4 flex flex-col gap-1 sm:gap-1.5">
                    <span className="font-spacegrotesk text-lg sm:text-xl lg:text-2xl font-bold text-[#1D1D1F] dark:text-white underline underline-offset-4 decoration-current transition-colors">
                      {t.team}
                    </span>
                    <span className="font-spacemono text-xs sm:text-xs lg:text-sm text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
                      {t.role}
                    </span>
                  </div>

                  {/* Right: Quote */}
                  <div className="md:col-span-8 font-spacegrotesk text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed text-[#1D1D1F] dark:text-white transition-colors">
                    {t.quote}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Controls Footer */}
          <div className="flex items-center justify-between pt-6 sm:pt-8 mt-4 sm:mt-6 border-t border-[#E6E6E3]/60 dark:border-[#222]/60">
            {/* Counter & Indicator Dots */}
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="font-spacemono text-xs sm:text-sm text-[#6B6B6B] dark:text-[#A1A1A1]">
                {String(currentIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      currentIndex === index
                        ? "w-5 sm:w-6 h-1.5 bg-[#1D1D1F] dark:bg-white"
                        : "w-1.5 h-1.5 bg-[#D5DAE0] dark:bg-[#404040] hover:bg-[#A1A1A1]"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Previous & Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous testimonial"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-[#D5DAE0] dark:border-[#333] hover:border-[#1D1D1F] dark:hover:border-white text-[#1D1D1F] dark:text-white transition-all cursor-pointer hover:bg-[#F5F5F7] dark:hover:bg-[#1C1C1E]"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next testimonial"
                className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border border-[#D5DAE0] dark:border-[#333] hover:border-[#1D1D1F] dark:hover:border-white text-[#1D1D1F] dark:text-white transition-all cursor-pointer hover:bg-[#F5F5F7] dark:hover:bg-[#1C1C1E]"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

TestimonialsContent.displayName = "TestimonialsContent";

const Testimonials = () => {
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <TestimonialsContent />
      </Suspense>
    </div>
  );
};

export default Testimonials;
