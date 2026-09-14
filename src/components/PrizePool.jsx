import React, { memo, Suspense } from "react";

const reachData = [
  {
    label: "Participants",
    stats: [
      { heading: "Hackers", value: "550+" },
      { heading: "Teams", value: "100+" },
    ],
  },
  {
    label: "Prize Pool",
    stats: [
      {value: "₹ 15L+" },
    ],
  },
];

const ReachMobile = memo(() => (
  <div className="block md:hidden mx-auto max-w-[92%] bg-[#FFFFFF] dark:bg-black transition-colors duration-300">
    <div className="flex flex-col gap-8 border-l border-r border-l-edge border-r-edge py-6 px-4">
      {/* Title */}
      <div className="flex items-start">
        <div className="text-[#1D1D1F] dark:text-white font-spacegrotesk text-[2rem] font-normal leading-[48px] tracking-[-1.5px] transition-colors">
          Reach
        </div>
        <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
          (4)
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-8">
        {reachData.map((row, i) => (
          <div key={i} className="flex flex-col gap-4">
            {/* Row label */}
            <div className="font-spacemono text-lg text-[#6B6B6B] dark:text-[#888] tracking-wide transition-colors">
              {row.label}
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {row.stats.map((stat, j) => (
                <div key={j} className="flex flex-col gap-1">
                  <div className="font-spacegrotesk text-sm font-medium text-[#1D1D1F] dark:text-white transition-colors">
                    {stat.heading}
                  </div>
                  <div className="font-spacegrotesk text-[2.5rem] font-bold leading-none tracking-tight text-[#1D1D1F] dark:text-white transition-colors">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));

const ReachDesktop = memo(() => (
  <div className="hidden md:block mx-auto max-w-[95%] bg-[#FFFFFF] dark:bg-black transition-colors duration-300 xl:max-w-[93.194%]">
    <div className="flex h-full flex-col border-r border-l border-r-edge border-l-edge px-6 py-10 lg:px-[46px] lg:py-16">
      {/* Title */}
      <div className="flex items-start mb-10 lg:mb-14">
        <div className="text-[#1D1D1F] dark:text-white font-spacegrotesk text-3xl font-normal leading-tight transition-colors lg:text-4xl xl:text-[4rem]">
          Reach
        </div>
        <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
          (4)
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-0">
        {reachData.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_1fr_1fr] items-end gap-6 lg:gap-10 py-8 lg:py-10"
          >
            {/* Row label — left column */}
            <div className="font-spacemono text-lg lg:text-xl xl:text-2xl text-[#6B6B6B] dark:text-[#888] tracking-wide self-center transition-colors">
              {row.label}
            </div>

            {/* Stat blocks — middle and right columns */}
            {row.stats.map((stat, j) => (
              <div key={j} className="flex flex-col gap-1 lg:gap-2">
                <div className="font-spacegrotesk text-sm lg:text-base font-medium text-[#1D1D1F] dark:text-white transition-colors">
                  {stat.heading}
                </div>
                <div className="font-spacegrotesk text-[3rem] lg:text-[4rem] xl:text-[5rem] font-bold leading-none tracking-tight text-[#1D1D1F] dark:text-white transition-colors">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
));

const Reach = () => {
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <ReachMobile />
        <ReachDesktop />
      </Suspense>
    </div>
  );
};

export default Reach;
