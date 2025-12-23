import { HiArrowRight } from "react-icons/hi";
import { MdAccessTime, MdAirlineSeatReclineNormal } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";

const facts = [
  {
    icon: <MdAccessTime className="w-8 h-8" />,
    number: "8時間+",
    title: "座りっぱなし",
    text: "デスクワーカーの平均座位時間。同じ姿勢が体を固めます。",
  },
  {
    icon: <MdAirlineSeatReclineNormal className="w-8 h-8" />,
    number: "猫背",
    title: "姿勢の崩れ",
    text: "PC作業による前傾姿勢が、肩こり・腰痛の根本原因に。",
  },
  {
    icon: <GiMuscleUp className="w-8 h-8" />,
    number: "筋力低下",
    title: "インナーマッスルの衰え",
    text: "姿勢を支える深部筋が弱り、体を支えられなくなっています。",
  },
];

const solutions = [
  {
    wrong: "マッサージで一時的にほぐす",
    right: "根本原因の姿勢を改善する",
  },
  {
    wrong: "とにかくストレッチをする",
    right: "硬い筋肉と弱い筋肉を見極める",
  },
  {
    wrong: "我慢して仕事を続ける",
    right: "正しい体の使い方を身につける",
  },
];

export default function DeskworkCause() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          なぜデスクワークで体を壊すのか
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          原因を知れば、解決策がわかります
        </p>

        {/* 事実 */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {facts.map((fact, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
            >
              <div className="text-primary mb-3 flex justify-center">
                {fact.icon}
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary mb-2">
                {fact.number}
              </p>
              <p className="font-bold mb-2">{fact.title}</p>
              <p className="text-gray-300 text-sm">{fact.text}</p>
            </div>
          ))}
        </div>

        {/* 解決策 */}
        <h3 className="text-xl font-bold text-center mb-8">
          <span className="text-primary">根本改善</span>のためのアプローチ
        </h3>

        <div className="space-y-4">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur rounded-lg p-5 flex flex-col md:flex-row items-center gap-4"
            >
              <div className="flex-1 text-center md:text-right">
                <span className="text-gray-400 line-through">{item.wrong}</span>
              </div>
              <HiArrowRight className="w-6 h-6 text-primary flex-shrink-0 rotate-90 md:rotate-0" />
              <div className="flex-1 text-center md:text-left">
                <span className="text-primary font-medium">{item.right}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
