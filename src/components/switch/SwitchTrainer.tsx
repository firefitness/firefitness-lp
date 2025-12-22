"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Quote, UserCheck, Shield, GraduationCap } from "lucide-react";

export default function SwitchTrainer() {
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
      className="py-16 sm:py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden"
    >
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-50/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-stone-100/50 to-transparent rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 relative">
        {/* セクションタイトル */}
        <div
          className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-600 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Your Trainer
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-stone-800 mb-3 sm:mb-4 tracking-tight">
            「担当が変わらない」という安心感
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* メインメッセージ */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            FIREFITNESSでは、
            <br />
            あなたを担当するトレーナーは変わりません。
          </p>
          <p className="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4 font-light">
            前回どこまでやったか、体調はどうだったか、
            <br />
            全部覚えています。
          </p>
          <p className="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4 font-light">
            だから、毎回ゼロからの説明は不要。
            <br />
            続きから、一緒に進められます。
          </p>
        </div>

        {/* トレーナーカード */}
        <div
          className={`relative transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* カード背景グロー */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/30 to-stone-100/30 rounded-2xl sm:rounded-3xl blur-xl" />

          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl shadow-stone-200/50 overflow-hidden border border-stone-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* 写真 */}
              <div className="relative h-56 sm:h-72 md:h-auto">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80"
                  alt="FIREFITNESSトレーナー"
                  fill
                  className="object-cover"
                />
                {/* オーバーレイ */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 via-transparent to-amber-100/10" />

                {/* 装飾ライン */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400" />
              </div>

              {/* プロフィール */}
              <div className="p-5 sm:p-8 md:p-12 bg-gradient-to-br from-white to-stone-50">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
                  </div>
                  <span className="text-xs sm:text-sm text-amber-600 font-medium tracking-wide">
                    あなたの担当トレーナー
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-stone-800 mb-4 sm:mb-6">
                  FIREFITNESS 代表
                </h3>

                {/* 経歴 */}
                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl border border-stone-100">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                    </div>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      元消防士。救急現場で「予防の大切さ」を実感し、この道へ
                    </p>
                  </div>
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 bg-stone-50 rounded-lg sm:rounded-xl border border-stone-100">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm flex-shrink-0">
                      <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                    </div>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                      保健体育教員免許 保有
                    </p>
                  </div>
                </div>

                {/* 引用 */}
                <div className="relative bg-gradient-to-br from-amber-50 to-stone-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-amber-100/50">
                  <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-amber-200 absolute top-3 sm:top-4 left-3 sm:left-4" />
                  <p className="text-stone-700 text-xs sm:text-sm md:text-base leading-relaxed pl-6 sm:pl-8 italic">
                    「難しい言葉は使いません。
                    <br />
                    わからなかったら、何度でも聞いてください。
                    <br />
                    一緒に理解しながら進めましょう。」
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
