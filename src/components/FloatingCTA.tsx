"use client";

import { useState, useEffect } from "react";
import { RiLineLine } from "react-icons/ri";
import { HiCalendar } from "react-icons/hi";

interface FloatingCTAProps {
  lineUrl?: string;
  reserveUrl?: string;
}

export default function FloatingCTA({
  lineUrl = "https://lin.ee/xxxxx",
  reserveUrl = "https://firefitness.hacomono.jp/reserve?trial=true",
}: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-3 md:hidden">
      <div className="flex gap-2 max-w-md mx-auto">
        <a
          href={lineUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-line text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          <RiLineLine className="w-5 h-5" />
          <span>LINE相談</span>
        </a>
        <a
          href={reserveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-colors"
        >
          <HiCalendar className="w-5 h-5" />
          <span>体験予約</span>
        </a>
      </div>
    </div>
  );
}
