import { HiPhone, HiClipboardCheck, HiLightningBolt, HiTrendingUp } from "react-icons/hi";

const steps = [
  {
    step: "01",
    title: "お問い合わせ",
    description: "LINE・電話・WEBから、まずはお気軽にご連絡ください",
    icon: <HiPhone className="w-6 h-6" />,
  },
  {
    step: "02",
    title: "無料カウンセリング",
    description: "現状の悩み・目標をヒアリング。精密3軸診断を実施",
    icon: <HiClipboardCheck className="w-6 h-6" />,
  },
  {
    step: "03",
    title: "体験トレーニング",
    description: "診断結果に基づいたプログラムを体験（5,500円）",
    icon: <HiLightningBolt className="w-6 h-6" />,
  },
  {
    step: "04",
    title: "トレーニング開始",
    description: "あなた専用のプログラムでトレーニングスタート",
    icon: <HiTrendingUp className="w-6 h-6" />,
  },
];

export default function Over40MenFlow() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-male-accent text-sm font-medium mb-2">FLOW</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ご利用の流れ
          </h2>
        </div>

        <div className="relative">
          {/* 縦線 */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-700 hidden md:block" />

          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative flex gap-6">
                {/* ステップ番号 */}
                <div className="relative z-10 w-12 h-12 bg-slate-800 border border-slate-700 rounded-full flex items-center justify-center text-male-accent flex-shrink-0">
                  {step.icon}
                </div>

                {/* コンテンツ */}
                <div className="flex-grow bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-male-accent/30 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-male-accent text-xs font-mono">STEP {step.step}</span>
                    <h3 className="text-white font-bold">{step.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
