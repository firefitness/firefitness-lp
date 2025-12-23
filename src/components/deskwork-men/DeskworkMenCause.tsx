import { HiX, HiArrowRight, HiCode } from "react-icons/hi";

const wrongApproaches = [
  {
    wrong: "マッサージで一時的にほぐす",
    result: "筋肉が固まる原因が解決せず、すぐ戻る",
  },
  {
    wrong: "整骨院で骨格矯正",
    result: "筋肉の使い方が変わらないと維持できない",
  },
  {
    wrong: "高い椅子・デスクを買う",
    result: "体の使い方が変わらないと効果は限定的",
  },
  {
    wrong: "YouTubeのストレッチを試す",
    result: "自分の体の癖に合っていないと効果が出ない",
  },
];

export default function DeskworkMenCause() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-400 text-sm font-medium font-mono mb-2">{"// ROOT CAUSE"}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            なぜ、何をしても改善しないのか
          </h2>
          <p className="text-gray-400">
            対処療法では根本解決にならない
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {wrongApproaches.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 bg-red-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HiX className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-white font-medium">{item.wrong}</p>
              </div>
              <div className="flex items-center gap-2 ml-9">
                <HiArrowRight className="w-4 h-4 text-gray-600" />
                <p className="text-gray-500 text-sm">{item.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/30 rounded p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded flex items-center justify-center flex-shrink-0">
              <HiCode className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">
                デバッグと同じです
              </h3>
              <p className="text-gray-400 leading-relaxed">
                バグの原因を特定せずに修正しても、また同じ問題が発生します。<br />
                体も同じ。<span className="text-blue-400">なぜその症状が出ているのか</span>を特定することが、<br />
                根本改善への第一歩です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
