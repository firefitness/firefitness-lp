"use client";

import Image from "next/image";
import { HiPhone, HiHeart, HiSparkles } from "react-icons/hi";
import { RiLineLine } from "react-icons/ri";
import { GiFlowerPot } from "react-icons/gi";

export default function Over40WomenHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-female-soft via-white to-female-cream pt-16 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-female-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-female-rose/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側：テキスト */}
          <div className="text-center md:text-left">
            {/* ターゲット */}
            <div className="inline-flex items-center gap-2 bg-female-pink/10 border border-female-pink/30 px-4 py-2 rounded-full mb-6">
              <GiFlowerPot className="w-4 h-4 text-female-pink" />
              <span className="text-female-pink text-sm font-medium">40代女性のための体づくり</span>
            </div>

            {/* メインタイトル */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              <span className="text-female-pink">美しく、健やかに。</span>
              <br />
              40代からの
              <br />
              自分磨き
            </h1>

            {/* 説明文 */}
            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              体型の変化、疲れやすさ、肌のハリ...<br />
              40代の変化は、<span className="text-female-pink font-medium">正しいケアで美しく乗り越えられます</span>。<br />
              無理なダイエットではなく、あなたらしい美しさを引き出します。
            </p>

            {/* ポイント */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <div className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full">
                <HiHeart className="w-4 h-4 text-female-pink" />
                <span className="text-sm text-gray-700">無理のないペース</span>
              </div>
              <div className="flex items-center gap-2 bg-white shadow-sm px-4 py-2 rounded-full">
                <HiSparkles className="w-4 h-4 text-female-pink" />
                <span className="text-sm text-gray-700">内側から輝く美しさ</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="https://lin.ee/xxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-line text-white font-bold px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <RiLineLine className="w-5 h-5" />
                <span>まずは相談する</span>
              </a>
              <a
                href="https://firefitness.hacomono.jp/reserve?trial=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-female-pink hover:bg-pink-500 text-white font-bold px-6 py-4 rounded-full shadow-lg transition-all"
              >
                <span>体験予約</span>
              </a>
            </div>

            {/* 電話 */}
            <a
              href="tel:070-8977-5851"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-female-pink transition-colors mt-4"
            >
              <HiPhone className="w-4 h-4" />
              <span className="text-sm">070-8977-5851</span>
            </a>
          </div>

          {/* 右側：ビジュアル */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80"
                alt="40代女性のトレーニング"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* 装飾 */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-female-pink/20 rounded-full" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-female-rose/30 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
