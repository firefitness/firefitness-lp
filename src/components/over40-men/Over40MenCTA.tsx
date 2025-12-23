"use client";

import { RiLineLine } from "react-icons/ri";
import { HiPhone } from "react-icons/hi";

export default function Over40MenCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-male-accent to-blue-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          40代からの体づくり、始めませんか？
        </h2>
        <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
          今の体を変えられるのは、今の決断だけです。<br />
          まずは無料カウンセリングで、あなたの体の状態を確認してみませんか？
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href="https://lin.ee/xxxxx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-line text-white font-bold px-8 py-4 rounded shadow-lg hover:shadow-green-500/25 transition-all"
          >
            <RiLineLine className="w-6 h-6" />
            <span>LINEで無料相談</span>
          </a>
          <a
            href="https://firefitness.hacomono.jp/reserve?trial=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-male-accent font-bold px-8 py-4 rounded shadow-lg hover:bg-gray-100 transition-all"
          >
            <span>体験予約する</span>
          </a>
        </div>

        <a
          href="tel:070-8977-5851"
          className="inline-flex items-center gap-2 text-blue-100 hover:text-white transition-colors"
        >
          <HiPhone className="w-5 h-5" />
          <span>070-8977-5851（7:00〜22:00）</span>
        </a>
      </div>
    </section>
  );
}
