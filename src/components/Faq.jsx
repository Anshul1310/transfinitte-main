import React, { memo, Suspense, useState, useMemo } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";

const BATCH_SIZE = 5;

const FaqHeader = memo(() => (
  <div className="flex w-auto h-auto items-start select-none pointer-events-none">
    <div className="flex w-auto h-auto flex-col justify-center text-[#1D1D1F] dark:text-offwhite font-spacegrotesk text-[2rem] sm:text-3xl md:text-4xl lg:text-[3.7rem] font-normal leading-tight transition-colors">
      FAQs
    </div>
    <div className="flex w-auto h-auto flex-col justify-center text-[#6B6B6B] dark:text-[#A1A1A1] font-spacemono font-medium leading-[28px] transition-colors">
      (8)
    </div>
  </div>
));

const FaqAccordion = memo(({ visibleFaqs }) => (
  <Accordion type="single" className="w-full text-[#1D1D1F] dark:text-neutral-100" collapsible>
    {visibleFaqs.map((item) => (
      <AccordionItem key={item.id} value={`item-${item.id}`} className="w-full border-b border-[#1D1D1F]/10 dark:border-white/15 transition-colors">
        <AccordionTrigger className="w-full text-[1.1rem] sm:text-[1.25rem] lg:text-[1.5rem] font-spacegrotesk text-left text-[#1D1D1F] dark:text-offwhite hover:text-[#1D1D1F] dark:hover:text-white transition-colors py-4">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="w-full text-[0.9rem] sm:text-[1rem] lg:text-[1.1rem] text-[#6B6B6B] dark:text-[#A0A0A0] font-spacemono text-left leading-relaxed transition-colors">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
));

const Faq = () => {
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);

  const visibleFaqs = useMemo(
    () => faqs.slice(0, visibleCount),
    [visibleCount]
  );

  const hasMore = visibleCount < faqs.length;
  const isExpanded = visibleCount > BATCH_SIZE;

  const handleShowMore = () => {
   setVisibleCount(faqs.length);
  };

  const handleShowLess = () => {
    setVisibleCount(BATCH_SIZE);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mx-auto bg-[#FFFFFF] dark:bg-black max-w-[92%] md:max-w-[95%] xl:max-w-[93.194%] select-none transition-colors duration-300">
        <div className="flex py-8 sm:py-12 px-4 sm:px-6 lg:px-[46px] justify-between items-end border-r border-l border-r-edge border-l-edge">
          <div className="flex w-full h-auto flex-col items-start gap-6 lg:gap-[37px] flex-shrink-0">
            <FaqHeader />
            <div className="w-full text-[#6B6B6B] dark:text-[#A0A0A0] font-spacemono text-[1rem]">
              <FaqAccordion visibleFaqs={visibleFaqs} />
            </div>

            {/* Show More / Show Less buttons */}
            <div className="flex items-center gap-4 self-center pt-2">
              {hasMore && (
                <button
                  onClick={handleShowMore}
                  className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D0D0D0] dark:border-[#404040] bg-transparent hover:bg-[#1D1D1F] dark:hover:bg-white transition-all duration-300 cursor-pointer"
                >
                  <span className="font-spacemono text-sm text-[#1D1D1F] dark:text-[#EDEDED] group-hover:text-white dark:group-hover:text-black transition-colors">
                    Show More
                  </span>
                  <svg
                    className="w-4 h-4 text-[#1D1D1F] dark:text-[#EDEDED] group-hover:text-white dark:group-hover:text-black transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
              {isExpanded && (
                <button
                  onClick={handleShowLess}
                  className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-[#D0D0D0] dark:border-[#404040] bg-transparent hover:bg-[#1D1D1F] dark:hover:bg-white transition-all duration-300 cursor-pointer"
                >
                  <span className="font-spacemono text-sm text-[#1D1D1F] dark:text-[#EDEDED] group-hover:text-white dark:group-hover:text-black transition-colors">
                    Show Less
                  </span>
                  <svg
                    className="w-4 h-4 text-[#1D1D1F] dark:text-[#EDEDED] group-hover:text-white dark:group-hover:text-black transition-colors"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Faq;
