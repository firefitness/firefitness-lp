"use client";

import { HiArrowRight, HiCode } from "react-icons/hi";

const results = [
  {
    job: "エンジニア",
    age: "32歳",
    period: "2ヶ月",
    issue: "慢性的な肩こり・頭痛",
    changes: [
      { label: "肩こり", before: "毎日", after: "週1程度" },
      { label: "頭痛", before: "週3回", after: "ほぼなし" },
      { label: "集中力", before: "午後は低下", after: "夕方まで持続" },
    ],
    comment: "マッサージに月3万円使っていたが、今は月1回で十分。根本的に違う。",
  },
  {
    job: "Webディレクター",
    age: "38歳",
    period: "3ヶ月",
    issue: "腰痛・猫背",
    changes: [
      { label: "腰痛", before: "座位30分で発生", after: "2時間以上OK" },
      { label: "姿勢", before: "猫背", after: "改善" },
      { label: "疲労感", before: "帰宅後ぐったり", after: "趣味の時間確保" },
    ],
    comment: "整骨院に週2で通っていたが、今は月1のメンテナンスで維持できている。",
  },
  {
    job: "営業",
    age: "35歳",
    period: "2.5ヶ月",
    issue: "首こり・眼精疲労",
    changes: [
      { label: "首こり", before: "常時", after: "忙しい時のみ" },
      { label: "目の疲れ", before: "深刻", after: "軽減" },
      { label: "睡眠", before: "浅い", after: "深くなった" },
    ],
    comment: "デスクワークの割合が増えてから悩んでいたが、原因がわかって解決した。",
  },
];

export default function DeskworkMenResults() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium font-mono mb-2">{"// RESULTS"}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            改善事例
          </h2>
          <p className="text-gray-500 text-sm">
            ※個人の結果であり、効果を保証するものではありません
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 rounded overflow-hidden hover:border-blue-500/50 transition-colors"
            >
              {/* ヘッダー */}
              <div className="bg-slate-700 p-4 border-b border-slate-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <HiCode className="w-4 h-4 text-blue-400" />
                    <span className="text-white font-medium">{result.job}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{result.age}</span>
                </div>
                <p className="text-gray-400 text-sm mt-1">{result.issue}</p>
              </div>

              {/* 数値変化 */}
              <div className="p-4 space-y-3 border-b border-slate-700">
                {result.changes.map((change, i) => (
                  <div key={i} className="text-sm">
                    <p className="text-gray-500 mb-1">{change.label}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-red-400 line-through">{change.before}</span>
                      <HiArrowRight className="w-3 h-3 text-gray-600" />
                      <span className="text-green-400">{change.after}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* コメント */}
              <div className="p-4">
                <p className="text-gray-400 text-sm">&ldquo;{result.comment}&rdquo;</p>
                <p className="text-blue-400 text-xs mt-2 font-mono">{result.period}で改善</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
