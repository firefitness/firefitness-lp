import { HiClock, HiUserGroup, HiChartBar, HiShieldCheck, HiLocationMarker } from "react-icons/hi";
import { MdAnalytics } from "react-icons/md";

const reasons = [
  {
    number: "01",
    title: "精密3軸診断",
    description: "他店・ヨガ・ピラティス・整骨院にはない、データに基づく分析で最適なプログラムを設計",
    icon: <MdAnalytics className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "完全マンツーマン",
    description: "周りの目を気にせず集中できる環境。質問も遠慮なくできる",
    icon: <HiUserGroup className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "22時まで営業",
    description: "仕事終わりでも通える。忙しいビジネスマンのライフスタイルに対応",
    icon: <HiClock className="w-6 h-6" />,
  },
  {
    number: "04",
    title: "経験豊富なトレーナー",
    description: "40代特有の体の変化を理解したトレーナーが、安全で効果的な指導を提供",
    icon: <HiShieldCheck className="w-6 h-6" />,
  },
  {
    number: "05",
    title: "岡山市内2店舗",
    description: "島田本町店・伊福町店。どちらも駐車場完備で通いやすい",
    icon: <HiLocationMarker className="w-6 h-6" />,
  },
  {
    number: "06",
    title: "継続率92%",
    description: "結果が出るから続けられる。続けられるから結果が出る",
    icon: <HiChartBar className="w-6 h-6" />,
  },
];

export default function Over40MenReasons() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-male-accent text-sm font-medium mb-2">WHY FIREFITNESS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            FIREFITNESSが選ばれる理由
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-male-accent/30 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center text-male-accent group-hover:bg-male-accent group-hover:text-white transition-colors">
                  {reason.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-male-accent text-xs font-mono">{reason.number}</span>
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
