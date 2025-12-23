import { HiDesktopComputer } from "react-icons/hi";
import { GiBackPain, GiNeckBite } from "react-icons/gi";
import { MdAirlineSeatReclineNormal, MdDirectionsRun, MdOutlineTrendingUp } from "react-icons/md";

const problems = [
  {
    icon: <GiNeckBite className="w-6 h-6" />,
    text: "長時間のデスクワークで肩こりがひどい",
  },
  {
    icon: <GiBackPain className="w-6 h-6" />,
    text: "慢性的な腰痛に悩まされている",
  },
  {
    icon: <MdAirlineSeatReclineNormal className="w-6 h-6" />,
    text: "猫背が気になるけど直し方がわからない",
  },
  {
    icon: <MdDirectionsRun className="w-6 h-6" />,
    text: "運動不足を感じているが、何から始めればいいかわからない",
  },
  {
    icon: <HiDesktopComputer className="w-6 h-6" />,
    text: "ジムに通っても続かなかった経験がある",
  },
  {
    icon: <MdOutlineTrendingUp className="w-6 h-6" />,
    text: "体重が増えて、スーツがきつくなってきた",
  },
];

export default function DeskworkProblem() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
          こんなお悩みありませんか？
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
            一つでも当てはまる方、安心してください。
          </p>
          <p className="text-xl md:text-2xl font-bold mt-2">
            それは<span className="text-primary">「体の使い方」</span>を
            知らなかっただけです。
          </p>
        </div>
      </div>
    </section>
  );
}
