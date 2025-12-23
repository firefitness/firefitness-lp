"use client";

import { RiLineLine } from "react-icons/ri";
import { HiPhone, HiHeart } from "react-icons/hi";

export default function Over40WomenCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-female-pink to-female-rose">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <HiHeart className="w-12 h-12 text-white/80 mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          40代からの、新しい私へ
        </h2>
        <p className="text-pink-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          「もう遅いかも」なんて、思わないでください。<br />
          今日が、これからの人生で一番若い日です。<br />
          まずは無料カウンセリングで、あなたの理想をお聞かせください。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://lin.ee/xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-line text-white font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <RiLineLine className="w-6 h-6" />
            <span>LINEで相談する</span>
          </a>
          <a
            href="https://firefitness.hacomono.jp/reserve?trial=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-female-pink font-bold px-8 py-4 rounded-full shadow-lg hover:bg-gray-50 transition-all"
          >
            <span>体験予約する</span>
          </a>
        </div>

        <a
          href="tel:070-8977-5851"
          className="inline-flex items-center gap-2 text-pink-100 hover:text-white transition-colors"
        >
          <HiPhone className="w-5 h-5" />
          <span>070-8977-5851（7:00〜22:00）</span>
        </a>
      </div>
    </section>
  );
}
