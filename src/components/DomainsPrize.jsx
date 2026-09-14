import React, { memo, Suspense } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { domains } from "../constants";

const DomainCard = memo(({ domain, index }) => (
  <AccordionItem
    value={`domain-${domain.id}`}
    className="rounded-lg border border-[#D5DAE0] dark:border-[#444] bg-[#E8ECF0] dark:bg-[#1D1D1F] px-4 py-1.5 sm:px-6 sm:py-2.5 transition-colors duration-300 hover:bg-[#D5DAE0]/70 dark:hover:bg-[#2A2A2F] overflow-hidden data-[state=open]:bg-[#D5DAE0]/50 dark:data-[state=open]:bg-[#242428]"
  >
    <AccordionTrigger className="flex items-center justify-between w-full py-2 sm:py-2.5 hover:no-underline text-[#1D1D1F] dark:text-white cursor-pointer [&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-6 sm:[&>svg]:w-6 [&>svg]:text-[#1D1D1F] dark:[&>svg]:text-white">
      <div className="flex items-center gap-3 sm:gap-4 text-left">
        <span className="font-spacegrotesk text-base font-bold leading-tight text-[#1D1D1F] dark:text-white sm:text-xl lg:text-2xl flex-shrink-0">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-spacegrotesk text-base font-bold leading-tight text-[#1D1D1F] dark:text-white sm:text-xl lg:text-2xl">
          {domain.name}
        </span>
      </div>
    </AccordionTrigger>
    <AccordionContent className="pt-2 pb-4 text-[#6B6B6B] dark:text-[#A0A0A0] font-spacemono text-sm sm:text-base leading-relaxed border-t border-[#1D1D1F]/10 dark:border-white/10 mt-1 select-text">
      {domain.explanation}
    </AccordionContent>
  </AccordionItem>
));

const DomainsMobile = memo(() => (
  <div className="block md:hidden mx-auto max-w-[92%] bg-[#FFFFFF] transition-colors duration-300 dark:bg-black">
    <div className="flex flex-col gap-6 border-l border-r border-l-edge border-r-edge py-6 px-4">
      <div className="flex items-start">
        <div className="text-[#1D1D1F] dark:text-white font-spacegrotesk text-[2rem] font-normal leading-[48px] tracking-[-1.5px] transition-colors">
          Domains
        </div>
        <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
          (2)
        </div>
      </div>
      <Accordion type="multiple" className="flex flex-col gap-3 w-full">
        {domains.map((domain, index) => (
          <DomainCard key={domain.id} domain={domain} index={index} />
        ))}
      </Accordion>
    </div>
  </div>
));

const DomainsDesktop = memo(() => (
  <div className="hidden md:block mx-auto max-w-[95%] bg-[#FFFFFF] transition-colors duration-300 dark:bg-black xl:max-w-[93.194%]">
    <div className="flex h-full justify-between gap-8 border-r border-l border-r-edge border-l-edge px-6 py-10 transition-colors lg:gap-12 lg:px-[46px] lg:py-16">
      <div className="flex w-full flex-col gap-8 lg:gap-10 xl:gap-12">
        <div className="flex items-start">
          <div className="text-[#1D1D1F] dark:text-white font-spacegrotesk text-3xl font-normal leading-tight transition-colors lg:text-4xl xl:text-[4rem]">
            Domains
          </div>
          <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
            (2)
          </div>
        </div>
        <Accordion type="multiple" className="grid grid-cols-2 gap-4 lg:gap-5 items-start w-full">
          {domains.map((domain, index) => (
            <DomainCard key={domain.id} domain={domain} index={index} />
          ))}
        </Accordion>
      </div>
    </div>
  </div>
));

const Domains = () => {
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <DomainsMobile />
        <DomainsDesktop />
      </Suspense>
    </div>
  );
};

export default Domains;