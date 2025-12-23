"use client";

import Image from "next/image";
import { HiCheck, HiPhone, HiChartBar, HiShieldCheck } from "react-icons/hi";
import { RiLineLine } from "react-icons/ri";
import { GiMuscleUp } from "react-icons/gi";

export default function MetaboHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-male-dark via-gray-900 to-black pt-16 overflow-hidden">
      {/* 背景画像 - 男性向けハードな雰囲気 */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=1920&q=80"
          alt="トレーニング風景"
          fill
          className="object-cover opacity-15"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-male-dark/90 via-gray-900/80 to-black" />
        {/* グリッドパターン */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px'}} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white py-12">
        {/* 警告バッジ */}
        <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/50 px-4 py-2 rounded-full mb-6">
          <HiShieldCheck className="w-5 h-5 text-red-400" />
          <span className="text-red-400 font-medium text-sm">健康診断の数値が気になり始めた岡山の男性へ</span>
        </div>

        {/* メインタイトル - より力強く */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight">
          40代、気づいたら
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">「メタボ予備軍」</span>
          <br />
          <span className="text-male-accent">まだ、間に合う。</span>
        </h1>

        {/* 説明文 */}
        <p className="text-gray-400 text-base md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          他店・ヨガ・ピラティス・整骨院とは違う
          <br className="hidden md:block" />
          <span className="text-white font-bold">精密な3軸診断</span>で、
          あなただけの改善プログラムを。
          <br />
          <span className="text-male-accent">食事制限なし、週1回60分</span>から始める確実な体づくり。
        </p>

        {/* 実績バッジ - データ重視の男性向け */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
          <div className="flex items-center gap-2 bg-male-accent/10 border border-male-accent/30 px-4 py-2 rounded">
            <HiChartBar className="w-5 h-5 text-male-accent" />
            <span className="text-sm font-medium">精密3軸診断</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/20 px-4 py-2 rounded">
            <GiMuscleUp className="w-5 h-5 text-orange-500" />
            <span className="text-sm">内臓脂肪 平均-15%</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/20 px-4 py-2 rounded">
            <HiCheck className="w-5 h-5 text-green-500" />
            <span className="text-sm">継続率92%</span>
          </div>
        </div>

        {/* CTA - 力強いデザイン */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://lin.ee/xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-line text-white font-bold px-8 py-4 rounded shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <RiLineLine className="w-6 h-6" />
            <span>無料カウンセリング</span>
          </a>
          <a
            href="https://firefitness.hacomono.jp/reserve?trial=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-bold px-8 py-4 rounded shadow-lg shadow-orange-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>体験予約する</span>
          </a>
        </div>

        {/* 電話 */}
        <a
          href="tel:070-8977-5851"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors"
        >
          <HiPhone className="w-5 h-5" />
          <span className="text-sm">070-8977-5851（7:00〜22:00）</span>
        </a>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-male-accent"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
