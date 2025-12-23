import { HiClipboardList, HiOutlineOfficeBuilding, HiTrendingUp, HiExclamationCircle } from "react-icons/hi";
import { GiRunningShoe, GiBeerBottle, GiWeightScale, GiNightSleep } from "react-icons/gi";
import { MdAccessTime, MdMonitorHeart } from "react-icons/md";
import { BsChatLeftText } from "react-icons/bs";

const problems = [
  {
    icon: <HiClipboardList className="w-6 h-6" />,
    text: "健康診断で「メタボ予備軍」「要経過観察」と書かれた",
    stat: "40代男性の2人に1人",
  },
  {
    icon: <GiWeightScale className="w-6 h-6" />,
    text: "30代の頃より体重が5kg以上増えた",
    stat: "平均+7.2kg",
  },
  {
    icon: <HiOutlineOfficeBuilding className="w-6 h-6" />,
    text: "スーツのウエストがきつくなってきた",
    stat: "ウエスト+5cm以上",
  },
  {
    icon: <BsChatLeftText className="w-6 h-6" />,
    text: "妻や同僚に「太った？」と言われるようになった",
    stat: null,
  },
  {
    icon: <MdMonitorHeart className="w-6 h-6" />,
    text: "血圧・血糖値・コレステロールの数値が気になる",
    stat: "生活習慣病リスク3倍",
  },
  {
    icon: <GiRunningShoe className="w-6 h-6" />,
    text: "ジムに入会したが、3ヶ月以内に幽霊会員になった",
    stat: "継続率わずか4%",
  },
  {
    icon: <GiBeerBottle className="w-6 h-6" />,
    text: "付き合いの飲み会が月4回以上ある",
    stat: null,
  },
  {
    icon: <MdAccessTime className="w-6 h-6" />,
    text: "忙しくて運動する時間がないと感じている",
    stat: "週60分で十分",
  },
  {
    icon: <GiNightSleep className="w-6 h-6" />,
    text: "疲れやすくなった、回復が遅くなった",
    stat: "代謝低下の兆候",
  },
  {
    icon: <HiTrendingUp className="w-6 h-6" />,
    text: "年齢とともに痩せにくくなったと感じる",
    stat: "基礎代謝-2%/年",
  },
];

const riskData = [
  { label: "心筋梗塞リスク", multiplier: "2.5倍", color: "text-red-500" },
  { label: "脳卒中リスク", multiplier: "2.0倍", color: "text-red-500" },
  { label: "糖尿病リスク", multiplier: "5.0倍", color: "text-red-500" },
];

export default function MetaboProblem() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-5xl mx-auto px-4">
        {/* 警告データ */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <HiExclamationCircle className="w-6 h-6 text-red-500" />
            <h3 className="text-lg font-bold text-red-700">メタボ放置のリスク（厚生労働省データ）</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {riskData.map((risk, index) => (
              <div key={index} className="text-center">
                <p className={`text-2xl md:text-3xl font-bold ${risk.color}`}>{risk.multiplier}</p>
                <p className="text-sm text-gray-600">{risk.label}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">
          こんな状況に心当たりはありませんか？
        </h2>
        <p className="text-center text-gray-500 mb-8">
          1つでも当てはまる方、早めの対策が重要です
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow border-l-4 border-primary"
            >
              <div className="text-primary flex-shrink-0">{problem.icon}</div>
              <div className="flex-grow">
                <p className="text-secondary text-base">{problem.text}</p>
                {problem.stat && (
                  <p className="text-xs text-primary font-medium mt-1">※{problem.stat}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-sm">
          <p className="text-lg md:text-xl text-secondary mb-4">
            これらは全て<span className="text-red-500 font-bold">「放置すると悪化する」</span>症状です。
          </p>
          <p className="text-xl md:text-2xl font-bold">
            でも安心してください。
            <span className="text-primary">正しい方法</span>なら<span className="text-primary">3ヶ月</span>で変われます。
          </p>
        </div>
      </div>
    </section>
  );
}
