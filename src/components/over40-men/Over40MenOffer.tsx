"use client";

import { RiLineLine } from "react-icons/ri";
import { HiCheck, HiArrowRight } from "react-icons/hi";
import CountdownTimer from "@/components/CountdownTimer";

export default function Over40MenOffer() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-male-dark">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl overflow-hidden">
          {/* ヘッダー */}
          <div className="bg-male-accent px-6 py-4 text-center">
            <p className="text-white font-bold text-lg">今月限定 特別オファー</p>
          </div>

          <div className="p-8">
            {/* カウントダウン */}
            <div className="text-center mb-8">
              <p className="text-gray-400 text-sm mb-2">このオファーの終了まで</p>
              <CountdownTimer theme="dark" />
            </div>

            {/* オファー内容 */}
            <div className="text-center mb-8">
              <p className="text-gray-400 mb-2">体験トレーニング</p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-gray-500 line-through text-xl">¥5,500</span>
                <HiArrowRight className="text-male-accent" />
                <span className="text-4xl font-bold text-white">¥3,300</span>
                <span className="text-gray-400">（税込）</span>
              </div>
              <p className="text-male-accent text-sm font-medium">40%OFF</p>
            </div>

            {/* 特典 */}
            <div className="bg-slate-800/50 rounded-lg p-6 mb-8">
              <p className="text-white font-bold mb-4 text-center">体験に含まれるもの</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <HiCheck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300 text-sm">精密3軸診断</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300 text-sm">パーソナルトレーニング60分</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300 text-sm">改善プラン提案</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCheck className="w-5 h-5 text-green-500" />
                  <span className="text-gray-300 text-sm">食事アドバイス</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://lin.ee/xxxxx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-line text-white font-bold px-8 py-4 rounded shadow-lg hover:shadow-green-500/25 transition-all"
              >
                <RiLineLine className="w-6 h-6" />
                <span>LINEで申し込む</span>
              </a>
              <a
                href="https://firefitness.hacomono.jp/reserve?trial=true"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-male-accent hover:bg-blue-600 text-white font-bold px-8 py-4 rounded shadow-lg transition-all"
              >
                <span>WEBで予約する</span>
              </a>
            </div>

            <p className="text-center text-gray-500 text-xs mt-6">
              ※先着5名様限定。定員になり次第終了となります。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
