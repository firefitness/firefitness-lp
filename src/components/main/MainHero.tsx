"use client";

import Link from "next/link";

export default function MainHero() {
  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          background: `linear-gradient(rgba(13, 43, 69, 0.8), rgba(13, 43, 69, 0.9)), url('https://www.firefitness-okayama.com/wp-content/uploads/2021/11/about-image01.jpg') no-repeat center/cover`,
        }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ transform: "skewX(-15deg)" }}
          >
            始めるなら<span className="text-primary">今</span>。<br />
            未来のあなたが待っている
          </p>
          <p
            className="text-lg md:text-xl text-gray-300 mb-10"
            style={{ transform: "skewX(-15deg)" }}
          >
            FIREFITNESSは <br />
            <span className="text-primary">あなたのライフスタイル</span><br />
            に合わせて柔軟に対応します
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#booking-widget"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              体験セッションを予約する
            </a>
          </div>
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

      {/* ナビボタン */}
      <div className="bg-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="#features"
              className="px-5 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-primary transition-colors shadow-lg"
            >
              特徴
            </a>
            <a
              href="#flow"
              className="px-5 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-primary transition-colors shadow-lg"
            >
              体験の流れ
            </a>
            <a
              href="#pricing"
              className="px-5 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-primary transition-colors shadow-lg"
            >
              料金プラン
            </a>
            <a
              href="#trainers"
              className="px-5 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-primary transition-colors shadow-lg"
            >
              トレーナー
            </a>
            <a
              href="#locations"
              className="px-5 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-primary transition-colors shadow-lg"
            >
              店舗情報
            </a>
            <Link
              href="https://firefitness.hacomono.jp/reserve?trial=true&from=home"
              className="px-5 py-3 bg-secondary text-white rounded-full font-semibold hover:bg-primary transition-colors shadow-lg"
            >
              体験予約
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
