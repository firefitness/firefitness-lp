import { GiBodyBalance, GiMeal, GiCycle } from "react-icons/gi";
import { HiHeart } from "react-icons/hi";

const axes = [
  {
    number: "01",
    title: "姿勢軸",
    description:
      "7つのパターンから体の癖を分析。美しい姿勢は見た目の若々しさと代謝アップにつながります。",
    icon: <GiBodyBalance className="w-8 h-8 text-female-pink" />,
    benefits: ["姿勢美人に", "代謝アップ", "肩こり改善"],
  },
  {
    number: "02",
    title: "食事軸",
    description:
      "8つのパターンから最適な食べ方を提案。我慢するダイエットではなく、食べながら美しくなる方法を。",
    icon: <GiMeal className="w-8 h-8 text-female-pink" />,
    benefits: ["無理な制限なし", "肌ツヤアップ", "一生続く習慣"],
  },
  {
    number: "03",
    title: "継続軸",
    description:
      "あなたの性格に合った続け方を設計。週1回60分から、自分のペースで無理なく通えます。",
    icon: <GiCycle className="w-8 h-8 text-female-pink" />,
    benefits: ["週1回から", "完全個室", "予約変更OK"],
  },
];

export default function Over40WomenSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-female-pink text-sm font-medium mb-2">FIREFITNESSの特徴</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            精密3軸診断で、
            <br className="md:hidden" />
            あなただけのプログラムを
          </h2>
          <p className="text-gray-600">
            他店・ヨガ・ピラティス・整骨院とは違う、科学的なアプローチ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {axes.map((axis, index) => (
            <div
              key={index}
              className="bg-female-soft rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  {axis.icon}
                </div>
                <div>
                  <span className="text-female-pink text-xs font-medium">AXIS {axis.number}</span>
                  <h3 className="text-xl font-bold text-gray-800">{axis.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{axis.description}</p>
              <div className="flex flex-wrap gap-2">
                {axis.benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs text-gray-600 border border-pink-100"
                  >
                    <HiHeart className="w-3 h-3 text-female-pink" />
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-gradient-to-r from-female-pink/10 to-female-rose/10 rounded-2xl p-8 border border-pink-200">
          <p className="text-xl md:text-2xl font-bold text-gray-800">
            あなたに合った方法で、
            <span className="text-female-pink">内側から輝く美しさ</span>を
          </p>
        </div>
      </div>
    </section>
  );
}
