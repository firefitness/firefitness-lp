import { HiStar, HiCheck } from "react-icons/hi";
import { MdCoffee } from "react-icons/md";

const plans = [
  {
    name: "体験セッション",
    price: "5,500",
    originalPrice: null,
    duration: "60分",
    description: "3軸診断 + カウンセリング + 体験トレーニング",
    isPopular: false,
    features: ["精密3軸診断", "カウンセリング", "体験トレーニング"],
  },
  {
    name: "スタンダード",
    price: "44,000",
    originalPrice: null,
    sessions: "月4回（週1回）",
    perSession: "1回あたり11,000円",
    description: "40代に最適化されたオーダーメイドプログラム",
    isPopular: true,
    features: ["オーダーメイドプログラム", "食事アドバイス", "LINEサポート"],
  },
  {
    name: "プレミアム",
    price: "66,000",
    originalPrice: null,
    sessions: "月8回（週2回）",
    perSession: "1回あたり8,250円",
    description: "より早く結果を出したい方へ",
    isPopular: false,
    features: ["オーダーメイドプログラム", "食事アドバイス", "LINEサポート", "優先予約"],
  },
];

export default function Over40Price() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-2">
            料金プラン
          </h2>
          <p className="text-gray-600">まずは体験から始められます</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${
                plan.isPopular
                  ? "bg-navy text-white ring-4 ring-primary shadow-xl scale-105"
                  : "bg-white text-secondary shadow-sm"
              }`}
            >
              {plan.isPopular && (
                <div className="bg-primary text-white text-center py-2 text-sm font-bold flex items-center justify-center gap-1">
                  <HiStar className="w-4 h-4" />
                  40代に人気
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.isPopular ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mb-4">
                  <span className="text-4xl font-bold">
                    ¥{plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.isPopular ? "text-gray-300" : "text-gray-500"
                    }`}
                  >
                    {plan.sessions ? "/月" : ""}（税込）
                  </span>
                </div>

                {plan.sessions && (
                  <p
                    className={`text-sm mb-4 ${
                      plan.isPopular ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {plan.sessions}
                    <br />
                    {plan.perSession}
                  </p>
                )}

                {plan.duration && (
                  <p
                    className={`text-sm mb-4 ${
                      plan.isPopular ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {plan.duration}
                  </p>
                )}

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <HiCheck
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.isPopular ? "text-primary" : "text-primary"
                        }`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://firefitness.hacomono.jp/reserve?trial=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 rounded-full font-bold transition-colors ${
                    plan.isPopular
                      ? "bg-primary text-white hover:bg-primary-dark"
                      : "bg-navy text-white hover:bg-navy/90"
                  }`}
                >
                  {plan.isPopular ? "まずは体験から" : "体験を予約する"}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mb-8">
          ※ 表示価格は全て税込です。入会金別途。
        </p>

        {/* アンカリング */}
        <div className="bg-white rounded-xl p-6 text-center shadow-sm">
          <div className="flex items-center justify-center gap-2 text-primary mb-2">
            <MdCoffee className="w-6 h-6" />
          </div>
          <p className="text-lg font-bold text-secondary">
            40代の今、健康に投資する価値。
          </p>
          <p className="text-gray-500 text-sm mt-1">
            1日約1,500円で、10年後の体が変わります
          </p>
        </div>
      </div>
    </section>
  );
}
