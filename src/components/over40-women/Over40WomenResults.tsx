"use client";

import Image from "next/image";
import { HiSparkles, HiHeart, HiCheck } from "react-icons/hi";

const results = [
  {
    name: "M・S様",
    age: "45歳",
    occupation: "会社員",
    period: "4ヶ月",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80",
    mainChange: "ワンピースが似合う体型に",
    changes: [
      { label: "体重", value: "-6kg" },
      { label: "体脂肪率", value: "-5%" },
      { label: "ウエスト", value: "-7cm" },
    ],
    benefits: ["二の腕がスッキリ", "姿勢が良くなった", "肌にハリが戻った"],
    comment: "着たかったワンピースが似合うようになりました。周りから「何かしてる？」と聞かれるようになって嬉しいです。自分に自信が持てるようになりました。",
  },
  {
    name: "K・T様",
    age: "48歳",
    occupation: "主婦",
    period: "3ヶ月",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    mainChange: "疲れにくい体に",
    changes: [
      { label: "体重", value: "-4kg" },
      { label: "体脂肪率", value: "-4%" },
      { label: "姿勢", value: "改善" },
    ],
    benefits: ["肩こり解消", "睡眠の質UP", "朝スッキリ起きられる"],
    comment: "ずっと悩んでいた肩こりがなくなって、姿勢も良くなったと娘に言われます。疲れにくくなったのが一番嬉しい変化です。",
  },
  {
    name: "Y・H様",
    age: "42歳",
    occupation: "パート",
    period: "5ヶ月",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",
    mainChange: "若々しい印象に",
    changes: [
      { label: "体重", value: "-8kg" },
      { label: "体脂肪率", value: "-7%" },
      { label: "ヒップ", value: "-5cm" },
    ],
    benefits: ["お腹がへこんだ", "脚がスッキリ", "肌ツヤ改善"],
    comment: "食事を我慢せずにここまで変われるとは思いませんでした。肌の調子も良くなって、毎日鏡を見るのが楽しみです。",
  },
  {
    name: "A・M様",
    age: "46歳",
    occupation: "自営業",
    period: "4ヶ月",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
    mainChange: "自信を取り戻した",
    changes: [
      { label: "体重", value: "-5kg" },
      { label: "体脂肪率", value: "-4%" },
      { label: "ウエスト", value: "-6cm" },
    ],
    benefits: ["背中スッキリ", "代謝UP", "むくみ解消"],
    comment: "背中のお肉が気になっていたのですが、すっきりしました。人前に出ることが多いので、自信を持って立てるようになりました。",
  },
];

const voicesFromCustomers = [
  "「痩せた？」と聞かれることが増えた",
  "お気に入りのスカートが履けるようになった",
  "朝起きるのが楽になった",
  "肌にハリが戻ってきた",
  "姿勢が良くなったと言われた",
  "写真に写るのが嫌じゃなくなった",
];

export default function Over40WomenResults() {
  return (
    <section className="py-20 bg-female-soft">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-female-pink text-sm font-medium mb-2">お客様の変化</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            40代からでも、こんなに変われます
          </h2>
          <p className="text-gray-500 text-sm">
            ※個人の感想であり、効果を保証するものではありません
          </p>
        </div>

        {/* 個別事例 */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-pink-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex">
                {/* 左側：画像 */}
                <div className="relative w-1/3 min-h-[200px]">
                  <Image
                    src={result.image}
                    alt={`${result.name}の変化`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                </div>

                {/* 右側：情報 */}
                <div className="flex-1 p-5">
                  {/* ヘッダー */}
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-bold text-gray-800">{result.name}</p>
                      <p className="text-xs text-gray-500">{result.age} / {result.occupation}</p>
                    </div>
                    <span className="bg-female-pink text-white text-xs px-2 py-1 rounded-full">
                      {result.period}
                    </span>
                  </div>

                  {/* メインの変化 */}
                  <div className="bg-female-soft rounded-xl p-3 mb-3">
                    <div className="flex items-center gap-2">
                      <HiSparkles className="w-4 h-4 text-female-pink" />
                      <p className="font-bold text-female-pink">{result.mainChange}</p>
                    </div>
                  </div>

                  {/* 数値 */}
                  <div className="flex gap-2 mb-3">
                    {result.changes.map((change, i) => (
                      <div key={i} className="text-center flex-1 bg-gray-50 rounded-lg p-2">
                        <p className="text-sm font-bold text-female-pink">{change.value}</p>
                        <p className="text-xs text-gray-500">{change.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* その他の変化 */}
                  <div className="flex flex-wrap gap-1">
                    {result.benefits.map((benefit, i) => (
                      <span key={i} className="text-xs bg-pink-50 text-female-pink px-2 py-1 rounded-full">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* コメント */}
              <div className="px-5 pb-5">
                <div className="border-t border-pink-50 pt-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    &ldquo;{result.comment}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 嬉しい声 */}
        <div className="bg-white rounded-3xl p-8 border border-pink-100">
          <div className="flex items-center justify-center gap-2 mb-6">
            <HiHeart className="w-5 h-5 text-female-pink" />
            <h3 className="text-lg font-bold text-gray-800">お客様からの嬉しい声</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {voicesFromCustomers.map((voice, index) => (
              <div key={index} className="flex items-center gap-2 bg-female-soft rounded-full px-4 py-2">
                <HiCheck className="w-4 h-4 text-female-pink flex-shrink-0" />
                <p className="text-sm text-gray-700">{voice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
