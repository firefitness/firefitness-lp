import { HiCheck, HiHeart } from "react-icons/hi";

const plans = [
  {
    name: "月4回プラン",
    price: "35,200",
    perSession: "8,800",
    features: ["週1回ペース", "まずは始めたい方に", "無理なく続けられる"],
    recommended: false,
  },
  {
    name: "月8回プラン",
    price: "61,600",
    perSession: "7,700",
    features: ["週2回ペース", "しっかり変わりたい方に", "最も人気"],
    recommended: true,
  },
];

export default function Over40WomenPrice() {
  return (
    <section className="py-20 bg-female-soft">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-female-pink text-sm font-medium mb-2">料金プラン</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            シンプルな料金体系
          </h2>
          <p className="text-gray-600">
            入会金：11,000円（税込）
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 ${
                plan.recommended
                  ? "bg-gradient-to-b from-female-pink/10 to-white border-2 border-female-pink shadow-lg"
                  : "bg-white border border-pink-100 shadow-sm"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-female-pink text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <HiHeart className="w-3 h-3" />
                    人気No.1
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-gray-500 text-sm">月額</span>
                  <span className="text-3xl md:text-4xl font-bold text-gray-800 ml-2">
                    ¥{plan.price}
                  </span>
                  <span className="text-gray-500 text-sm">（税込）</span>
                </div>
                <p className="text-female-pink text-sm">
                  1回あたり ¥{plan.perSession}
                </p>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <HiCheck className={`w-5 h-5 flex-shrink-0 ${plan.recommended ? "text-female-pink" : "text-gray-400"}`} />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 追加説明 */}
        <div className="bg-white rounded-2xl p-6 border border-pink-100 shadow-sm">
          <h4 className="text-gray-800 font-bold mb-4 text-center">料金に含まれるもの</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <HiCheck className="w-4 h-4 text-female-pink" />
              <span>精密3軸診断</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCheck className="w-4 h-4 text-female-pink" />
              <span>パーソナルトレーニング（60分/回）</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCheck className="w-4 h-4 text-female-pink" />
              <span>食事アドバイス</span>
            </div>
            <div className="flex items-center gap-2">
              <HiCheck className="w-4 h-4 text-female-pink" />
              <span>LINEサポート</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
