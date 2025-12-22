"use client";

import { useEffect, useRef, useState } from "react";
import { Bone, Utensils, Brain, ArrowRight, Target, AlertCircle } from "lucide-react";

const targetMuscles = [
  { name: "広背筋上部", description: "背中の広がり・姿勢の土台" },
  { name: "僧帽筋下部", description: "肩甲骨の安定" },
  { name: "前鋸筋", description: "肩の動きをスムーズに" },
  { name: "内転筋", description: "骨盤の安定・O脚改善" },
  { name: "大臀筋上部", description: "ヒップアップ・腰痛予防" },
];

export default function SwitchSolution() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-stone-100/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-50/30 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 relative">
        {/* セクションタイトル */}
        <div
          className={`text-center mb-6 sm:mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-amber-600 text-xs sm:text-sm font-medium tracking-widest uppercase mb-3 sm:mb-4">
            Solution
          </p>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-stone-800 mb-3 sm:mb-4 tracking-tight">
            まずは「なぜ変わらないのか」を
            <br />
            一緒に見つけます
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full" />
        </div>

        {/* 導入文 */}
        <div
          className={`text-center mb-10 sm:mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            頑張っているのに変わらないのは、
            <br />
            「やり方」があなたに合っていないから。
          </p>
          <p className="text-stone-500 text-sm sm:text-base md:text-lg leading-relaxed mt-3 sm:mt-4 font-light">
            FIREFITNESSでは、最初に
            <br />
            あなたの体の使い方のクセや、
            <br />
            続けやすい方法を一緒に確認します。
          </p>
        </div>

        {/* メインカード：姿勢と筋肉 */}
        <div
          className={`relative mb-8 sm:mb-10 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* カードの背景グロー */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-100/40 to-stone-100/40 rounded-2xl sm:rounded-3xl blur-xl" />

          <div className="relative bg-gradient-to-br from-white to-stone-50 border border-stone-200/50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-xl shadow-stone-200/50">
            {/* アイコンとタイトル */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-amber-200/50 rotate-3">
                <Bone className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600" />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-stone-800 text-center sm:text-left">
                「根本から変える」トレーニング
              </h3>
            </div>

            {/* よくあるジムの問題点 */}
            <div className="bg-stone-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 border border-stone-100">
              <div className="flex items-start gap-3 sm:gap-4 mb-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-stone-200/50 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-3 h-3 sm:w-4 sm:h-4 text-stone-400" />
                </div>
                <div>
                  <p className="text-stone-500 text-xs sm:text-sm md:text-base leading-relaxed">
                    多くのジムでは、姿勢チェックはしても、
                    <span className="font-medium text-stone-600">「筋肉痛が来やすい場所」だけを鍛えて終わり</span>
                    になっていることがあります。
                  </p>
                  <p className="text-stone-500 text-xs sm:text-sm md:text-base leading-relaxed mt-2">
                    胸や太もも裏、お尻...確かに筋肉痛は来る。
                    <br />
                    でも、<span className="font-medium text-stone-600">姿勢の根本は変わらない</span>まま。
                  </p>
                </div>
              </div>
            </div>

            {/* FIREFITNESSの違い */}
            <div className="mb-6 sm:mb-8">
              <p className="text-stone-700 font-medium text-center text-sm sm:text-base md:text-lg mb-2">
                FIREFITNESSでは、
                <span className="text-amber-600">「普通は鍛えにくい場所」</span>を
                <br className="md:hidden" />
                しっかり刺激します
              </p>
            </div>

            {/* 鍛える部位の図解 */}
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* 左：イラスト風の説明 */}
              <div className="bg-gradient-to-br from-amber-50/50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-inner border border-amber-100/50">
                <p className="text-xs sm:text-sm text-stone-500 text-center mb-3 sm:mb-4 font-medium">
                  姿勢を支える「見えにくい筋肉」たち
                </p>
                <div className="relative aspect-[3/4] max-w-[160px] sm:max-w-[200px] mx-auto">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <svg viewBox="0 0 100 140" className="w-full h-full drop-shadow-lg">
                        {/* 頭 */}
                        <circle cx="50" cy="12" r="10" fill="#d6d3d1" />
                        {/* 首 */}
                        <rect x="46" y="22" width="8" height="8" fill="#d6d3d1" />
                        {/* 胴体 */}
                        <path d="M30 30 L70 30 L75 80 L25 80 Z" fill="#d6d3d1" />
                        {/* 腕 */}
                        <rect x="18" y="32" width="10" height="35" rx="5" fill="#d6d3d1" />
                        <rect x="72" y="32" width="10" height="35" rx="5" fill="#d6d3d1" />
                        {/* 脚 */}
                        <rect x="30" y="80" width="15" height="50" rx="5" fill="#d6d3d1" />
                        <rect x="55" y="80" width="15" height="50" rx="5" fill="#d6d3d1" />

                        {/* ハイライト部位 - ゴールドカラー */}
                        {/* 広背筋上部 */}
                        <ellipse cx="38" cy="45" rx="8" ry="12" fill="#f59e0b" opacity="0.7" />
                        <ellipse cx="62" cy="45" rx="8" ry="12" fill="#f59e0b" opacity="0.7" />
                        {/* 僧帽筋下部 */}
                        <ellipse cx="50" cy="38" rx="12" ry="6" fill="#fbbf24" opacity="0.7" />
                        {/* 前鋸筋 */}
                        <ellipse cx="28" cy="50" rx="4" ry="8" fill="#fcd34d" opacity="0.8" />
                        <ellipse cx="72" cy="50" rx="4" ry="8" fill="#fcd34d" opacity="0.8" />
                        {/* 大臀筋上部 */}
                        <ellipse cx="42" cy="78" rx="8" ry="5" fill="#f59e0b" opacity="0.7" />
                        <ellipse cx="58" cy="78" rx="8" ry="5" fill="#f59e0b" opacity="0.7" />
                        {/* 内転筋 */}
                        <ellipse cx="44" cy="95" rx="4" ry="10" fill="#fbbf24" opacity="0.6" />
                        <ellipse cx="56" cy="95" rx="4" ry="10" fill="#fbbf24" opacity="0.6" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs text-stone-400 text-center mt-3 sm:mt-4">
                  ゴールドの部分が「普段鍛えにくい」けど大切な筋肉
                </p>
              </div>

              {/* 右：部位リスト */}
              <div className="space-y-2 sm:space-y-3">
                {targetMuscles.map((muscle, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 sm:gap-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md shadow-stone-100 border border-stone-100 hover:shadow-lg hover:border-amber-200/50 transition-all duration-300 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-8"
                    }`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="font-medium text-stone-800 text-sm sm:text-base">{muscle.name}</p>
                      <p className="text-xs sm:text-sm text-stone-500">{muscle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 結論 */}
            <div className="mt-8 sm:mt-10 bg-gradient-to-r from-stone-800 to-stone-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center shadow-lg">
              <p className="text-white text-sm sm:text-base md:text-lg">
                これらを鍛えないと、
                <span className="font-bold text-amber-300">根本的な姿勢改善にはつながりません。</span>
                <br />
                <span className="text-stone-300 text-xs sm:text-sm md:text-base mt-1 block">
                  今のトレーニング、もったいないかもしれません。
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* 残り2つのカード */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          {/* 食事カード */}
          <div
            className={`group relative transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-white to-emerald-50/50 border border-emerald-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-200/50 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Utensils className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800 text-center mb-3 sm:mb-4">
                食事の「置き換え」提案
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm leading-relaxed text-center mb-4 sm:mb-6 font-light">
                「ガマン」ではなく「置き換え」だから続く。
                <br />
                無理なく、一生続けられる食べ方を。
              </p>
              <div className="space-y-2 sm:space-y-3">
                {["菓子パン → おにぎり", "カフェラテ → ブラックコーヒー"].map((example, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 shadow-sm"
                  >
                    <span className="text-stone-400 line-through">{example.split(" → ")[0]}</span>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-500" />
                    <span className="font-medium text-emerald-600">
                      {example.split(" → ")[1]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 継続カード */}
          <div
            className={`group relative transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-100/50 to-transparent rounded-2xl sm:rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative bg-gradient-to-br from-white to-violet-50/50 border border-violet-100 rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500">
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-violet-100 to-violet-50 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-violet-200/50 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                  <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-violet-600" />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-stone-800 text-center mb-3 sm:mb-4">
                あなたに合った「続け方」
              </h3>
              <p className="text-stone-500 text-xs sm:text-sm leading-relaxed text-center font-light">
                完璧にやろうとして疲れちゃう人、
                <br />
                なんとなくで続かない人、
                <br />
                あなたのタイプに合わせた続け方を設計。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
