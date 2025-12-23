import { MdAnalytics, MdAccessTime, MdMeetingRoom, MdLocalParking } from "react-icons/md";
import { GiBodyBalance } from "react-icons/gi";

const reasons = [
  {
    number: "01",
    title: "姿勢改善に特化したプログラム",
    description:
      "デスクワークで崩れた姿勢を根本から改善。猫背・巻き肩・反り腰など、あなたの姿勢タイプに合わせたメニューを作成。",
    icon: <GiBodyBalance className="w-8 h-8" />,
  },
  {
    number: "02",
    title: "精密3軸診断で原因を特定",
    description:
      "なぜ肩こりになるのか、なぜ腰痛が治らないのか。姿勢・食事・継続の3軸から原因を徹底分析します。",
    icon: <MdAnalytics className="w-8 h-8" />,
  },
  {
    number: "03",
    title: "22時まで営業、仕事帰りに通える",
    description:
      "忙しいビジネスパーソンでも通いやすい。完全予約制で待ち時間なし、効率的にトレーニング。",
    icon: <MdAccessTime className="w-8 h-8" />,
  },
  {
    number: "04",
    title: "完全個室マンツーマン",
    description:
      "周りの目を気にせず集中できる環境。運動が苦手な方、体型が気になる方も安心です。",
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

export default function DeskworkReasons() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
          デスクワーカーに選ばれる5つの理由
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
