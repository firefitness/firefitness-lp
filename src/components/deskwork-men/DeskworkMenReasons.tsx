import { HiClock, HiUserGroup, HiChartBar, HiShieldCheck, HiLocationMarker, HiLightningBolt } from "react-icons/hi";

const reasons = [
  {
    number: "01",
    title: "原因特定型アプローチ",
    description: "精密3軸診断で、なぜその症状が出ているのかを特定。対処療法ではなく根本改善",
    icon: <HiChartBar className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "完全マンツーマン",
    description: "集中して自分の体と向き合える環境。質問も遠慮なくできる",
    icon: <HiUserGroup className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "22時まで営業",
    description: "残業後でも通える。仕事のスケジュールに合わせやすい",
    icon: <HiClock className="w-6 h-6" />,
  },
  {
    number: "04",
    title: "再現性のある改善",
    description: "なぜ改善したのかが明確。自分でもケアできるようになる",
    icon: <HiLightningBolt className="w-6 h-6" />,
  },
  {
    number: "05",
    title: "デスクワーカーの体を理解",
    description: "長時間座位による体への影響を熟知したトレーナーが担当",
    icon: <HiShieldCheck className="w-6 h-6" />,
  },
  {
    number: "06",
    title: "岡山市内2店舗",
    description: "島田本町店・伊福町店。駐車場完備で通いやすい",
    icon: <HiLocationMarker className="w-6 h-6" />,
  },
];

export default function DeskworkMenReasons() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium font-mono mb-2">{"// WHY_FIREFITNESS"}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            選ばれる理由
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700 rounded p-6 hover:border-blue-500/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-800 border border-slate-700 rounded flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white group-hover:border-blue-500 transition-colors">
                  {reason.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-blue-400 text-xs font-mono">{reason.number}</span>
                    <h3 className="text-white font-bold">{reason.title}</h3>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
