"use client";

import { HiArrowRight } from "react-icons/hi";

const results = [
  {
    age: "45歳",
    job: "経営者",
    period: "4ヶ月",
    changes: [
      { label: "体重", before: "78kg", after: "71kg", diff: "-7kg" },
      { label: "体脂肪率", before: "28%", after: "22%", diff: "-6%" },
      { label: "ウエスト", before: "92cm", after: "84cm", diff: "-8cm" },
    ],
    comment: "健康診断の数値が全て改善。仕事のパフォーマンスも上がった。",
  },
  {
    age: "48歳",
    job: "会社員",
    period: "3ヶ月",
    changes: [
      { label: "体重", before: "82kg", after: "76kg", diff: "-6kg" },
      { label: "体脂肪率", before: "26%", after: "21%", diff: "-5%" },
      { label: "筋肉量", before: "58kg", after: "60kg", diff: "+2kg" },
    ],
    comment: "週1回でも確実に結果が出る。忙しくても続けられた。",
  },
  {
    age: "42歳",
    job: "管理職",
    period: "5ヶ月",
    changes: [
      { label: "体重", before: "75kg", after: "68kg", diff: "-7kg" },
      { label: "内臓脂肪", before: "Lv12", after: "Lv7", diff: "-5" },
      { label: "基礎代謝", before: "1420", after: "1580", diff: "+160" },
    ],
    comment: "疲れにくくなった。午後の会議でも集中力が続く。",
  },
];

export default function Over40MenResults() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-male-accent text-sm font-medium mb-2">RESULTS</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            40代会員の実績データ
          </h2>
          <p className="text-gray-400">
            ※個人の結果であり、効果を保証するものではありません
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-700 rounded-lg overflow-hidden hover:border-male-accent/50 transition-colors"
            >
              {/* ヘッダー */}
              <div className="bg-slate-800 p-4 border-b border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold">{result.age}</span>
                    <span className="text-gray-500 text-sm ml-2">{result.job}</span>
                  </div>
                  <span className="text-male-accent text-sm font-medium">{result.period}</span>
                </div>
              </div>

              {/* 数値変化 */}
              <div className="p-4 space-y-3">
                {result.changes.map((change, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{change.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400">{change.before}</span>
                      <HiArrowRight className="w-3 h-3 text-gray-600" />
                      <span className="text-white font-medium">{change.after}</span>
                      <span className={`text-xs px-1.5 py-0.5 rounded ${
                        change.diff.startsWith('-') ? 'bg-green-500/20 text-green-400' : 'bg-male-accent/20 text-male-accent'
                      }`}>
                        {change.diff}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* コメント */}
              <div className="px-4 pb-4">
                <p className="text-gray-400 text-sm italic">&ldquo;{result.comment}&rdquo;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
