"use client";

import Image from "next/image";
import { HiPhone, HiLightningBolt } from "react-icons/hi";
import { RiLineLine } from "react-icons/ri";
import { BsLaptop } from "react-icons/bs";

export default function DeskworkMenHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16 overflow-hidden">
      {/* 背景 - テクノロジー感 */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
          alt="オフィス"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-blue-900/90" />
        {/* コードパターン風の背景 */}
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(100,150,200,0.1) 50px, rgba(100,150,200,0.1) 51px)'}} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 左側：テキスト */}
          <div className="text-white">
            {/* ターゲット */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-4 py-2 rounded mb-6">
              <BsLaptop className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium font-mono">デスクワーカーのための体メンテナンス</span>
            </div>

            {/* メインタイトル */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="text-blue-400">肩こり・腰痛</span>の
              <br />
              <span className="text-white">根本原因</span>を特定し
              <br />
              <span className="text-gray-400">確実に改善する</span>
            </h1>

            {/* 説明文 */}
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed font-light">
              マッサージ、整骨院、ストレッチ...一時的に楽になっても、すぐに戻る。<br />
              それは<span className="text-white font-medium">原因を特定せずに対処しているから</span>です。<br />
              精密3軸診断で、あなたの体の使い方の癖を分析し、根本から改善します。
            </p>

            {/* データバッジ */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="bg-slate-800/50 border border-slate-700 rounded p-3 text-center">
                <p className="text-xl font-bold text-blue-400 font-mono">87%</p>
                <p className="text-xs text-gray-500">改善実感率</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded p-3 text-center">
                <p className="text-xl font-bold text-white font-mono">60<span className="text-sm">min</span></p>
                <p className="text-xs text-gray-500">週1回から</p>
              </div>
              <div className="bg-slate-800/50 border border-slate-700 rounded p-3 text-center">
                <p className="text-xl font-bold text-green-400 font-mono">22:00</p>
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
                <span>無料診断を受ける</span>
              </a>
              <a
                href="https://firefitness.hacomono.jp/reserve?trial=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-4 rounded shadow-lg transition-all"
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
              <span className="text-sm font-mono">070-8977-5851</span>
            </a>
          </div>

          {/* 右側：ビジュアル */}
          <div className="hidden md:block relative">
            <div className="relative aspect-square">
              {/* メイン画像 */}
              <div className="absolute inset-4 rounded-lg overflow-hidden border border-slate-700">
                <Image
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                  alt="トレーニング"
                  fill
                  className="object-cover"
                />
              </div>
              {/* 装飾フレーム */}
              <div className="absolute inset-0 border-2 border-blue-500/20 rounded-lg" />
              <div className="absolute -inset-2 border border-slate-700 rounded-lg" />
            </div>
            {/* フローティングカード */}
            <div className="absolute -bottom-4 -left-4 bg-slate-800 border border-slate-700 rounded p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded flex items-center justify-center">
                  <HiLightningBolt className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">肩こり改善</p>
                  <p className="text-blue-400 text-xs font-mono">平均 2-3週間</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
