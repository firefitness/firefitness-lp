"use client";

import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    initial: "M",
    age: 48,
    occupation: "主婦",
    content:
      "前のジムでは毎回違うトレーナーさんで、同じ説明を何度もしていました。ここでは先生が一人だから、話が早いです。",
  },
  {
    initial: "K",
    age: 52,
    occupation: "会社員",
    content:
      "食事のことも相談できるのが嬉しい。前は「うちではやってません」と言われてどうしたらいいかわからなかった。",
  },
  {
    initial: "S",
    age: 45,
    occupation: "自営業",
    content:
      "1時間でしっかり「やった！」という感覚があります。前のジムでは物足りなくて、帰りにウォーキングを追加していました（笑）",
  },
];

export default function SwitchVoice() {
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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-amber-50/30 to-transparent rounded-full" />

      <div className="max-w-5xl mx-auto px-4 relative">
        {/* セクションタイトル */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-600 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Voice
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-stone-800 mb-3 sm:mb-4 tracking-tight">
            同じ悩みを持っていた方の声
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* お客様の声カード */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* カード背景グロー */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-stone-100/30 rounded-2xl sm:rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-gradient-to-br from-white to-stone-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg shadow-stone-100 border border-stone-100 hover:shadow-xl hover:border-amber-200/50 transition-all duration-500 h-full">
                {/* 引用アイコン */}
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-amber-100 absolute top-4 right-4 sm:top-6 sm:right-6" />

                {/* プロフィール */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md shadow-amber-100/50 border border-amber-200/30">
                    <span className="text-lg sm:text-xl font-bold text-amber-600">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-stone-800 text-sm sm:text-base">
                      {testimonial.initial}様
                    </p>
                    <p className="text-xs sm:text-sm text-stone-500">
                      {testimonial.age}歳・{testimonial.occupation}
                    </p>
                  </div>
                </div>

                {/* コメント */}
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  「{testimonial.content}」
                </p>

                {/* 装飾ライン */}
                <div className="absolute bottom-0 left-4 right-4 sm:left-6 sm:right-6 h-1 bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
