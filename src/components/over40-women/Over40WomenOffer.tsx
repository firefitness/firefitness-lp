"use client";

import { RiLineLine } from "react-icons/ri";
import { HiCheck, HiArrowRight, HiGift } from "react-icons/hi";
import CountdownTimer from "@/components/CountdownTimer";

export default function Over40WomenOffer() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-female-soft">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-pink-200">
          {/* ヘッダー */}
          <div className="bg-gradient-to-r from-female-pink to-female-rose px-6 py-4 text-center">
            <div className="flex items-center justify-center gap-2 text-white">
              <HiGift className="w-5 h-5" />
              <p className="font-bold text-lg">今月限定 特別オファー</p>
            </div>
          </div>

          <div className="p-8">
            {/* カウントダウン */}
            <div className="text-center mb-8">
              <p className="text-gray-500 text-sm mb-2">このオファーの終了まで</p>
              <CountdownTimer theme="female" />
            </div>

            {/* オファー内容 */}
            <div className="text-center mb-8">
              <p className="text-gray-500 mb-2">体験トレーニング</p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-gray-400 line-through text-xl">¥5,500</span>
                <HiArrowRight className="text-female-pink" />
                <span className="text-4xl font-bold text-female-pink">¥3,300</span>
                <span className="text-gray-500">（税込）</span>
              </div>
              <span className="inline-block bg-female-pink/10 text-female-pink text-sm font-medium px-4 py-1 rounded-full">
                40%OFF
              </span>
            </div>

            {/* 特典 */}
            <div className="bg-female-soft rounded-2xl p-6 mb-8 border border-pink-100">
              <p className="text-gray-800 font-bold mb-4 text-center">体験に含まれるもの</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <HiCheck className="w-5 h-5 text-female-pink" />
                  <span className="text-gray-600 text-sm">精密3軸診断</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheck className="w-5 h-5 text-female-pink" />
                  <span className="text-gray-600 text-sm">パーソナルトレーニング60分</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheck className="w-5 h-5 text-female-pink" />
                  <span className="text-gray-600 text-sm">あなた専用プラン提案</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheck className="w-5 h-5 text-female-pink" />
                  <span className="text-gray-600 text-sm">食事アドバイス</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://lin.ee/xxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-line text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                <RiLineLine className="w-6 h-6" />
                <span>LINEで申し込む</span>
              </a>
              <a
                href="https://firefitness.hacomono.jp/reserve?trial=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-female-pink hover:bg-pink-500 text-white font-bold px-8 py-4 rounded-full shadow-lg transition-all"
              >
                <span>WEBで予約する</span>
              </a>
            </div>

            <p className="text-center text-gray-400 text-xs mt-6">
              ※先着5名様限定。定員になり次第終了となります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
