"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const problems = [
  "担当トレーナーが毎回変わって、前回の続きがわからない",
  "難しい専門用語で説明されて、結局よくわからない",
  "1時間あるのに、なんだか物足りない",
  "「今日も頑張った！」という達成感がない",
  "食事のことを聞いても「うちではやってません」と言われた",
  "有酸素マシンはあるけど、使い方は自分で調べて、と言われた",
  "高いお金を払っているのに、変化を実感できない",
];

export default function SwitchProblem() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            problems.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => [...prev, index]);
              }, index * 150);
            });
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
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-stone-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-amber-50/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* セクションタイトル */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-amber-600 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Check List
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-stone-800 mb-3 sm:mb-4 tracking-tight">
            こんなこと、感じていませんか？
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* チェックリスト */}
        <div className="space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 sm:gap-4 p-4 sm:p-5 bg-gradient-to-r from-stone-50 to-white rounded-xl sm:rounded-2xl border border-stone-100 shadow-sm hover:shadow-md hover:border-amber-200/50 transition-all duration-500 ${
                visibleItems.includes(index)
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-amber-100 to-amber-50 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-200/50">
                <Check className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
              </div>
              <p className="text-stone-600 text-sm sm:text-base md:text-lg leading-relaxed">
                {problem}
              </p>
            </div>
          ))}
        </div>

        {/* 強調テキスト */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 via-amber-50 to-amber-100/50 rounded-2xl sm:rounded-3xl blur-xl" />
          <div className="relative bg-gradient-to-br from-stone-50 to-white p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-amber-200/30 shadow-lg">
            <p className="text-stone-700 text-base sm:text-lg md:text-xl leading-relaxed text-center">
              一つでも当てはまったら、
              <br className="sm:hidden" />
              <span className="font-bold text-stone-800 relative inline-block mt-2">
                それは「あなたの努力不足」ではありません。
                <span className="absolute bottom-0.5 sm:bottom-1 left-0 right-0 h-2 sm:h-3 bg-gradient-to-r from-amber-200/60 to-amber-300/60 -z-10 rounded" />
              </span>
              <br />
              <span className="text-stone-500 text-sm sm:text-base mt-2 sm:mt-3 block font-light">
                「合っていない」だけかもしれません。
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
