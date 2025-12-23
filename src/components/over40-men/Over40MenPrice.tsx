import { HiCheck } from "react-icons/hi";

const plans = [
  {
    name: "月4回プラン",
    price: "35,200",
    perSession: "8,800",
    features: ["週1回ペース", "忙しい方向け", "まずは始めたい方に"],
    recommended: false,
  },
  {
    name: "月8回プラン",
    price: "61,600",
    perSession: "7,700",
    features: ["週2回ペース", "しっかり結果を出したい方", "最も効果的"],
    recommended: true,
  },
];

export default function Over40MenPrice() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-male-accent text-sm font-medium mb-2">PRICE</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            料金プラン
          </h2>
          <p className="text-gray-400">
            入会金：11,000円（税込）
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-lg p-6 ${
                plan.recommended
                  ? "bg-gradient-to-b from-male-accent/20 to-slate-900 border-2 border-male-accent"
                  : "bg-slate-900 border border-slate-700"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-male-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-gray-400 text-sm">月額</span>
                  <span className="text-3xl md:text-4xl font-bold text-white ml-2">
                    ¥{plan.price}
                  </span>
                  <span className="text-gray-400 text-sm">（税込）</span>
                </div>
                <p className="text-male-accent text-sm">
                  1回あたり ¥{plan.perSession}
                </p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <HiCheck className={`w-5 h-5 flex-shrink-0 ${plan.recommended ? "text-male-accent" : "text-gray-500"}`} />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 追加説明 */}
        <div className="bg-slate-900 border border-slate-700 rounded-lg p-6">
          <h4 className="text-white font-bold mb-4">料金に含まれるもの</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <HiCheck className="w-4 h-4 text-green-500" />
              <span>精密3軸診断</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCheck className="w-4 h-4 text-green-500" />
              <span>パーソナルトレーニング（60分/回）</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCheck className="w-4 h-4 text-green-500" />
              <span>食事アドバイス</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCheck className="w-4 h-4 text-green-500" />
              <span>LINEサポート</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
