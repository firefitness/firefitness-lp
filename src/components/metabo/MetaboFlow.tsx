import { HiPhone, HiChat, HiChartBar, HiLightningBolt, HiClipboardCheck } from "react-icons/hi";

const steps = [
  {
    number: 1,
    title: "LINE登録 or 電話予約",
    description: "LINEで友だち追加、または電話で体験予約。24時間受付中。",
    icon: <HiPhone className="w-6 h-6" />,
  },
  {
    number: 2,
    title: "カウンセリング（30分）",
    description:
      "現在の体の状態、生活習慣、目標をヒアリング。無理な勧誘は一切ありません。",
    icon: <HiChat className="w-6 h-6" />,
  },
  {
    number: 3,
    title: "精密3軸診断",
    description: "姿勢・食事・継続の3軸であなたの体を分析。原因を明確にします。",
    icon: <HiChartBar className="w-6 h-6" />,
  },
  {
    number: 4,
    title: "体験トレーニング",
    description:
      "あなたに合ったプログラムを実際に体験。キツすぎないので安心してください。",
    icon: <HiLightningBolt className="w-6 h-6" />,
  },
  {
    number: 5,
    title: "プログラム提案",
    description:
      "診断結果に基づき、最適なプランをご提案。じっくり検討してからお決めください。",
    icon: <HiClipboardCheck className="w-6 h-6" />,
  },
];

export default function MetaboFlow() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
          ご利用の流れ
        </h2>

        <div className="relative">
          {/* タイムライン */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex items-start gap-6 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* 番号 */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                  {step.number}
                </div>

                {/* コンテンツ */}
                <div
                  className={`ml-24 md:ml-0 md:w-[calc(50%-3rem)] bg-white rounded-xl p-6 shadow-sm ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-primary">{step.icon}</div>
                    <h3 className="font-bold text-secondary">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
