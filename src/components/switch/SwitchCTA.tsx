"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Calendar, Phone, ShieldCheck, Heart, Sparkles } from "lucide-react";

export default function SwitchCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-24 bg-gradient-to-br from-stone-800 via-stone-900 to-stone-800 relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-800/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-stone-700/30 to-transparent rounded-full blur-3xl" />
      </div>

      {/* 装飾ライン */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 text-center relative">
        {/* アイコン */}
        <div
          className={`flex justify-center mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/30 rotate-3">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
          </div>
        </div>

        {/* メインメッセージ */}
        <h2
          className={`text-xl sm:text-2xl md:text-4xl font-bold text-white mb-4 sm:mb-6 leading-relaxed tracking-tight transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          「合ってないかも」と感じたら、
          <br />
          <span className="bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent">
            それは変わるチャンスかもしれません。
          </span>
        </h2>

        <p
          className={`text-stone-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 leading-relaxed font-light transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          まずは話を聞かせてください。
          <br />
          一緒に、あなたに合う方法を探しましょう。
        </p>

        {/* CTAボタン */}
        <div
          className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://lin.ee/xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#00b900] text-white font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-full shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-lg"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
            <span>LINEで相談する</span>
          </a>
          <a
            href="https://firefitness.hacomono.jp/reserve?trial=true"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold px-6 sm:px-10 py-4 sm:py-5 rounded-full shadow-lg shadow-amber-500/30 hover:shadow-xl hover:shadow-amber-500/40 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-lg"
          >
            <Calendar className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
            <span>体験を予約する</span>
          </a>
        </div>

        {/* 電話番号 */}
        <a
          href="tel:070-8977-5851"
          className={`inline-flex items-center gap-2 text-stone-500 hover:text-amber-400 transition-colors mb-8 sm:mb-12 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm tracking-wide">070-8977-5851</span>
        </a>

        {/* 安心バッジ */}
        <div
          className={`flex flex-wrap justify-center gap-2 sm:gap-4 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-white/10">
            <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            <span className="text-xs sm:text-sm text-stone-300">無理な勧誘はしません</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 backdrop-blur-sm px-3 sm:px-5 py-2 sm:py-3 rounded-full border border-white/10">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
            <span className="text-xs sm:text-sm text-stone-300">話を聞くだけでもOK</span>
          </div>
        </div>
      </div>

      {/* 装飾ライン（下部） */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
    </section>
  );
}
