import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

const Flip = () => {
    function calculateDaysToGo(targetDate) {
        // Get the current date
        const currentDate = new Date();
      
        // Parse the target date (input should be in "YYYY-MM-DD" format)
        const target = new Date(targetDate);
      
        // Calculate the difference in time (milliseconds)
        const timeDifference = target - currentDate;
      
        // Convert time difference from milliseconds to days
        const daysToGo = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      
        // Return the calculated number of days
        return daysToGo;
      }
      const targetDate = '2026-10-23';
      const daysLeft = calculateDaysToGo(targetDate);
      const dateRef = useRef(null);
      const daysLeftRef = useRef(null);
    
      useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(dateRef.current, {
          delay: 10,
          duration: 0.8,
          rotateX: 90,
          opacity: 0,
          transformOrigin: "top",
          ease: "power1.in",
          onComplete: () => {
            dateRef.current.style.display = 'none';
            daysLeftRef.current.style.display = 'block';
          },
        })
        tl.to(daysLeftRef.current, {
            duration: 0.8,
            rotateX: 0,
            opacity: 1,
            transformOrigin: "bottom",
            ease: "power1.out",
          })
        tl.to(daysLeftRef.current, { delay: 8 }) // Stay visible for 8 seconds
        tl.to(daysLeftRef.current, {
            duration: 0.8,
            rotateX: 90,
            opacity: 0,
            transformOrigin: "top",
            ease: "power1.in",
            onComplete: () => {
              daysLeftRef.current.style.display = 'none';
              dateRef.current.style.display = 'block';
            },
          })
        tl.to(dateRef.current, {
            duration: 0.8,
            rotateX: 0,
            opacity: 1,
            transformOrigin: "bottom",
            ease: "power1.out",
          })
        tl.to(dateRef.current, { delay: 10 }); // Stay visible for 10 seconds
      }, []);
  return (
    <div>
        <div ref={dateRef} className='text-[#6B6B6B] dark:text-[#A1A1A1] font-spacemono text-sm font-normal leading-[17.5px] tracking-[0.35px] uppercase transition-colors'>
        OCT 23-25 2026 | GJCH
        </div>
        <div ref={daysLeftRef} className='text-[#6B6B6B] dark:text-[#A1A1A1] font-spacemono text-sm font-normal leading-[17.5px] tracking-[0.35px] uppercase transition-colors' style={{ display: 'none' }}>
            {`${daysLeft} days to go`}
        </div>
    </div>
  )
}

export default Flip
