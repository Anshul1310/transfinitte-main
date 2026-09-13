import React, { memo, Suspense } from "react";

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

const TestimonialsMobile = memo(() => (
  <div className="block md:hidden mx-auto bg-[#FFFFFF] dark:bg-black max-w-[92%] transition-colors duration-300">
    <div className="flex flex-col gap-6 border-l border-r border-l-edge border-r-edge py-6 px-4">
      {/* Title */}
      <div className="flex h-fit items-start self-stretch">
        <div className="text-[#1D1D1F] dark:text-[#EDEDED] font-spacegrotesk text-[2rem] font-normal leading-[48px] tracking-[-1.5px] transition-colors">
          Testimonials
        </div>
        <div className="flex w-auto h-auto flex-col justify-center text-[#6B6B6B] dark:text-[#A1A1A1] font-spacemono text-[18px] not-italic font-normal leading-[28px] transition-colors">
          (7)
        </div>
      </div>

      {/* Headline */}
      <div className="font-spacegrotesk text-xl sm:text-2xl font-normal leading-snug">
        <span className="text-[#6B6B6B] dark:text-[#888] transition-colors">We can't say better </span>
        <span className="text-[#1D1D1F] dark:text-white font-medium transition-colors">than our participants.</span>
      </div>

      {/* Testimonials List */}
      <div className="flex flex-col gap-6 pt-2">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex flex-col gap-3 border-t border-[#E6E6E3] dark:border-[#222] pt-5 transition-colors"
          >
            <div className="flex flex-col gap-0.5">
              <span className="font-spacegrotesk text-lg font-bold text-[#1D1D1F] dark:text-white underline underline-offset-4 decoration-current transition-colors">
                {t.team}
              </span>
              <span className="font-spacemono text-xs text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
                {t.role}
              </span>
            </div>
            <div className="font-spacegrotesk text-base font-normal leading-relaxed text-[#1D1D1F] dark:text-white transition-colors">
              {t.quote}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));

const TestimonialsDesktop = memo(() => (
  <div className="hidden md:block mx-auto bg-[#FFFFFF] dark:bg-black max-w-[95%] xl:max-w-[93.194%] transition-colors duration-300">
    <div className="flex flex-col gap-8 lg:gap-10 border-r border-l border-r-edge border-l-edge py-10 lg:py-16 px-6 lg:px-[46px] bg-[#FFFFFF] dark:bg-black transition-colors">
      {/* Title */}
      <div className="flex items-start">
        <div className="text-[#1D1D1F] dark:text-offwhite font-spacegrotesk text-3xl lg:text-4xl xl:text-[4rem] font-normal not-italic leading-tight transition-colors">
          Testimonials
        </div>
        <div className="flex w-auto h-auto flex-col justify-center text-[#6B6B6B] dark:text-[#A1A1A1] font-medium not-italic font-spacemono leading-[28px] transition-colors">
          (7)
        </div>
      </div>

      {/* Headline */}
      <div className="font-spacegrotesk text-2xl lg:text-3xl xl:text-[2.5rem] font-normal leading-tight">
        <span className="text-[#6B6B6B] dark:text-[#888] transition-colors">We can't say better </span>
        <span className="text-[#1D1D1F] dark:text-white font-medium transition-colors">than our participants.</span>
      </div>

      {/* Testimonials List */}
      <div className="flex flex-col gap-8 lg:gap-12 pt-4">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-start border-t border-[#E6E6E3] dark:border-[#222] pt-8 lg:pt-10 transition-colors"
          >
            {/* Left: Author / Team Info */}
            <div className="md:col-span-4 flex flex-col gap-1.5">
              <span className="font-spacegrotesk text-xl lg:text-2xl font-bold text-[#1D1D1F] dark:text-white underline underline-offset-4 decoration-current transition-colors">
                {t.team}
              </span>
              <span className="font-spacemono text-xs lg:text-sm text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
                {t.role}
              </span>
            </div>

            {/* Right: Quote */}
            <div className="md:col-span-8 font-spacegrotesk text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed text-[#1D1D1F] dark:text-white transition-colors">
              {t.quote}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));

const Testimonials = () => {
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <TestimonialsMobile />
        <TestimonialsDesktop />
      </Suspense>
    </div>
  );
};

export default Testimonials;

