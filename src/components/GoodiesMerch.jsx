import React, { memo, Suspense } from "react";

export const goodies = [
  {
    name: "Transfinitte T-Shirt",
    detail: "Limited edition event tee",
    status: "Coming Soon",
    icon: "✦",
    accent: "bg-[#DCE8FF] dark:bg-[#18243A]",
  },
  {
    name: "Sticker Pack",
    detail: "Laptop-ready hacker stickers",
    status: "Free for registered students",
    icon: "✺",
    accent: "bg-[#FBE7D8] dark:bg-[#382318]",
  },
  {
    name: "Developer Kit",
    detail: "Badge, lanyard and goodies",
    status: "Free for registered students",
    icon: "⌘",
    accent: "bg-[#E4F1DC] dark:bg-[#1E321A]",
  },
];

export const GoodieCard = memo(({ item }) => (
  <article className="flex min-h-[260px] flex-1 flex-col justify-between rounded-[4px] border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-colors duration-300 dark:border-[#454545] dark:bg-[#0A0A0A] lg:p-6">
    <div className={`flex h-28 items-center justify-center rounded-[3px] text-6xl text-[#1D1D1F] dark:text-[#EDEDED] ${item.accent}`}>
      <span aria-hidden="true">{item.icon}</span>
    </div>
    <div className="mt-5 flex flex-col justify-between flex-grow gap-4">
      <div>
        <h3 className="font-spacegrotesk text-xl font-normal text-[#1D1D1F] dark:text-[#EDEDED]">
          {item.name}
        </h3>
        <p className="mt-1 font-spacemono text-xs text-[#6B6B6B] dark:text-[#A1A1A1]">
          {item.detail}
        </p>
      </div>
      <div className="pt-3 border-t border-[#E2E8F0] dark:border-[#262626]">
        <span className="inline-block rounded-full border border-[#D5DAE0] dark:border-[#404040] bg-[#E8ECF0]/70 dark:bg-[#1D1D1F] px-3 py-1 font-spacemono text-xs font-semibold text-[#1D1D1F] dark:text-[#EDEDED]">
          {item.status}
        </span>
      </div>
    </div>
  </article>
));

const GoodiesMerchContent = () => (
  <section id="goodies-merch" className="mx-auto max-w-[92%] md:max-w-[95%] bg-[#FFFFFF] transition-colors duration-300 dark:bg-black xl:max-w-[93.194%]">
    <div className="border-x border-r-edge border-l-edge px-4 py-10 sm:px-6 lg:px-[46px] lg:py-16">
      <div className="flex flex-col gap-8 lg:gap-10">
        <div className="flex items-start justify-between gap-5">
          <div>
            <div className="flex items-start">
              <h2 className="font-spacegrotesk text-3xl font-normal leading-tight text-[#1D1D1F] dark:text-[#EDEDED] lg:text-4xl xl:text-[4rem]">
                Goodies &amp; Merch
              </h2>
              <span className="font-spacemono text-[0.65rem] leading-7 text-[#6B6B6B] dark:text-[#A1A1A1]">
                (5)
              </span>
            </div>
            <p className="mt-3 max-w-xl font-spacemono text-xs leading-6 text-[#6B6B6B] dark:text-[#A1A1A1] sm:text-sm">
              Take a piece of Transfinitte home. Grab limited-edition gear and
              goodies before they are gone.
            </p>
          </div>
          <span className="hidden font-spacemono text-xs text-[#6B6B6B] dark:text-[#A1A1A1] sm:block">
            LIMITED DROP
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {goodies.map((item) => (
            <GoodieCard key={item.name} item={item} />
          ))}
        </div>

      </div>
    </div>
  </section>
);

const GoodiesMerch = () => (
  <div className="select-none">
    <Suspense fallback={<div>Loading...</div>}>
      <GoodiesMerchContent />
    </Suspense>
  </div>
);

export default GoodiesMerch;
