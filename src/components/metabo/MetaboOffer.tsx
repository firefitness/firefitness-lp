import { HiGift, HiCheck, HiExclamation } from "react-icons/hi";
import CountdownTimer from "../CountdownTimer";

const benefits = [
  "精密3軸診断（通常8,800円相当）が無料",
  "オリジナルストレッチ動画プレゼント",
  "LINE登録で5,000円OFFクーポン進呈",
];

export default function MetaboOffer() {
  return (
    <section className="py-20 bg-gradient-to-br from-navy via-navy to-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full mb-4">
            <HiGift className="w-5 h-5" />
            <span className="font-bold">今月限定キャンペーン</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            体験セッション特別価格
          </h2>
        </div>

        {/* 価格 */}
        <div className="bg-white/10 backdrop-blur rounded-xl p-8 text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-2xl text-gray-400 line-through">¥5,500</span>
            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
              2,200円OFF
            </span>
          </div>
          <p className="text-5xl md:text-6xl font-bold text-primary mb-2">
            ¥3,300
          </p>
          <p className="text-gray-300">（税込）</p>
        </div>

        {/* カウントダウン */}
        <div className="text-center mb-8">
          <p className="text-gray-300 mb-4">今月末まで</p>
          <CountdownTimer />
        </div>

        {/* 特典 */}
        <div className="bg-white/5 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-center mb-4">さらに今なら</h3>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <HiCheck className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 残り枠 */}
        <div className="flex items-center justify-center gap-2 text-primary mb-8">
          <HiExclamation className="w-5 h-5" />
          <span className="font-bold">毎月の体験枠には限りがあります</span>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://firefitness.hacomono.jp/reserve?trial=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold px-12 py-5 rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-lg"
          >
            今すぐ体験を予約する
          </a>
        </div>
      </div>
    </section>
  );
}
