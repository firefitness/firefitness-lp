import { HiX, HiArrowRight } from "react-icons/hi";

const wrongApproaches = [
  {
    wrong: "急に激しい運動を始める",
    result: "関節を痛めて挫折",
  },
  {
    wrong: "厳しい食事制限",
    result: "筋肉が落ちて代謝が下がる",
  },
  {
    wrong: "とりあえずジムに入会",
    result: "何をすればいいかわからず幽霊会員",
  },
  {
    wrong: "若い頃と同じメニュー",
    result: "回復が追いつかず疲労が蓄積",
  },
];

export default function Over40MenCause() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-red-400 text-sm font-medium mb-2">CAUSE</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            40代の体づくりが失敗する原因
          </h2>
          <p className="text-gray-400">
            20代・30代と同じアプローチでは、結果が出ないどころか逆効果になります
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {wrongApproaches.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700 rounded-lg p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-6 h-6 bg-red-500/20 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <HiX className="w-4 h-4 text-red-400" />
                </div>
                <p className="text-white font-medium">{item.wrong}</p>
              </div>
              <div className="flex items-center gap-2 ml-9">
                <HiArrowRight className="w-4 h-4 text-gray-500" />
                <p className="text-gray-500 text-sm">{item.result}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-male-accent/10 to-transparent border border-male-accent/30 rounded-lg p-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            40代には、40代のための戦略が必要です
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-male-accent mb-1">-30%</p>
              <p className="text-sm text-gray-400">20代比 基礎代謝</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-male-accent mb-1">-20%</p>
              <p className="text-sm text-gray-400">20代比 筋肉量</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-male-accent mb-1">2倍</p>
              <p className="text-sm text-gray-400">必要な回復時間</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
