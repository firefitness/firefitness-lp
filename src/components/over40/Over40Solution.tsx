import Image from "next/image";
import { GiBodyBalance, GiMeal, GiCycle } from "react-icons/gi";
import { HiArrowRight } from "react-icons/hi";

const axes = [
  {
    number: "01",
    title: "姿勢軸",
    description:
      "40代特有の体の硬さ、姿勢の崩れを分析。関節に負担をかけず、効率よく筋肉を使えるようにします。",
    icon: <GiBodyBalance className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
  },
  {
    number: "02",
    title: "食事軸",
    description:
      "代謝が落ちた40代に合った食事法。制限ではなく「置き換え」で、基礎代謝を上げながら脂肪を落とす。",
    icon: <GiMeal className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80",
    examples: ["白米 → 玄米", "揚げ物 → 焼き物", "ジュース → 水・お茶"],
  },
  {
    number: "03",
    title: "継続軸",
    description:
      "仕事や家庭で忙しい40代のライフスタイルに合わせた、無理なく続けられるプランを設計。",
    icon: <GiCycle className="w-10 h-10 text-primary" />,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=400&q=80",
  },
];

export default function Over40Solution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">
            他店・ヨガ・ピラティス・整骨院とは違う
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
            40代の体を知り尽くした「精密3軸診断」
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            若い頃と同じトレーニングでは結果が出ません。
            40代の体に最適化されたプログラムを、あなた専用に作成します。
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
            40代だからこそ、効率の良いトレーニングを。
          </p>
        </div>
      </div>
    </section>
  );
}
