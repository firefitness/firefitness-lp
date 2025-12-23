import { HiArrowRight } from "react-icons/hi";
import { MdTrendingDown, MdOutlineSpeed } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";

const facts = [
  {
    icon: <MdTrendingDown className="w-8 h-8" />,
    number: "-1%/年",
    title: "基礎代謝の低下",
    text: "40代から基礎代謝は年1%ずつ低下。同じ食事でも太りやすくなります。",
  },
  {
    icon: <GiMuscleUp className="w-8 h-8" />,
    number: "-1%/年",
    title: "筋肉量の減少",
    text: "何もしなければ筋肉は年1%減少。体型崩れ、疲れやすさの原因に。",
  },
  {
    icon: <MdOutlineSpeed className="w-8 h-8" />,
    number: "回復力",
    title: "ホルモンバランスの変化",
    text: "成長ホルモンの分泌低下で、疲労回復や脂肪燃焼効率が落ちます。",
  },
];

const solutions = [
  {
    wrong: "20代と同じハードなトレーニング",
    right: "40代の体に合った効率的なメニュー",
  },
  {
    wrong: "極端な食事制限",
    right: "代謝を上げる食事の「置き換え」",
  },
  {
    wrong: "がむしゃらに毎日運動",
    right: "週1回でも正しいフォームで確実に",
  },
];

export default function Over40Cause() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          40代の体に何が起きているのか
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          知れば、対策がわかります
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
          だから、<span className="text-primary">40代には40代のやり方</span>がある
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
