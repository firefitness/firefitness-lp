"use client";

import { HiOutlineScale, HiHeart, HiSparkles, HiSun } from "react-icons/hi";
import { GiMirrorMirror, GiTiredEye, GiClothes, GiNightSleep, GiHairStrands } from "react-icons/gi";
import { BsDroplet, BsEmojiSmile } from "react-icons/bs";
import { MdSpa } from "react-icons/md";

const problems = [
  {
    icon: <GiMirrorMirror className="w-6 h-6" />,
    text: "鏡を見るたびに体型の変化が気になる",
    description: "特にお腹まわり、二の腕、背中のお肉が気になる",
  },
  {
    icon: <GiClothes className="w-6 h-6" />,
    text: "以前着ていた服が似合わなくなった",
    description: "ワンピースやスカートを選ぶのが億劫に",
  },
  {
    icon: <HiOutlineScale className="w-6 h-6" />,
    text: "食事を減らしても体重が落ちない",
    description: "若い頃と同じ方法では結果が出ない",
  },
  {
    icon: <GiTiredEye className="w-6 h-6" />,
    text: "疲れが取れにくく、朝からだるい",
    description: "休日も家事で精一杯、自分の時間がない",
  },
  {
    icon: <BsDroplet className="w-6 h-6" />,
    text: "肌のハリ・ツヤが失われてきた",
    description: "スキンケアだけでは追いつかない",
  },
  {
    icon: <GiNightSleep className="w-6 h-6" />,
    text: "寝つきが悪い、眠りが浅い",
    description: "ぐっすり眠れた感覚がない",
  },
  {
    icon: <GiHairStrands className="w-6 h-6" />,
    text: "髪のボリュームが減ってきた",
    description: "ヘアスタイルが決まらなくなった",
  },
  {
    icon: <MdSpa className="w-6 h-6" />,
    text: "自分に自信が持てなくなった",
    description: "鏡を見るのが嫌になることも",
  },
];

const transformations = [
  {
    icon: <BsEmojiSmile className="w-8 h-8" />,
    before: "鏡を見るのが嫌...",
    after: "毎朝のスタイリングが楽しみに",
  },
  {
    icon: <HiHeart className="w-8 h-8" />,
    before: "どんどん老けていく...",
    after: "「若返った」と言われる",
  },
  {
    icon: <HiSparkles className="w-8 h-8" />,
    before: "何を着ても似合わない...",
    after: "好きな服を自信を持って着られる",
  },
  {
    icon: <HiSun className="w-8 h-8" />,
    before: "疲れて何もできない...",
    after: "朝からアクティブに動ける",
  },
];

export default function Over40WomenProblem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-female-pink text-sm font-medium mb-2">40代の変化</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            こんなお悩み、ありませんか？
          </h2>
          <p className="text-gray-500">
            40代になると体は変わります。でも、それは「衰え」ではなく「変化」。<br className="hidden md:block" />
            正しいケアで、もっと美しくなれます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-female-soft rounded-2xl p-5 flex items-start gap-4 hover:shadow-md transition-shadow border border-pink-100"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-female-pink flex-shrink-0 shadow-sm">
                {problem.icon}
              </div>
              <div>
                <p className="text-gray-800 font-medium mb-1">{problem.text}</p>
                <p className="text-gray-500 text-sm">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 変化のビジュアル */}
        <div className="bg-gradient-to-r from-female-soft via-white to-female-cream rounded-3xl p-8 border border-pink-100">
          <h3 className="text-center text-xl font-bold text-gray-800 mb-8">
            <span className="text-female-pink">3ヶ月後</span>、こんな変化が待っています
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {transformations.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center text-female-pink shadow-sm mb-4">
                  {item.icon}
                </div>
                <p className="text-gray-400 text-xs line-through mb-1">{item.before}</p>
                <p className="text-female-pink text-sm font-medium">{item.after}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
