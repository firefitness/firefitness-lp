import { HiClock, HiUserGroup, HiShieldCheck, HiLocationMarker, HiHeart, HiSparkles } from "react-icons/hi";

const reasons = [
  {
    title: "完全個室・マンツーマン",
    description: "周りの目を気にせず、リラックスしてトレーニングできます",
    icon: <HiUserGroup className="w-6 h-6" />,
  },
  {
    title: "女性の体を理解したプログラム",
    description: "ホルモンバランスや体調に合わせた無理のないメニュー",
    icon: <HiHeart className="w-6 h-6" />,
  },
  {
    title: "22時まで営業",
    description: "お仕事帰りや、お子様が寝た後でも通えます",
    icon: <HiClock className="w-6 h-6" />,
  },
  {
    title: "美と健康の両立",
    description: "ただ痩せるだけでなく、内側から輝く美しさを目指します",
    icon: <HiSparkles className="w-6 h-6" />,
  },
  {
    title: "経験豊富なトレーナー",
    description: "40代女性の体の変化を熟知したトレーナーが担当",
    icon: <HiShieldCheck className="w-6 h-6" />,
  },
  {
    title: "駐車場完備・通いやすい",
    description: "岡山市北区に2店舗。お車でも安心して通えます",
    icon: <HiLocationMarker className="w-6 h-6" />,
  },
];

export default function Over40WomenReasons() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-female-pink text-sm font-medium mb-2">選ばれる理由</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            FIREFITNESSが選ばれる理由
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-female-soft rounded-2xl p-6 border border-pink-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-female-pink mb-4 shadow-sm">
                {reason.icon}
              </div>
              <h3 className="text-gray-800 font-bold mb-2">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
