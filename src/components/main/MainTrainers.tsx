import Image from "next/image";
import Link from "next/link";

const trainers = [
  {
    name: "岡田 雄磨",
    position: "チーフトレーナー",
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/名称未設定のデザイン.png",
    description: "保健体育科教員免許、元消防士の資格を持ち、運動生理学・栄養学・医療知識など、幅広いサポートを得意としています。\nMr.JAPAN2019 グランプリ\n※別途指名料がかかります。",
    specialties: ["ウェイトトレーニング", "ダイエット", "栄養指導"],
    instagram: "https://www.instagram.com/_yuma_okada_/",
  },
  {
    name: "山本 舞香",
    position: "トレーナー",
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/名称未設定のデザイン-4.png",
    description: "女性特有の悩みに寄り添ったトレーニングを提供。ヒップアップ、二の腕引き締め、産後ケアやホルモンバランスを考慮した運動プログラム設計が得意です。\nBESTBODYJAPAN2024岡山大会グランプリ",
    specialties: ["女性向けトレーニング", "産後ケア", "ヒップアップ"],
    instagram: "https://www.instagram.com/_maika_fit/",
  },
  {
    name: "板倉 龍聖",
    position: "トレーナー",
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/名称未設定のデザイン-3.png",
    description: "NASM-PES\n全米医学スポーツアカデミー認定資格取得\nJBBF中国メンズフィジーク出場の経験を活かし、初心者から上級者まで対応可能です。",
    specialties: ["整体", "筋力トレーニング", "コンディショニング"],
    instagram: "https://www.instagram.com/ryusei_des/",
  },
];

export default function MainTrainers() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">
          専属トレーナー紹介
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          FIREFITNESSの専属トレーナーは、<br />
          豊富な経験と専門知識を持つプロです。<br />
          一人ひとりの目標達成をサポートします。
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* 画像 */}
              <div className="relative h-80">
                <Image
                  src={trainer.image}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* 情報 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary">
                  {trainer.name}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {trainer.position}
                </p>
                <p className="text-gray-600 text-sm mb-4 whitespace-pre-line">
                  {trainer.description}
                </p>

                {/* 専門分野バッジ */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {trainer.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="bg-secondary/10 text-secondary text-xs px-3 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                {/* SNSリンク */}
                <a
                  href={trainer.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-500 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* トレーナー理念 */}
        <div className="mt-16 bg-gray-50 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-secondary mb-4">
            トレーナー共通の理念
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            私たちFIREFITNESSのトレーナーは、お客様<strong>一人ひとりの目標と現状</strong>を丁寧にヒアリングし、最適なトレーニングプランを提案します。運動が初めてでも<span className="text-primary font-semibold">安心して取り組める</span>丁寧な指導とサポートを心がけています。
          </p>
          <p className="text-gray-600 leading-relaxed">
            また、<strong>短期的な効果</strong>だけでなく、<span className="text-primary font-semibold">長期的に健康を維持できる身体づくり</span>を大切にしています。トレーニングだけでなく、生活習慣や食事面からも総合的にアドバイスし、お客様の<strong>「なりたい自分」</strong>の実現をサポートします。
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-secondary mb-6">
            まずは体験セッションで実際のトレーニングを体験してみませんか？
          </h3>
          <Link
            href="https://firefitness.hacomono.jp/reserve?trial=true&from=home"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            体験セッションを予約する
          </Link>
        </div>
      </div>
    </section>
  );
}
