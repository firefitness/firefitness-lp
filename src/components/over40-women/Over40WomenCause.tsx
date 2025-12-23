import { HiX, HiArrowRight, HiLightBulb } from "react-icons/hi";

const wrongApproaches = [
  {
    wrong: "極端な食事制限",
    result: "筋肉が落ちて代謝がさらに低下",
  },
  {
    wrong: "激しい運動を急に始める",
    result: "体を痛めてしまい続かない",
  },
  {
    wrong: "サプリメントに頼る",
    result: "根本的な改善にならない",
  },
  {
    wrong: "若い頃と同じダイエット",
    result: "ホルモンバランスの変化に対応できない",
  },
];

export default function Over40WomenCause() {
  return (
    <section className="py-20 bg-female-soft">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-female-pink text-sm font-medium mb-2">知っておきたいこと</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            40代のダイエットが難しい理由
          </h2>
          <p className="text-gray-600">
            20代・30代と同じ方法では、うまくいかないのには理由があります
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {wrongApproaches.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-pink-100"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HiX className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-gray-800 font-medium">{item.wrong}</p>
              </div>
              <div className="flex items-center gap-2 ml-9">
                <HiArrowRight className="w-4 h-4 text-gray-400" />
                <p className="text-gray-500 text-sm">{item.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-female-pink/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-female-pink/10 rounded-full flex items-center justify-center flex-shrink-0">
              <HiLightBulb className="w-6 h-6 text-female-pink" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                40代の体には、40代に合った方法が必要です
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ホルモンバランスの変化、代謝の低下、筋肉量の減少...<br />
                これらを理解した上で、あなたに合ったプログラムを組み立てることが大切です。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
