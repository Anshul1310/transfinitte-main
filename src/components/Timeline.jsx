import React, { memo, Suspense, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { CalendarPlus } from "lucide-react";
import { GOOGLE_CALENDAR_URL } from "../constants";

const timelineData = [
  {
    date: "Oct 23",
    day: "DAY-1",
    events: [
      { time: "06:30 PM", title: "Inauguration" },
      { time: "07:00 PM", title: "Release of Problem Statements" },
      { time: "07:30 PM", title: "Hackathon Begins" },
      { time: "08:30 PM", title: "Dinner" },
    ],
  },
  {
    date: "Oct 24",
    day: "DAY-2",
    events: [
      { time: "08:30 AM", title: "Breakfast" },
      { time: "01:30 PM", title: "Lunch" },
      { time: "04:00 PM", title: "Guidance by Judges" },
      { time: "08:30 PM", title: "Dinner" },
    ],
  },
  {
    date: "Oct 25",
    day: "DAY-3",
    events: [
      { time: "08:30 AM", title: "Breakfast" },
      { time: "09:00 AM", title: "Guidance by Judges" },
      { time: "01:30 PM", title: "Lunch" },
      { time: "01:30 PM", title: "Hackathon Ends" },
      { time: "05:00 PM", title: "Judging Ends" },
      { time: "05:30 PM", title: "Valediction Ceremony" },
    ],
  },
];

/* ── Google Calendar Button ── */
const CalendarButton = memo(() => (
  <div className="flex items-center justify-center pt-8 pb-14 border-t border-[#E6E6E3] dark:border-[#222] transition-colors relative z-20">
    <a
      href={GOOGLE_CALENDAR_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1D1D1F] text-white hover:bg-[#333] dark:bg-white dark:text-[#1D1D1F] dark:hover:bg-[#E0E0E0] transition-all duration-300 shadow-sm cursor-pointer"
    >
      <CalendarPlus className="w-5 h-5 text-white dark:text-[#1D1D1F]" />
      <span className="font-spacemono text-sm font-semibold tracking-wide uppercase">
        Add to Google Calendar
      </span>
    </a>
  </div>
));

/* ── Desktop View with Scroll-driven animations ── */
const TimelineDesktop = memo(() => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 75%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="hidden md:block mx-auto max-w-[95%] bg-[#FFFFFF] dark:bg-black xl:max-w-[93.194%] transition-colors duration-300">
      <div className="flex flex-col border-r border-l border-r-edge border-l-edge transition-colors">
        {/* Title */}
        <div className="flex items-center justify-center py-14 lg:py-18">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-start"
          >
            <div className="text-[#1D1D1F] dark:text-[#EDEDED] font-spacegrotesk text-3xl font-normal leading-tight transition-colors lg:text-4xl xl:text-[4rem]">
              Timeline
            </div>
            <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
              (3)
            </div>
          </motion.div>
        </div>

        {/* Center line scroll wrapper */}
        <div ref={containerRef} className="relative min-h-screen py-6 overflow-hidden">
          {/* Semi-transparent static track */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-black/10 dark:bg-white/15 z-0 pointer-events-none transition-colors" />

          {/* Animated fill line that grows down on scroll */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] origin-top bg-gradient-to-b from-[#6B7FA3] via-[#1D1D1F] to-[#6B7FA3] dark:from-[#6B7FA3] dark:via-white dark:to-[#8FA3C7] z-0 pointer-events-none shadow-[0_0_12px_rgba(107,127,163,0.35)] dark:shadow-[0_0_12px_rgba(255,255,255,0.3)] transition-colors"
          />

          {/* Top fade mask */}
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-20 z-20 bg-gradient-to-b from-[#FFFFFF] dark:from-black to-transparent transition-colors" />

          {/* Content sections */}
          <div className="flex flex-col gap-24 lg:gap-32 relative z-10 pb-20">
            {timelineData.map((dayData, i) => (
              <div
                key={i}
                className="flex flex-row items-start justify-center w-full min-h-[380px] lg:min-h-[440px] px-8 lg:px-[46px] relative"
              >
                {/* Left Column: Sticky Day date */}
                <div className="flex-1 flex justify-end pr-8 lg:pr-12">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="sticky top-[50vh] -translate-y-1/2 self-start text-right"
                  >
                    <div className="font-spacemono text-xs uppercase tracking-[0.2em] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors mb-1">
                      {dayData.date}
                    </div>
                    <div className="font-spacegrotesk text-2xl lg:text-3xl xl:text-4xl font-bold text-[#1D1D1F] dark:text-white transition-colors">
                      {dayData.day} — {dayData.date}
                    </div>
                  </motion.div>
                </div>

                {/* Center: Sticky Indicator Dot */}
                <div className="relative flex flex-col items-center h-full w-12 flex-shrink-0">
                  <div className="sticky top-[50vh] -translate-y-1/2 flex items-center justify-center z-10">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="w-6 h-6 rounded-full bg-white dark:bg-black border-[5px] border-[#1D1D1F] dark:border-white shadow-md transition-colors"
                    />
                    <div className="absolute w-10 h-10 rounded-full bg-[#6B7FA3]/25 dark:bg-white/20 animate-ping pointer-events-none" />
                  </div>
                </div>

                {/* Right Column: Day Schedule */}
                <div className="flex-1 pl-8 lg:pl-12 flex flex-col gap-4 lg:gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5 }}
                    className="font-spacegrotesk text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1D1D1F] dark:text-white transition-colors"
                  >
                    {dayData.day}
                  </motion.div>

                  <div className="flex flex-col gap-3 lg:gap-5 font-spacegrotesk text-lg lg:text-xl xl:text-2xl text-[#1D1D1F] dark:text-[#EDEDED]">
                    {dayData.events.map((event, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: 25 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          duration: 0.45,
                          delay: j * 0.07,
                          ease: "easeOut",
                        }}
                        className="group flex items-baseline gap-4 py-1 transition-colors"
                      >
                        <span className="font-spacemono text-sm lg:text-base text-[#6B6B6B] dark:text-[#A1A1A1] font-normal min-w-[95px] lg:min-w-[105px] flex-shrink-0 group-hover:text-[#1D1D1F] dark:group-hover:text-white transition-colors">
                          {event.time}
                        </span>
                        <span className="font-medium group-hover:translate-x-1.5 transition-transform duration-200">
                          {event.title}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom fade mask */}
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-20 z-20 bg-gradient-to-t from-[#FFFFFF] dark:from-black to-transparent transition-colors" />
        </div>

        {/* Add to Calendar Button */}
        <CalendarButton />
      </div>
    </div>
  );
});

/* ── Mobile View with Scroll-driven animations ── */
const TimelineMobile = memo(() => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 75%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="block md:hidden mx-auto max-w-[92%] bg-[#FFFFFF] dark:bg-black transition-colors duration-300">
      <div className="flex flex-col border-l border-r border-l-edge border-r-edge transition-colors">
        {/* Title */}
        <div className="flex items-start py-6 px-4">
          <div className="text-[#1D1D1F] dark:text-[#EDEDED] font-spacegrotesk text-[2rem] font-normal leading-[48px] tracking-[-1.5px] transition-colors">
            Timeline
          </div>
          <div className="flex w-auto h-auto flex-col justify-center font-spacemono text-[0.65rem] font-normal leading-[28px] text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
            (3)
          </div>
        </div>

        {/* Timeline Area with animated vertical line */}
        <div ref={containerRef} className="relative px-4 pb-8 overflow-hidden">
          {/* Static track */}
          <div className="absolute left-[30px] top-0 bottom-0 w-[3px] bg-black/10 dark:bg-white/15 z-0 pointer-events-none transition-colors" />

          {/* Animated fill line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[30px] top-0 bottom-0 w-[3px] origin-top bg-gradient-to-b from-[#6B7FA3] via-[#1D1D1F] to-[#6B7FA3] dark:from-[#6B7FA3] dark:via-white dark:to-[#8FA3C7] z-0 pointer-events-none shadow-[0_0_10px_rgba(107,127,163,0.3)] dark:shadow-[0_0_10px_rgba(255,255,255,0.25)] transition-colors"
          />

          {/* Day sections */}
          <div className="flex flex-col gap-12 relative z-10 pt-2">
            {timelineData.map((dayData, i) => (
              <div key={i} className="flex flex-row items-start gap-5 relative">
                {/* Dot */}
                <div className="relative flex flex-col items-center flex-shrink-0 w-7">
                  <div className="sticky top-[50vh] -translate-y-1/2 w-5 h-5 rounded-full bg-white dark:bg-black border-[4px] border-[#1D1D1F] dark:border-white shadow-sm z-10 transition-colors" />
                </div>

                {/* Schedule Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1 flex flex-col gap-3"
                >
                  <div>
                    <div className="font-spacemono text-[0.7rem] uppercase tracking-widest text-[#6B6B6B] dark:text-[#A1A1A1] transition-colors">
                      {dayData.date}
                    </div>
                    <div className="font-spacegrotesk text-2xl font-bold text-[#1D1D1F] dark:text-[#EDEDED] transition-colors">
                      {dayData.day}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2.5 font-spacegrotesk text-base text-[#1D1D1F] dark:text-[#EDEDED]">
                    {dayData.events.map((event, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: 15 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.35, delay: j * 0.05 }}
                        className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 py-1"
                      >
                        <span className="font-spacemono text-xs text-[#6B6B6B] dark:text-[#A1A1A1] flex-shrink-0">
                          {event.time}
                        </span>
                        <span className="font-medium">
                          {event.title}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Add to Calendar Button */}
        <CalendarButton />
      </div>
    </div>
  );
});

const Timeline = () => {
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <TimelineMobile />
        <TimelineDesktop />
      </Suspense>
    </div>
  );
};

export default Timeline;
