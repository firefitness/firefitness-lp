import { GiBodyBalance, GiMeal, GiCycle } from "react-icons/gi";
import { HiCheck } from "react-icons/hi";

const axes = [
  {
    number: "01",
    title: "姿勢軸",
    subtitle: "POSTURE_ANALYSIS",
    description:
      "7つのパターンから体の使い方の癖を特定。「なぜ肩がこるのか」「なぜ腰が痛いのか」をデータで明確化。",
    icon: <GiBodyBalance className="w-8 h-8 text-blue-400" />,
    outputs: ["原因の特定", "改善ポイント", "最適なエクササイズ"],
  },
  {
    number: "02",
    title: "食事軸",
    subtitle: "NUTRITION_PLAN",
    description:
      "8つのパターンから最適な食事法を特定。コンビニ飯が多くても、外食が多くても対応可能。",
    icon: <GiMeal className="w-8 h-8 text-blue-400" />,
    outputs: ["炎症を抑える食事", "疲労回復", "現実的な選択肢"],
  },
  {
    number: "03",
    title: "継続軸",
    subtitle: "SUSTAINABILITY",
    description:
      "あなたの性格タイプに合った続け方を設計。週1回60分、仕事の合間でも続けられる仕組み。",
    icon: <GiCycle className="w-8 h-8 text-blue-400" />,
    outputs: ["習慣化設計", "週1から可能", "22時まで営業"],
  },
];

export default function DeskworkMenSolution() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium font-mono mb-2">{"// SOLUTION"}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            精密3軸診断
          </h2>
          <p className="text-gray-400">
            他店・ヨガ・ピラティス・整骨院とは違う、原因特定型アプローチ
          </p>
        </div>

        <div className="space-y-4">
          {axes.map((axis, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700 rounded p-6 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-slate-800 border border-slate-700 rounded flex items-center justify-center">
                    {axis.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-400 text-sm font-mono">{axis.number}</span>
                    <h3 className="text-xl font-bold text-white">{axis.title}</h3>
                    <span className="text-gray-600 text-xs font-mono hidden md:inline">{axis.subtitle}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{axis.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {axis.outputs.map((output, i) => (
                      <div key={i} className="flex items-center gap-2 bg-slate-800 px-3 py-1 rounded">
                        <HiCheck className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-300 font-mono">{output}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded p-8">
          <p className="text-xl md:text-2xl font-bold text-white font-mono">
            <span className="text-blue-400">原因</span> -&gt; <span className="text-green-400">解決策</span> -&gt; <span className="text-yellow-400">結果</span>
          </p>
        </div>
      </div>
    </section>
  );
}
