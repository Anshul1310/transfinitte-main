import React, { memo, Suspense } from "react";
import { aboutus } from "../assets";

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
          <img
            src={aboutus}
            alt="about us"
            width="100%"
            height="100%"
            className="object-cover w-full h-auto rounded"
          />
        </div>
        <div className="flex flex-col content-center items-center gap-3 flex-1 flex-shrink-0 basis-0 w-full">
          <div className="w-full h-auto text-[#6B6B6B] dark:text-[#A0A0A0] font-spacemono text-[0.875rem] text-justify leading-relaxed tracking-[0.4px] self-stretch transition-colors">
            Welcome to TransfiNITTe'26, NIT Trichy's premier hackathon, hosted
            by the Technical Council and SCIENT. This is where innovation meets
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
  <div className="hidden md:block mx-auto bg-[#FFFFFF] dark:bg-black max-w-[95%] xl:max-w-[93.194%] select-none pointer-events-none transition-colors duration-300">
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
            by the Technical Council and SCIENT. This is where innovation meets
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
        <div className="w-full lg:w-1/2 h-auto border border-dashed p-2 border-[#E6E6E3] dark:border-[#454545] rounded-[4px] select-none pointer-events-none transition-colors">
          <img
            src={aboutus}
            alt="about us"
            width="100%"
            height="100%"
            className="object-cover w-full h-auto rounded max-h-[480px]"
          />
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
