import React, { memo, Suspense } from "react";
import { sponsors } from "../constants";

const SponsorCategory = memo(({ category }) => (
  <div
    key={category.id}
    className="flex w-full flex-col items-start gap-6 lg:gap-10"
  >
    <div className="text-[#1D1D1F] dark:text-offwhite font-spacegrotesk text-xl sm:text-2xl lg:text-[2rem] not-italic font-normal leading-8 transition-colors">
      {category.name}
    </div>
    <div className="flex flex-wrap items-center justify-center sm:justify-around gap-6 sm:gap-8 lg:gap-10 self-stretch">
      {category.data.map((sponsor) => (
        <div
          key={sponsor.id}
          className="select-none pointer-events-none flex flex-col w-fit items-center justify-center p-2"
        >
          <img
            src={sponsor.imgurl}
            alt={sponsor.name}
            className="max-w-[100px] sm:max-w-[130px] lg:max-w-[160px] max-h-12 sm:max-h-16 w-auto h-auto object-contain grayscale dark:grayscale invert dark:invert-0 opacity-80 hover:opacity-100 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  </div>
));

const SponsorsMobile = memo(() => (
  <div className="block md:hidden mx-auto bg-[#FFFFFF] dark:bg-black max-w-[92%] transition-colors duration-300">
    <div className="flex flex-col justify-center items-start gap-6 flex-shrink-0 border-l border-r border-l-edge border-r-edge py-6 px-4">
      <div className="flex h-fit items-start self-stretch">
        <div className="text-[#1D1D1F] dark:text-[#EDEDED] font-spacegrotesk text-[2rem] font-normal leading-[48px] tracking-[-1.5px] transition-colors">
          Sponsors
        </div>
        <div className="flex w-auto h-auto flex-col justify-center text-[#6B6B6B] dark:text-[#A1A1A1] font-spacemono text-[18px] not-italic font-normal leading-[28px] transition-colors">
          (7)
        </div>
      </div>
      {sponsors.map((category) => (
        <SponsorCategory key={category.id} category={category} />
      ))}
    </div>
  </div>
));

const SponsorsDesktop = memo(() => (
  <div className="hidden md:block mx-auto bg-[#FFFFFF] dark:bg-black max-w-[95%] xl:max-w-[93.194%] transition-colors duration-300">
    <div className="flex py-10 lg:py-14 px-6 lg:px-[2.875rem] flex-col items-start gap-10 lg:gap-14 bg-[#FFFFFF] dark:bg-black border-r border-l border-r-edge border-l-edge transition-colors">
      <div className="flex items-start">
        <div className="text-[#1D1D1F] dark:text-offwhite font-spacegrotesk text-3xl lg:text-4xl xl:text-[4rem] font-normal not-italic leading-tight transition-colors">
          Sponsors
        </div>
        <div className="flex w-auto h-auto flex-col justify-center text-[#6B6B6B] dark:text-[#A1A1A1] font-medium not-italic font-spacemono leading-[28px] transition-colors">
          (7)
        </div>
      </div>
      {sponsors.map((category) => (
        <SponsorCategory key={category.id} category={category} />
      ))}
    </div>
  </div>
));

const Sponsors = () => {
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <SponsorsMobile />
        <SponsorsDesktop />
      </Suspense>
    </div>
  );
};

export default Sponsors;
