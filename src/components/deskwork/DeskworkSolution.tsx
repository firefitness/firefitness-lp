import Image from "next/image";
import { GiBodyBalance, GiMeal, GiCycle } from "react-icons/gi";
import { HiArrowRight } from "react-icons/hi";

const axes = [
  {
    number: "01",
    title: "姿勢軸",
    description:
      "デスクワークで固まった筋肉を特定。猫背・巻き肩の原因を分析し、正しい姿勢を取り戻すプログラムを作成。",
    icon: <GiBodyBalance className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
  },
  {
    number: "02",
    title: "食事軸",
    description:
      "忙しいビジネスパーソンでも実践できる食事法。コンビニ・外食でも選び方次第で体は変わります。",
    icon: <GiMeal className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
    examples: ["コンビニ弁当 → サラダチキン+おにぎり", "ラーメン → 定食", "菓子パン → おにぎり"],
  },
  {
    number: "03",
    title: "継続軸",
    description:
      "仕事が忙しくても続けられる仕組みを設計。週1回60分、22時まで営業で仕事帰りにも通えます。",
    icon: <GiCycle className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
  },
];

export default function DeskworkSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">
            他店・整骨院・マッサージとは違う
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            デスクワーカー専用「精密3軸診断」
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            マッサージは一時的な緩和。根本改善には、原因の特定と正しいアプローチが必要です。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {axes.map((axis, index) => (
            <div
              key={index}
              className="bg-light rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* 画像 */}
              <div className="relative h-40">
                <Image
                  src={axis.image}
                  alt={axis.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {axis.number}
                </div>
              </div>

              <div className="p-6 relative">
                <div className="mb-4">{axis.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {axis.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {axis.description}
                </p>
                {axis.examples && (
                  <div className="space-y-2">
                    {axis.examples.map((example, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-sm text-gray-500"
                      >
                        <HiArrowRight className="w-4 h-4 text-primary" />
                        <span>{example}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-navy text-white rounded-xl p-8">
          <p className="text-xl md:text-2xl font-bold">
            デスクワークの不調は、正しいアプローチで必ず改善できます。
          </p>
        </div>
      </div>
    </section>
  );
}
