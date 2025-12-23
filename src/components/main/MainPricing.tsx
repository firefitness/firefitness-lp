import Link from "next/link";

const plans = [
  {
    category: "体験セッション",
    name: "Trial Session",
    subtitle: "トライアル体験",
    price: "¥2,500",
    period: "（初回のみ）",
    features: [
      "1時間のパーソナルトレーニング体験",
      "現在の体の状態評価",
      "目標設定と達成プランの提案",
    ],
    popular: false,
  },
  {
    category: "食事管理プラン",
    name: "週1回プラン",
    subtitle: "食習慣改善サポート",
    price: "¥6,600",
    period: "月額（税込）",
    features: [
      "週1回の食事チェック",
      "専属トレーナーによるフィードバック",
      "LINE相談サポート",
    ],
    popular: true,
  },
  {
    category: "ペアパーソナル",
    name: "Enjoy Plan",
    subtitle: "お二人で始めるトレーニング",
    price: "¥18,000",
    period: "（税込）",
    features: [
      "2回のセッション",
      "お1人様1回あたり ¥4,500",
      "友人やパートナーと一緒に",
    ],
    popular: true,
  },
  {
    category: "パーソナルセッション",
    name: "Hard Plan",
    subtitle: "2~3ヶ月で理想の体型へ",
    price: "¥78,000",
    period: "（税込）",
    features: [
      "12回のセッション",
      "1回あたり ¥6,500",
      "体型変化の定期測定",
    ],
    popular: true,
  },
];

export default function MainPricing() {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          料金プラン
        </h2>
        <p className="text-center text-gray-300 mb-12">
          あなたのライフスタイルに合わせて<br />選べる多彩なプランをご用意しています。
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl p-6 text-center relative overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2"
            >
              {/* 人気タグ */}
              {plan.popular && (
                <div className="absolute top-5 -right-8 bg-primary text-white text-sm font-semibold px-10 py-1 transform rotate-45">
                  一番人気！
                </div>
              )}

              {/* ヘッダー */}
              <div className="mb-4">
                <span className="text-sm text-gray-400">{plan.category}</span>
                <h3 className="text-xl font-bold mt-1">{plan.name}</h3>
                <p className="text-sm text-gray-300">{plan.subtitle}</p>
              </div>

              {/* 価格 */}
              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-300 block">
                  {plan.period}
                </span>
              </div>

              {/* 特徴 */}
              <div className="space-y-2 mb-6 text-left">
                {plan.features.map((feature, i) => (
                  <p key={i} className="text-gray-300 text-sm">
                    {feature}
                  </p>
                ))}
              </div>

              {/* ボタン */}
              <Link
                href="https://firefitness.hacomono.jp/reserve?trial=true&from=home"
                className="inline-block w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-full transition-colors"
              >
                {index === 0 ? "体験セッションを予約する" : "お問い合わせ"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
