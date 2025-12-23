import { MdAnalytics, MdRestaurant, MdAccessTime, MdMeetingRoom, MdLocalParking } from "react-icons/md";

const reasons = [
  {
    number: "01",
    title: "最初に原因を特定するから、遠回りしない",
    description:
      "3軸診断であなたの体の癖、食事のパターン、続けやすいタイプを分析。やみくもに頑張る前に、何をすべきか明確にします。",
    icon: <MdAnalytics className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "食事制限なし、「置き換え」だから続く",
    description:
      "「食べちゃダメ」ではなく「これに変えよう」。ビジネスマンの付き合いも考慮した、現実的な食事アドバイス。",
    icon: <MdRestaurant className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "週1回60分から、忙しくても通える",
    description:
      "完全予約制だから待ち時間なし。仕事帰りでも、早朝でも、あなたの都合に合わせて予約可能。",
    icon: <MdAccessTime className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "完全個室マンツーマン、人目を気にしない",
    description:
      "他のお客様と顔を合わせることはありません。体型を気にせず、集中してトレーニングできます。",
    icon: <MdMeetingRoom className="w-8 h-8" />,
  },
  {
    number: "05",
    title: "岡山市北区2店舗、駐車場完備",
    description:
      "島田本町店・伊福町店の2店舗。どちらも駐車場完備で、車での来店も便利です。",
    icon: <MdLocalParking className="w-8 h-8" />,
  },
];

export default function MetaboReasons() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
          FIREFITNESSが選ばれる5つの理由
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
