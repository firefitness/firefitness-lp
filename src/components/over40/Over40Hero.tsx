"use client";

import Image from "next/image";
import { HiCheck, HiPhone } from "react-icons/hi";
import { RiLineLine } from "react-icons/ri";
import { MdAnalytics } from "react-icons/md";

export default function Over40Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy via-navy to-gray-900 pt-16 overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80"
          alt="トレーニング風景"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/60 to-navy" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white py-12">
        {/* サブタイトル */}
        <p className="text-primary font-medium text-base md:text-lg mb-4">
          40代からの体づくりを始めたい岡山の方へ
        </p>

        {/* メインタイトル */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          40代からでも
          <br />
          <span className="text-primary">遅くない。</span>
          <br />
          今が、始めどき。
        </h1>

        {/* 説明文 */}
        <p className="text-gray-300 text-base md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          「若い頃のようには動けない」それは当然のこと。
          <br className="hidden md:block" />
          だからこそ、<span className="text-primary font-bold">40代の体に合った方法</span>で
          <br />
          無理なく、確実に結果を出す。
        </p>

        {/* 権威バッジ */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
            <MdAnalytics className="w-5 h-5 text-primary" />
            <span className="text-sm">精密3軸診断</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
            <HiCheck className="w-5 h-5 text-primary" />
            <span className="text-sm">40代会員多数</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full">
            <HiCheck className="w-5 h-5 text-primary" />
            <span className="text-sm">完全個室</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://lin.ee/xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-line text-white font-bold px-8 py-4 rounded-full shadow-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1"
          >
            <RiLineLine className="w-6 h-6" />
            <span>まずは無料カウンセリング</span>
          </a>
          <a
            href="https://firefitness.hacomono.jp/reserve?trial=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            <span>体験予約はこちら</span>
          </a>
        </div>

        {/* 電話 */}
        <a
          href="tel:070-8977-5851"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <HiPhone className="w-5 h-5" />
          <span>070-8977-5851（営業時間 7:00〜22:00）</span>
        </a>
      </div>

      {/* スクロールインジケーター */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
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
