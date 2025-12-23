import { MdAnalytics, MdRestaurant, MdAccessTime, MdMeetingRoom, MdHealthAndSafety } from "react-icons/md";

const reasons = [
  {
    number: "01",
    title: "40代の体を知り尽くしたプログラム",
    description:
      "20代向けのハードなトレーニングではなく、40代の体に最適化されたメニューで効率よく結果を出します。",
    icon: <MdHealthAndSafety className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "精密3軸診断で原因を特定",
    description:
      "姿勢・食事・継続の3軸であなたの体を分析。なぜ痩せないのか、なぜ疲れるのか、原因を明確にします。",
    icon: <MdAnalytics className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "代謝を上げる食事指導",
    description:
      "食事制限ではなく、代謝を上げる「置き換え」。40代でも無理なく続けられる食事法をお伝えします。",
    icon: <MdRestaurant className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "週1回60分、忙しくても継続できる",
    description:
      "仕事や家庭で忙しい40代。完全予約制で効率よく、最小限の時間で最大の効果を。",
    icon: <MdAccessTime className="w-8 h-8" />,
  },
  {
    number: "05",
    title: "完全個室で人目を気にしない",
    description:
      "「若い人ばかりのジムは気が引ける」そんな心配は不要。完全個室で集中してトレーニングできます。",
    icon: <MdMeetingRoom className="w-8 h-8" />,
  },
];

export default function Over40Reasons() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
          40代がFIREFITNESSを選ぶ5つの理由
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="text-4xl font-bold text-primary opacity-50">
                    {reason.number}
                  </span>
                </div>
                <div>
                  <div className="text-primary mb-3">{reason.icon}</div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
