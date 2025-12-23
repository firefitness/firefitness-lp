import Image from "next/image";
import { GiBodyBalance, GiMeal, GiCycle } from "react-icons/gi";
import { HiArrowRight } from "react-icons/hi";

const axes = [
  {
    number: "01",
    title: "姿勢軸",
    description:
      "7つのパターンから体の使い方の癖を特定。「なぜ腰が痛いのか」「なぜ腹筋が効かないのか」が明確になります。",
    icon: <GiBodyBalance className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
  },
  {
    number: "02",
    title: "食事軸",
    description:
      "8つのパターンからあなたに合った食べ方を特定。制限ではなく「置き換え」だから一生続きます。",
    icon: <GiMeal className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80",
    examples: ["菓子パン → おにぎり", "カフェラテ → ブラックコーヒー", "ポテチ → ナッツ"],
  },
  {
    number: "03",
    title: "継続軸",
    description:
      "完璧主義？効率重視？不安タイプ？あなたの性格に合った続け方を設計します。",
    icon: <GiCycle className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",
  },
];

export default function MetaboSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">
            他店・ヨガ・ピラティス・整骨院とは違う
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            だから、最初に「原因」を特定します
          </h2>
          <p className="text-xl text-secondary font-bold">
            FIREFITNESSの<span className="text-primary">精密3軸診断</span>
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
            原因がわかれば、やるべきことは明確です。
          </p>
        </div>
      </div>
    </section>
  );
}
