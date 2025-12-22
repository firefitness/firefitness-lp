"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";

const concerns = [
  {
    question: "「せっかく入会したのに、もったいない」",
    answer:
      "合わない場所に通い続けるほうが、時間もお金ももったいないかもしれません。",
  },
  {
    question: "「また一から説明するのが面倒」",
    answer:
      "体験で今の状況を聞かせてください。あなたに必要なことだけ、お伝えします。",
  },
  {
    question: "「運動が苦手だから、自分のせいかも」",
    answer: "苦手な人こそ、「合う方法」を見つけることが大事です。",
  },
];

export default function SwitchConcern() {
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
      className="py-16 sm:py-24 bg-gradient-to-b from-amber-50/50 to-stone-50 relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-100/30 to-transparent rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 relative">
        {/* セクションタイトル */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-600 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Concern
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-stone-800 mb-3 sm:mb-4 tracking-tight">
            「今さら変えるのも...」と
            <br />
            思っていませんか？
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* Q&A */}
        <div className="space-y-4 sm:space-y-6">
          {concerns.map((concern, index) => (
            <div
              key={index}
              className={`group transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg shadow-stone-100 border border-stone-100 hover:shadow-xl hover:border-amber-200/50 transition-all duration-500">
                {/* 質問（吹き出し風） */}
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-stone-100 to-stone-50 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-stone-400" />
                  </div>
                  <div className="flex-grow">
                    <div className="inline-block bg-gradient-to-r from-stone-100 to-stone-50 rounded-xl sm:rounded-2xl rounded-tl-none px-4 sm:px-6 py-3 sm:py-4 shadow-sm">
                      <p className="text-stone-700 font-medium text-sm sm:text-base">{concern.question}</p>
                    </div>
                  </div>
                </div>

                {/* 回答 */}
                <div className="flex items-start gap-3 sm:gap-4 pl-12 sm:pl-16">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-amber-600" />
                  </div>
                  <p className="text-stone-600 leading-relaxed pt-0.5 sm:pt-1 text-xs sm:text-sm md:text-base">{concern.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 補足メッセージ */}
        <div
          className={`text-center mt-8 sm:mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative inline-block">
            {/* グロー */}
            <div className="absolute inset-0 bg-gradient-to-r from-amber-100/50 to-stone-100/50 rounded-2xl sm:rounded-3xl blur-xl" />

            <div className="relative bg-gradient-to-br from-white to-stone-50 rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-6 sm:py-8 shadow-lg border border-amber-200/30">
              <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                <span className="text-amber-600 text-xs sm:text-sm font-medium">ご提案</span>
              </div>
              <p className="text-stone-600 text-xs sm:text-sm md:text-base leading-relaxed">
                <span className="font-medium text-stone-800">
                  今のジムの施設を使いながら、
                </span>
                <br />
                効果的なトレーニングだけFIREFITNESSで、
                <br />
                という使い方もできます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
