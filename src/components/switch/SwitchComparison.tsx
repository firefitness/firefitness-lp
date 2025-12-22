"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, X, ArrowRight } from "lucide-react";

const comparisons = [
  {
    other: "担当が毎回変わる",
    firefitness: "担当トレーナーは変わりません",
  },
  {
    other: "専門用語での説明",
    firefitness: "わかりやすい言葉で、一緒に確認",
  },
  {
    other: "マニュアル通りの指導",
    firefitness: "あなたに合わせたオーダーメイド",
  },
  {
    other: "筋トレだけ",
    firefitness: "食事も運動も、まるごとサポート",
  },
  {
    other: "なんとなく1時間",
    firefitness: "ちゃんと「効いた」を実感できる強度",
  },
  {
    other: "流派の違い、と言われる",
    firefitness: "一人のトレーナーが一貫して見ます",
  },
];

export default function SwitchComparison() {
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
      className="py-16 sm:py-24 bg-gradient-to-b from-stone-50 to-stone-100/50 relative overflow-hidden"
    >
      {/* 背景パターン */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #d4af37 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative">
        {/* セクションタイトル */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-600 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Comparison
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-stone-800 mb-3 sm:mb-4 tracking-tight">
            同じ「パーソナルジム」でも、
            <br />
            こんなに違います。
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* ラベル */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 mb-6 px-4">
          <p className="text-stone-400 text-sm font-medium text-center">
            よくあるジム
          </p>
          <p className="text-amber-600 text-sm font-medium text-center">
            FIREFITNESS
          </p>
        </div>

        {/* 比較カード */}
        <div className="space-y-3 sm:space-y-4">
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-2 sm:gap-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* よくあるジム */}
              <div className="group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-5 bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-stone-200/50 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <X className="w-3 h-3 sm:w-4 sm:h-4 text-stone-300" />
                </div>
                <p className="text-stone-400 text-sm sm:text-base">{item.other}</p>
              </div>

              {/* 矢印（モバイル） */}
              <div className="flex justify-center md:hidden py-1">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 rotate-90" />
              </div>

              {/* FIREFITNESS */}
              <div className="group flex items-center gap-3 sm:gap-4 p-3.5 sm:p-5 bg-gradient-to-r from-white to-amber-50/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-amber-200/50 shadow-sm hover:shadow-lg hover:border-amber-300/50 transition-all duration-300">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                </div>
                <p className="text-stone-700 font-medium text-sm sm:text-base">
                  {item.firefitness}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 補足テキスト */}
        <div
          className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            「流派の違い」じゃなくて、「あなたに合うかどうか」。
            <br />
            それを見つけるのが、私たちの仕事です。
          </p>
        </div>
      </div>
    </section>
  );
}
