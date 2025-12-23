"use client";

import { useState, useEffect } from "react";

interface CountdownTimerProps {
  theme?: "light" | "dark" | "female";
}

export default function CountdownTimer({ theme = "light" }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const difference = endOfMonth.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const themeStyles = {
    light: {
      box: "bg-white/10 backdrop-blur",
      number: "text-white",
      label: "text-gray-300",
    },
    dark: {
      box: "bg-slate-800 border border-slate-600",
      number: "text-male-accent",
      label: "text-gray-400",
    },
    female: {
      box: "bg-female-pink/10 border border-female-pink/30",
      number: "text-female-pink",
      label: "text-gray-500",
    },
  };

  const styles = themeStyles[theme];

  return (
    <div className="flex justify-center gap-3 md:gap-4">
      <div className={`${styles.box} rounded-lg px-3 py-2 md:px-4 md:py-3 text-center min-w-[60px] md:min-w-[80px]`}>
        <span className={`block text-2xl md:text-4xl font-bold ${styles.number}`}>
          {timeLeft.days}
        </span>
        <span className={`text-xs md:text-sm ${styles.label}`}>日</span>
      </div>
      <div className={`${styles.box} rounded-lg px-3 py-2 md:px-4 md:py-3 text-center min-w-[60px] md:min-w-[80px]`}>
        <span className={`block text-2xl md:text-4xl font-bold ${styles.number}`}>
          {timeLeft.hours}
        </span>
        <span className={`text-xs md:text-sm ${styles.label}`}>時間</span>
      </div>
      <div className={`${styles.box} rounded-lg px-3 py-2 md:px-4 md:py-3 text-center min-w-[60px] md:min-w-[80px]`}>
        <span className={`block text-2xl md:text-4xl font-bold ${styles.number}`}>
          {timeLeft.minutes}
        </span>
        <span className={`text-xs md:text-sm ${styles.label}`}>分</span>
      </div>
      <div className={`${styles.box} rounded-lg px-3 py-2 md:px-4 md:py-3 text-center min-w-[60px] md:min-w-[80px]`}>
        <span className={`block text-2xl md:text-4xl font-bold ${styles.number}`}>
          {timeLeft.seconds}
        </span>
        <span className={`text-xs md:text-sm ${styles.label}`}>秒</span>
      </div>
    </div>
  );
}
