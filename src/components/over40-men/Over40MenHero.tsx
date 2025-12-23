"use client";

import Image from "next/image";
import { HiPhone, HiTrendingUp } from "react-icons/hi";
import { RiLineLine } from "react-icons/ri";
import { BsGraphUp } from "react-icons/bs";

export default function Over40MenHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 overflow-hidden">
      {/* 背景 - ビジネス感のある抽象的パターン */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1920&q=80"
          alt="トレーニング"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95" />
        {/* 抽象的なライン */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-male-accent to-transparent" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-premium-silver to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-male-accent to-transparent" />
        </div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側：テキスト */}
          <div className="text-white">
            {/* ターゲット */}
            <p className="text-male-accent font-medium text-sm tracking-wider mb-4 flex items-center gap-2">
              <BsGraphUp className="w-4 h-4" />
              40代ビジネスマンのための体づくり
            </p>

            {/* メインタイトル */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-premium-silver">仕事のパフォーマンス</span>は
              <br />
              <span className="text-male-accent">体のコンディション</span>で決まる
            </h1>

            {/* 説明文 */}
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              20代の頃のような回復力がない。集中力が続かない。<br />
              それは「年だから」ではなく、<span className="text-white font-medium">正しいケアをしていないから</span>です。<br />
              精密3軸診断で、40代の体に最適化されたプログラムを。
            </p>

            {/* 数値実績 */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                <p className="text-2xl md:text-3xl font-bold text-male-accent">92%</p>
                <p className="text-xs text-gray-500">継続率</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                <p className="text-2xl md:text-3xl font-bold text-white">60<span className="text-sm">分</span></p>
                <p className="text-xs text-gray-500">週1回から</p>
              </div>
              <div className="text-center p-4 bg-white/5 rounded border border-white/10">
                <p className="text-2xl md:text-3xl font-bold text-green-500">22<span className="text-sm">時</span></p>
                <p className="text-xs text-gray-500">まで営業</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://lin.ee/xxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-line text-white font-bold px-6 py-4 rounded shadow-lg hover:shadow-green-500/25 transition-all"
              >
                <RiLineLine className="w-5 h-5" />
                <span>無料カウンセリング</span>
              </a>
              <a
                href="https://firefitness.hacomono.jp/reserve?trial=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-male-accent hover:bg-blue-600 text-white font-bold px-6 py-4 rounded shadow-lg transition-all"
              >
                <span>体験予約</span>
              </a>
            </div>

            {/* 電話 */}
            <a
              href="tel:070-8977-5851"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-white transition-colors mt-4"
            >
              <HiPhone className="w-4 h-4" />
              <span className="text-sm">070-8977-5851</span>
            </a>
          </div>

          {/* 右側：ビジュアル */}
          <div className="hidden md:block relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80"
                alt="40代のトレーニング"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
            {/* フローティングカード */}
            <div className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 rounded-lg p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-male-accent/20 rounded-full flex items-center justify-center">
                  <HiTrendingUp className="w-5 h-5 text-male-accent" />
                </div>
                <div>
                  <p className="text-white font-bold">体脂肪率</p>
                  <p className="text-male-accent text-sm">平均 -5.2%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
