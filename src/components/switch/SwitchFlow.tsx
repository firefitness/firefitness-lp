"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, Calendar, ClipboardCheck, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "STEP 1",
    title: "LINEで相談",
    description:
      "「ちょっと話を聞いてみたい」でも大丈夫。まずはお気軽にメッセージください。",
  },
  {
    icon: Calendar,
    step: "STEP 2",
    title: "体験セッション（60分）",
    description:
      "今の状況を聞かせてください。体の使い方や食事のことを、一緒に確認します。",
  },
  {
    icon: ClipboardCheck,
    step: "STEP 3",
    title: "あなた専用のご提案",
    description:
      "「こうすれば変わりそう」がわかったら、続けるかどうかは、その後で決めてください。",
  },
];

export default function SwitchFlow() {
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
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-50/30 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* セクションタイトル */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-600 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Flow
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-stone-800 mb-3 sm:mb-4 tracking-tight">
            まずは「話を聞くだけ」でもOKです
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* タイムライン */}
        <div className="relative">
          {/* 縦線 */}
          <div className="absolute left-6 sm:left-7 md:left-8 top-8 bottom-8 w-px bg-gradient-to-b from-amber-200 via-amber-300 to-amber-200 hidden md:block" />

          <div className="space-y-4 sm:space-y-6 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative flex gap-4 sm:gap-6 md:gap-8 transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${200 + index * 200}ms` }}
                >
                  {/* アイコン */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200/50 rotate-3 hover:rotate-0 transition-transform duration-500">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>

                  {/* コンテンツ */}
                  <div className="flex-grow pb-4 sm:pb-8 md:pb-12">
                    <div className="group bg-gradient-to-br from-white to-stone-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg shadow-stone-100 border border-stone-100 hover:shadow-xl hover:border-amber-200/50 transition-all duration-500">
                      <span className="inline-block bg-gradient-to-r from-amber-100 to-amber-50 text-amber-700 text-[10px] sm:text-xs font-bold px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                        {step.step}
                      </span>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-stone-800 mb-2 sm:mb-3">
                        {step.title}
                      </h3>
                      <p className="text-stone-500 text-xs sm:text-sm md:text-base leading-relaxed font-light">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 強調メッセージ */}
        <div
          className={`mt-6 sm:mt-8 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative">
            {/* グロー */}
            <div className="absolute inset-0 bg-gradient-to-r from-stone-700 to-stone-800 rounded-xl sm:rounded-2xl blur-xl opacity-20" />

            <div className="relative bg-gradient-to-r from-stone-800 to-stone-700 rounded-xl sm:rounded-2xl p-5 sm:p-8 text-center shadow-xl">
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
                <span className="text-amber-300 text-xs sm:text-sm font-medium">安心のお約束</span>
              </div>
              <p className="text-white font-medium text-sm sm:text-base md:text-lg">
                「入会しなきゃいけない」という雰囲気は出しません。
                <br />
                <span className="text-stone-300 text-xs sm:text-sm md:text-base">合わなければ、無理に勧めません。</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
