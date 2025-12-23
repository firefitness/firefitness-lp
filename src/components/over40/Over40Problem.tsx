import { HiTrendingDown, HiScale } from "react-icons/hi";
import { GiMuscleUp, GiNightSleep } from "react-icons/gi";
import { MdOutlineEnergySavingsLeaf, MdSportsGymnastics } from "react-icons/md";

const problems = [
  {
    icon: <HiTrendingDown className="w-6 h-6" />,
    text: "同じ食事量なのに、体重が増えるようになった",
  },
  {
    icon: <GiMuscleUp className="w-6 h-6" />,
    text: "筋肉が落ちて、体型が崩れてきた",
  },
  {
    icon: <MdOutlineEnergySavingsLeaf className="w-6 h-6" />,
    text: "疲れやすくなった、回復が遅い",
  },
  {
    icon: <HiScale className="w-6 h-6" />,
    text: "ダイエットしても昔のように痩せない",
  },
  {
    icon: <MdSportsGymnastics className="w-6 h-6" />,
    text: "運動を始めたいが、何からやればいいかわからない",
  },
  {
    icon: <GiNightSleep className="w-6 h-6" />,
    text: "このまま年を重ねることに不安を感じる",
  },
];

export default function Over40Problem() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
          40代、こんな変化を感じていませんか？
        </h2>

        <div className="grid gap-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow border-l-4 border-primary"
            >
              <div className="text-primary flex-shrink-0">{problem.icon}</div>
              <p className="text-secondary text-base md:text-lg">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white rounded-xl p-8 shadow-sm">
          <p className="text-lg md:text-xl text-secondary">
            これらは全て、
            <span className="text-primary font-bold">40代特有の体の変化</span>
            です。
          </p>
          <p className="text-xl md:text-2xl font-bold mt-2">
            正しいアプローチで、
            <span className="text-primary">必ず改善できます。</span>
          </p>
        </div>
      </div>
    </section>
  );
}
