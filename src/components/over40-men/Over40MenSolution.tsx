import { GiBodyBalance, GiMeal, GiCycle } from "react-icons/gi";
import { HiCheck } from "react-icons/hi";

const axes = [
  {
    number: "01",
    title: "姿勢軸",
    subtitle: "POSTURE ANALYSIS",
    description:
      "7つのパターンから体の使い方の癖を特定。40代特有の姿勢の歪みを把握し、効率的なトレーニングを設計。",
    icon: <GiBodyBalance className="w-8 h-8 text-male-accent" />,
    points: ["関節への負担を最小化", "効果的な筋肉へのアプローチ", "怪我のリスクを回避"],
  },
  {
    number: "02",
    title: "食事軸",
    subtitle: "NUTRITION PLANNING",
    description:
      "8つのパターンから最適な食事法を特定。ビジネスの会食や飲み会があっても続けられる現実的なプラン。",
    icon: <GiMeal className="w-8 h-8 text-male-accent" />,
    points: ["厳しい制限なし", "会食・接待OK", "一生続けられる習慣"],
  },
  {
    number: "03",
    title: "継続軸",
    subtitle: "SUSTAINABILITY",
    description:
      "あなたの性格タイプに合った続け方を設計。忙しいビジネスマンでも週1回60分から始められます。",
    icon: <GiCycle className="w-8 h-8 text-male-accent" />,
    points: ["週1回60分から", "仕事との両立", "22時まで営業"],
  },
];

export default function Over40MenSolution() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-male-accent text-sm font-medium mb-2">SOLUTION</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            FIREFITNESSの精密3軸診断
          </h2>
          <p className="text-gray-400">
            他店・ヨガ・ピラティス・整骨院とは違う、データに基づくアプローチ
          </p>
        </div>

        <div className="space-y-6">
          {axes.map((axis, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 md:p-8 hover:border-male-accent/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-slate-700 rounded-lg flex items-center justify-center">
                    {axis.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-male-accent text-sm font-mono">{axis.number}</span>
                    <h3 className="text-xl font-bold text-white">{axis.title}</h3>
                    <span className="text-gray-500 text-xs hidden md:inline">{axis.subtitle}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{axis.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {axis.points.map((point, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <HiCheck className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-300">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-male-accent/20 to-blue-600/20 border border-male-accent/30 rounded-lg p-8">
          <p className="text-xl md:text-2xl font-bold text-white">
            原因がわかれば、<span className="text-male-accent">最短ルート</span>で結果が出る
          </p>
        </div>
      </div>
    </section>
  );
}
