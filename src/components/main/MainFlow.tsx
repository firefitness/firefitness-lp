import Image from "next/image";
import Link from "next/link";

const steps = [
  {
    number: 1,
    title: "お問い合わせ・予約",
    description: "ウェブサイトのフォームから体験セッションのご予約が可能です。お電話でのご予約も承っております。",
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/LP画像5.png",
  },
  {
    number: 2,
    title: "カウンセリング",
    description: "あなたのライフスタイルや目標、体の状態などをヒアリングし、最適なトレーニングプランをご提案します。",
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/LP画像6.png",
  },
  {
    number: 3,
    title: "体験トレーニング",
    description: "実際にトレーニングを体験していただきます。運動が初めての方でもトレーナーが丁寧にサポートするので安心です。",
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/LP画像7.png",
  },
  {
    number: 4,
    title: "プラン提案・入会",
    description: "体験後、あなたに最適なプランをご提案します。無理な勧誘は一切ありませんのでご安心ください。",
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/03/LP画像11.png",
  },
];

export default function MainFlow() {
  return (
    <section id="flow" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">
          体験予約の流れ
        </h2>
        <p className="text-center text-gray-600 mb-12">
          初めての方でも安心して始められるよう、<br />
          体験から入会までの流れをご紹介します。
        </p>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow"
            >
              {/* 番号バッジ */}
              <div className="absolute -top-5 left-6 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                {step.number}
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center pt-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="w-32 h-32 relative rounded-lg overflow-hidden shadow-md flex-shrink-0">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
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
