"use client";

import { HiUser, HiArrowRight, HiCheck, HiChartBar } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const overallStats = [
  { label: "平均体重減少", value: "-6.8kg", sub: "3ヶ月平均" },
  { label: "平均体脂肪率減少", value: "-5.2%", sub: "3ヶ月平均" },
  { label: "内臓脂肪レベル改善", value: "-4.3", sub: "3ヶ月平均" },
  { label: "健康診断数値改善率", value: "87%", sub: "要指導→正常" },
];

const cases = [
  {
    name: "Y・K様",
    age: "45歳",
    occupation: "会社経営",
    location: "岡山市在住",
    period: "3ヶ月",
    metrics: [
      { label: "体重", before: "82kg", after: "74kg", diff: "-8kg" },
      { label: "体脂肪率", before: "28.5%", after: "22.1%", diff: "-6.4%" },
      { label: "内臓脂肪", before: "Lv.14", after: "Lv.9", diff: "-5" },
      { label: "ウエスト", before: "94cm", after: "84cm", diff: "-10cm" },
      { label: "血圧", before: "145/92", after: "128/82", diff: "正常化" },
    ],
    story: "健康診断で「要精密検査」と言われ焦りました。週1回60分、食事は居酒屋でも「選び方」を変えただけ。3ヶ月で健康診断A判定に。",
    keyPoint: "飲み会継続でも-8kg達成",
  },
  {
    name: "T・M様",
    age: "42歳",
    occupation: "IT企業 部長",
    location: "岡山市在住",
    period: "4ヶ月",
    metrics: [
      { label: "体重", before: "78kg", after: "71kg", diff: "-7kg" },
      { label: "体脂肪率", before: "26.2%", after: "20.8%", diff: "-5.4%" },
      { label: "内臓脂肪", before: "Lv.12", after: "Lv.7", diff: "-5" },
      { label: "ウエスト", before: "90cm", after: "82cm", diff: "-8cm" },
      { label: "中性脂肪", before: "186", after: "124", diff: "-62" },
    ],
    story: "過去3回ジムが続かなかった私でも、週1回なら続けられた。数値で成果が見えるから、モチベーションが下がらない。",
    keyPoint: "過去3回挫折→8ヶ月継続中",
  },
  {
    name: "S・H様",
    age: "48歳",
    occupation: "公務員",
    location: "倉敷市在住",
    period: "5ヶ月",
    metrics: [
      { label: "体重", before: "85kg", after: "76kg", diff: "-9kg" },
      { label: "体脂肪率", before: "29.8%", after: "23.5%", diff: "-6.3%" },
      { label: "内臓脂肪", before: "Lv.16", after: "Lv.10", diff: "-6" },
      { label: "ウエスト", before: "98cm", after: "86cm", diff: "-12cm" },
      { label: "HbA1c", before: "6.2", after: "5.6", diff: "-0.6" },
    ],
    story: "糖尿病予備軍と言われ、薬を飲む前にと決意。食事制限なしでHbA1cが正常値に。妻も驚いています。",
    keyPoint: "糖尿病予備軍→正常値に改善",
  },
  {
    name: "K・A様",
    age: "44歳",
    occupation: "営業職",
    location: "総社市在住",
    period: "3ヶ月",
    metrics: [
      { label: "体重", before: "76kg", after: "70kg", diff: "-6kg" },
      { label: "体脂肪率", before: "25.5%", after: "21.2%", diff: "-4.3%" },
      { label: "内臓脂肪", before: "Lv.11", after: "Lv.8", diff: "-3" },
      { label: "ウエスト", before: "88cm", after: "81cm", diff: "-7cm" },
    ],
    story: "出張と接待が多く、時間がない言い訳ばかりしていた。週1回60分なら出張前後でも調整できる。スーツが2サイズダウン。",
    keyPoint: "出張月10日でも成果を出した",
  },
];

export default function MetaboResults() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">
          40代男性の実績データ
        </h2>
        <p className="text-center text-gray-500 mb-8">
          ※個人の結果であり、効果を保証するものではありません
        </p>

        {/* 全体統計 */}
        <div className="bg-navy text-white rounded-xl p-6 mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <HiChartBar className="w-6 h-6 text-primary" />
            <h3 className="text-lg font-bold">40代男性会員の平均データ（n=47）</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {overallStats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 個別事例 */}
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-light rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* ヘッダー */}
              <div className="bg-navy text-white p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <HiUser className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold">{caseItem.name}</p>
                      <p className="text-sm text-gray-300">
                        {caseItem.age} / {caseItem.occupation}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-primary font-bold">{caseItem.period}</p>
                    <p className="text-xs text-gray-400">
                      <MdLocationOn className="inline w-3 h-3" /> {caseItem.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* 数値データ */}
              <div className="p-4 border-b">
                <div className="grid grid-cols-2 gap-2">
                  {caseItem.metrics.map((metric, i) => (
                    <div key={i} className="bg-white rounded p-2 text-sm">
                      <p className="text-gray-500 text-xs mb-1">{metric.label}</p>
                      <div className="flex items-center gap-1">
                        <span className="text-gray-400 line-through text-xs">{metric.before}</span>
                        <HiArrowRight className="w-3 h-3 text-gray-400" />
                        <span className="font-bold text-secondary">{metric.after}</span>
                        <span className="text-primary text-xs font-bold ml-auto">{metric.diff}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ストーリー */}
              <div className="p-4">
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  &ldquo;{caseItem.story}&rdquo;
                </p>
                <div className="flex items-center gap-2 bg-primary/10 rounded px-3 py-2">
                  <HiCheck className="w-4 h-4 text-primary flex-shrink-0" />
                  <p className="text-sm font-bold text-primary">{caseItem.keyPoint}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
