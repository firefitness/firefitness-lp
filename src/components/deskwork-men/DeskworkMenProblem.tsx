import { GiNeckBite, GiBackPain, GiTiredEye } from "react-icons/gi";
import { BsLaptop, BsEyeFill } from "react-icons/bs";
import { MdOutlineChair } from "react-icons/md";

const problems = [
  {
    icon: <GiNeckBite className="w-6 h-6" />,
    text: "慢性的な肩こりで、マッサージに通い続けている",
  },
  {
    icon: <GiBackPain className="w-6 h-6" />,
    text: "座っているだけなのに腰が痛い",
  },
  {
    icon: <BsEyeFill className="w-6 h-6" />,
    text: "目の疲れ・頭痛がひどい",
  },
  {
    icon: <MdOutlineChair className="w-6 h-6" />,
    text: "気づくと猫背になっている",
  },
  {
    icon: <GiTiredEye className="w-6 h-6" />,
    text: "仕事終わりは疲れて何もできない",
  },
  {
    icon: <BsLaptop className="w-6 h-6" />,
    text: "運動不足を自覚しているが、何をすればいいかわからない",
  },
];

export default function DeskworkMenProblem() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-400 text-sm font-medium font-mono mb-2">{"// PROBLEM"}</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            デスクワークの代償、感じていませんか？
          </h2>
        </div>

        <div className="grid gap-3">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-slate-900/50 border border-slate-700 rounded p-5 flex items-center gap-4 hover:border-blue-500/50 transition-colors"
            >
              <div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center text-blue-400 flex-shrink-0">
                {problem.icon}
              </div>
              <p className="text-gray-300 text-base md:text-lg">{problem.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-slate-900 to-slate-900/50 border border-slate-700 rounded p-8">
          <p className="text-lg text-gray-400 mb-2">
            これらは全て「デスクワークだから仕方ない」ではありません。
          </p>
          <p className="text-xl md:text-2xl font-bold text-white">
            <span className="text-blue-400">原因を特定</span>すれば、<span className="text-blue-400">改善できます</span>
          </p>
        </div>
      </div>
    </section>
  );
}
