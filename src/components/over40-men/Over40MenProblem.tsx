import { HiOutlineLightningBolt, HiOutlineClock } from "react-icons/hi";
import { GiBrain, GiNightSleep, GiStomach } from "react-icons/gi";
import { BsGraphDown } from "react-icons/bs";

const problems = [
  {
    icon: <HiOutlineLightningBolt className="w-6 h-6" />,
    text: "朝起きても疲れが取れていない",
  },
  {
    icon: <GiBrain className="w-6 h-6" />,
    text: "午後の会議で集中力が続かない",
  },
  {
    icon: <GiStomach className="w-6 h-6" />,
    text: "スーツのウエストがきつくなった",
  },
  {
    icon: <BsGraphDown className="w-6 h-6" />,
    text: "健康診断の数値が年々悪化している",
  },
  {
    icon: <GiNightSleep className="w-6 h-6" />,
    text: "休日は疲れて動けない",
  },
  {
    icon: <HiOutlineClock className="w-6 h-6" />,
    text: "運動したいが、時間がないと感じている",
  },
];

export default function Over40MenProblem() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-male-accent text-sm font-medium mb-2">PROBLEM</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            40代、こんな変化を感じていませんか？
          </h2>
        </div>

        <div className="grid gap-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-5 flex items-center gap-4 hover:border-male-accent/50 transition-colors"
            >
              <div className="text-male-accent flex-shrink-0">{problem.icon}</div>
              <p className="text-gray-300 text-base md:text-lg">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-lg p-8">
          <p className="text-lg text-gray-400 mb-2">
            これらは「年のせい」ではありません。
          </p>
          <p className="text-xl md:text-2xl font-bold text-white">
            <span className="text-male-accent">正しいアプローチ</span>で、必ず改善できます。
          </p>
        </div>
      </div>
    </section>
  );
}
