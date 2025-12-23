import { HiPhone, HiClipboardCheck, HiSparkles, HiHeart } from "react-icons/hi";

const steps = [
  {
    step: "01",
    title: "お問い合わせ",
    description: "LINE・電話・WEBから、お気軽にご連絡ください。ご不安な点もお気軽にどうぞ。",
    icon: <HiPhone className="w-6 h-6" />,
  },
  {
    step: "02",
    title: "無料カウンセリング",
    description: "現在のお悩みや目標をゆっくりお聞かせください。精密3軸診断を実施します。",
    icon: <HiClipboardCheck className="w-6 h-6" />,
  },
  {
    step: "03",
    title: "体験トレーニング",
    description: "あなたに合ったプログラムを実際に体験（5,500円）。無理のない内容です。",
    icon: <HiSparkles className="w-6 h-6" />,
  },
  {
    step: "04",
    title: "トレーニング開始",
    description: "あなた専用のプログラムで、美しく健やかな体づくりをスタート。",
    icon: <HiHeart className="w-6 h-6" />,
  },
];

export default function Over40WomenFlow() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-female-pink text-sm font-medium mb-2">ご利用の流れ</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            簡単4ステップで始められます
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">
              {/* ステップアイコン */}
              <div className="relative">
                <div className="w-14 h-14 bg-female-pink/10 rounded-full flex items-center justify-center text-female-pink border border-female-pink/30">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-px h-12 bg-female-pink/20" />
                )}
              </div>

              {/* コンテンツ */}
              <div className="flex-grow bg-female-soft rounded-2xl p-6 border border-pink-100">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-female-pink text-xs font-medium">STEP {step.step}</span>
                  <h3 className="text-gray-800 font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
