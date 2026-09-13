import React, { memo, useEffect, useState } from "react";

// Target: October 23, 2026, 00:00 AM IST (Asia/Kolkata, UTC+5:30)
const TARGET_TIMESTAMP = new Date("2026-10-23T00:00:00+05:30").getTime();

const calculateTimeLeft = () => {
  const now = Date.now();
  const diff = Math.max(0, TARGET_TIMESTAMP - now);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return { days, hours, minutes, seconds };
};

const TimeUnit = memo(({ value, label, isLast }) => (
  <div className="flex items-center">
    <div className="flex flex-col items-center justify-center min-w-[62px] sm:min-w-[96px] md:min-w-[124px] lg:min-w-[148px]">
      <div className="font-spacegrotesk text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#1D1D1F] dark:text-white leading-none transition-colors">
        {String(value).padStart(2, "0")}
      </div>
      <div className="font-spacemono text-[0.65rem] sm:text-xs md:text-sm uppercase tracking-[0.18em] sm:tracking-[0.25em] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors mt-2 sm:mt-3">
        {label}
      </div>
    </div>
    {!isLast && (
      <span className="font-spacegrotesk text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#6B6B6B]/40 dark:text-[#A1A1A1]/40 mx-1 sm:mx-2 md:mx-3 self-center pb-4 sm:pb-6 select-none">
        :
      </span>
    )}
  </div>
));

const Timer = memo(() => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="select-none">
      {/* Mobile view */}
      <div className="block md:hidden mx-auto bg-[#FFFFFF] dark:bg-black max-w-[92%] transition-colors duration-300">
        <div className="flex flex-col items-center justify-center border-l border-r border-t border-l-edge border-r-edge border-t-edge py-7 px-3">
          <div className="font-spacemono text-[0.7rem] uppercase tracking-[0.25em] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors mb-4 text-center">
            TransfiNITTe'26 Starts In
          </div>

          <div className="flex items-center justify-center py-1">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" isLast />
          </div>
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block mx-auto bg-[#FFFFFF] dark:bg-black max-w-[95%] xl:max-w-[93.194%] transition-colors duration-300">
        <div className="flex flex-col items-center justify-center border-l border-r border-t border-l-edge border-r-edge border-t-edge py-12 lg:py-16 px-6 lg:px-12 transition-colors">
          <div className="font-spacemono text-xs lg:text-sm uppercase tracking-[0.3em] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors mb-6 text-center">
            TransfiNITTe'26 Starts In
          </div>

          <div className="flex items-center justify-center px-4 py-2">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" isLast />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Timer;
