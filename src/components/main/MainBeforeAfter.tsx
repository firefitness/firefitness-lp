"use client";

import Image from "next/image";

const stories = [
  {
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/04/LP画像ba1-1.png",
    title: "54歳 女性",
    description: "運動経験なしから4ヶ月で-13.6kg達成",
  },
  {
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/04/LP画像ba3.png",
    title: "45歳 男性",
    description: "下腹部集中ケアで3ヶ月の体型変化",
  },
  {
    image: "https://www.firefitness-okayama.com/wp-content/uploads/2025/04/LP画像ba2.png",
    title: "33歳 女性",
    description: "リバウンドのないダイエットを実現",
  },
];

export default function MainBeforeAfter() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">
          実際の変化
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          FIREFITNESSで多くの方が理想の体型を手に入れています。<br />
          実際のお客様の変化をご覧ください。
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-5 text-center"
            >
              <div className="relative mb-4 rounded-lg overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                  ※効果には個人差があります。
                </div>
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">
                {story.title}
              </h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold py-2 px-6 rounded-full transition-colors">
                詳しく見る
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
