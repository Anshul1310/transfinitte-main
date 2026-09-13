import React, { lazy, memo, Suspense } from "react";
import { arrowbl, arrowwh, numbersvg, tfbadge } from "../assets";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { GOOGLE_CALENDAR_URL } from "../constants";

const Flip = lazy(() => import("./Flip"));

const Header = memo(() => {
  const handleClick = () => {
    toast("Coming Soon", {
      description: "Wednesday, 23 October 2026, 9:00 AM",
      className: "font-spacemono",
    });
  };

  const RegisterButton = ({ variant, className }) => (
    <Button variant={variant} onClick={handleClick}>
      <div
        className={`flex flex-row gap-1 justify-center items-center bg-[#6B7FA3] text-white dark:bg-offwhite dark:text-[#1D1D1F] px-2 py-0 rounded-full hover:underline decoration-white dark:decoration-[#1D1D1F] transition-colors ${className}`}
      >
        <div className="text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase">
          REGISTER
        </div>
        <div>
          <img src={arrowwh} className="max-w-none w-fit dark:hidden" alt="arrow" />
          <img src={arrowbl} className="max-w-none w-fit hidden dark:block" alt="arrow" />
        </div>
      </div>
    </Button>
  );

  const CalendarButton = () => (
    <a
      href={GOOGLE_CALENDAR_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline decoration-[#1D1D1F] dark:decoration-white"
    >
      <button className="flex flex-row gap-1 justify-center items-center">
        <div className="text-[#1D1D1F] dark:text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold leading-5 tracking-[0.35px] uppercase">
          ADD TO CALENDAR
        </div>
        <div>
          <img src={arrowbl} className="max-w-none w-fit dark:hidden" alt="arrow" />
          <img src={arrowwh} className="max-w-none w-fit hidden dark:block" alt="arrow" />
        </div>
      </button>
    </a>
  );

  const HeaderMobile = memo(() => (
    <div className="block md:hidden relative">
      <div className="flex items-center justify-between bg-[#FFFFFF]/90 dark:bg-black/90 backdrop-blur-md shrink-0 w-full border-b border-solid border-[#1D1D1F]/10 dark:border-b-[#EDEDED26] py-3.5 px-4 sm:px-6 sticky top-0 shadow-sm dark:shadow-md z-50 content-stretch transition-colors duration-300">
        <Suspense fallback={<div>Loading...</div>}>
          <img src={tfbadge} alt="Transfinitte Badge" className="dark:invert-0 invert transition-all w-auto h-5 sm:h-6" />
        </Suspense>
        <div className="flex items-center gap-2.5 sm:gap-3">
          <ThemeToggle />
          <RegisterButton variant="outline" className="px-3 py-1 text-xs sm:text-sm" />
        </div>
      </div>
    </div>
  ));

  const HeaderDesktop = memo(() => (
    <div className="hidden md:flex justify-between items-center h-max py-4 lg:py-5 bg-[#FFFFFF]/90 dark:bg-black/90 backdrop-blur-md shrink-0 self-stretch border-b border-solid border-[#1D1D1F]/10 dark:border-b-[#EDEDED26] px-6 lg:px-12 sticky top-0 shadow-sm dark:shadow-md z-50 content-stretch transition-colors duration-300">
      <div className="w-auto shrink-0 min-w-[140px]">
        <Suspense fallback={<div>Loading...</div>}>
          <Flip />
        </Suspense>
      </div>
      <div className="flex flex-row flex-grow gap-2 self-stretch items-center justify-center">
        <div className="text-[#1D1D1F] dark:text-white text-center text-lg lg:text-xl font-spacegrotesk items-center font-medium leading-5 tracking-[-0.1px] uppercase transition-colors">
          Transfinitte
        </div>
        <div>
          <a>
            <img src={numbersvg} alt="24" className="dark:invert-0 invert transition-all" />
          </a>
        </div>
      </div>
      <div className="w-fit h-fit flex gap-3 lg:gap-6 justify-center items-center">
        <CalendarButton />
        <ThemeToggle />
        <RegisterButton variant="outline" className="px-4 lg:px-5 py-2" />
      </div>
    </div>
  ));

  return (
    <div className="sticky top-0 z-50 select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <HeaderMobile />
        <HeaderDesktop />
      </Suspense>
    </div>
  );
});

export default Header;
