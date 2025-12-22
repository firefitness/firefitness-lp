"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, MessageCircle, Calendar, Sparkles } from "lucide-react";

export default function SwitchHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-white to-amber-50/30 pt-16 overflow-hidden">
      {/* 背景装飾 - ゴールドアクセント */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-amber-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tr from-stone-200/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-amber-100/10 to-transparent rounded-full" />
      </div>

      {/* 装飾ライン */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側：テキスト */}
          <div
            className={`text-center md:text-left transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* ターゲットバッジ */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-amber-50 to-stone-50 border border-amber-200/50 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
              <span className="text-amber-700 text-xs sm:text-sm font-medium tracking-wide">
                40〜50代女性のための個別相談
              </span>
            </div>

            {/* メインタイトル */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-6 sm:mb-8 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                「ジムに通っているのに、
                <br />
                変わらない。」
              </span>
              <br />
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-3 sm:mt-4 block text-stone-700">
                それ、あなたのせいじゃありません。
              </span>
            </h1>

            {/* 説明文 */}
            <p className="text-stone-500 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed font-light">
              高いお金を払っているのに、成果が見えない。
              <br />
              それには、ちゃんと理由があります。
            </p>

            {/* CTA */}
            <div
              className={`flex flex-col gap-3 sm:gap-4 justify-center md:justify-start transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a
                href="https://lin.ee/xxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-[#00b900] text-white font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/30 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                <span>まずは話を聞いてみる</span>
              </a>
              <a
                href="https://firefitness.hacomono.jp/reserve?trial=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-full shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:scale-110" />
                <span>体験してみる</span>
              </a>
            </div>

            {/* 電話 */}
            <a
              href="tel:070-8977-5851"
              className="inline-flex items-center gap-2 text-stone-400 hover:text-amber-600 transition-colors mt-6"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm tracking-wide">070-8977-5851</span>
            </a>
          </div>

          {/* 右側：ビジュアル */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* メイン画像 */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl shadow-stone-300/50">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                alt="トレーナーと相談する女性"
                fill
                className="object-cover"
                priority
              />
              {/* オーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-amber-100/10" />
            </div>

            {/* 装飾フレーム - モバイルでは非表示 */}
            <div className="absolute -inset-4 border border-amber-200/30 rounded-[2rem] -z-10 hidden sm:block" />
            <div className="absolute -inset-8 border border-amber-100/20 rounded-[2.5rem] -z-10 hidden sm:block" />

            {/* 装飾ドット - モバイルでは小さく */}
            <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-amber-100 to-amber-50 rounded-full -z-10" />
            <div className="absolute -top-3 -left-3 sm:-top-6 sm:-left-6 w-10 h-10 sm:w-20 sm:h-20 bg-gradient-to-br from-stone-100 to-stone-50 rounded-full -z-10" />
          </div>
        </div>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-stone-300 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-stone-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
