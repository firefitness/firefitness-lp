import { HiArrowRight, HiTrendingDown } from "react-icons/hi";
import { MdTimer } from "react-icons/md";
import { GiAbdominalArmor } from "react-icons/gi";

const comparisons = [
  {
    wrong: "とにかく走ればいい",
    right: "あなたの体の癖に合った運動が必要",
  },
  {
    wrong: "食事を減らせばいい",
    right: "減らすのではなく「置き換える」",
  },
  {
    wrong: "毎日やらないと意味がない",
    right: "週1回でも正しくやれば変わる",
  },
];

const statistics = [
  {
    icon: <HiTrendingDown className="w-8 h-8" />,
    number: "1%",
    text: "40代から筋力は年1%ずつ低下",
  },
  {
    icon: <MdTimer className="w-8 h-8" />,
    number: "3倍",
    text: "5年放置すると取り戻すのに3倍の時間",
  },
  {
    icon: <GiAbdominalArmor className="w-8 h-8" />,
    number: "内臓脂肪",
    text: "運動で落としやすい脂肪タイプ",
  },
];

export default function MetaboCause() {
  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          なぜ今まで変われなかったのか
        </h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          意志が弱いからではありません。
          <br />
          <span className="text-primary font-bold">
            「自分に合った方法」を知らなかった
          </span>
          だけです。
        </p>

        {/* 比較 */}
        <div className="space-y-4 mb-16">
          {comparisons.map((item, index) => (
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

        {/* 統計データ */}
        <div className="grid md:grid-cols-3 gap-6">
          {statistics.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur rounded-xl p-6 text-center"
            >
              <div className="text-primary mb-3 flex justify-center">
                {stat.icon}
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-gray-300 text-sm">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
