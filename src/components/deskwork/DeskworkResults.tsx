import { HiUser, HiTrendingDown } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const cases = [
  {
    name: "T・K様",
    age: "40代",
    occupation: "会社員（事務職）",
    location: "岡山市在住",
    before: {
      issue: "10年以上の肩こり",
    },
    after: {
      achievement: "肩こり改善・姿勢改善",
    },
    period: "3ヶ月",
    story:
      "10年以上悩んでいた肩こりが、3ヶ月で劇的に改善しました。トレーナーさんが私の姿勢の問題点を的確に指摘してくれて、正しいフォームで鍛えられたのが良かったです。",
    trainerComment:
      "T・K様は典型的な巻き肩で、胸の筋肉が硬く、背中の筋肉が弱っていました。姿勢を矯正しながら、背中の筋力強化を行いました。",
  },
  {
    name: "S・M様",
    age: "30代",
    occupation: "ITエンジニア",
    location: "岡山市在住",
    before: {
      issue: "慢性的な腰痛",
    },
    after: {
      achievement: "腰痛改善・体重-5kg",
    },
    period: "4ヶ月",
    story:
      "1日10時間以上PCに向かう仕事で、腰痛が限界でした。FIREFITNESSで体幹を鍛えてからは、長時間座っていても痛みが出なくなりました。",
    trainerComment:
      "長時間の座位で腹筋と背筋のバランスが崩れていました。体幹トレーニングで姿勢を支える筋肉を強化し、腰への負担を軽減しました。",
  },
  {
    name: "A・Y様",
    age: "40代",
    occupation: "管理職",
    location: "倉敷市在住",
    before: {
      issue: "運動嫌いで続かない",
    },
    after: {
      achievement: "運動習慣の定着・体型改善",
    },
    period: "6ヶ月",
    story:
      "運動嫌いの私でも続けられたのは、マンツーマンで丁寧に教えてもらえるから。周りの目を気にせずトレーニングできるのも良いですね。",
    trainerComment:
      "運動が苦手な方でも、個人に合わせた負荷設定で無理なく始められます。A・Y様は今では週1回のトレーニングが楽しみとおっしゃっています。",
  },
];

export default function DeskworkResults() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">
          デスクワーカーの方が、こう変わりました
        </h2>
        <p className="text-center text-gray-500 mb-12">
          ※個人の感想であり、効果には個人差があります
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((caseItem, index) => (
            <div
              key={index}
              className="bg-light rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* ヘッダー */}
              <div className="bg-navy text-white p-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <HiUser className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold">{caseItem.name}</p>
                    <p className="text-sm text-gray-300">
                      {caseItem.age} / {caseItem.occupation}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm text-gray-300">
                  <MdLocationOn className="w-4 h-4" />
                  <span>{caseItem.location}</span>
                </div>
              </div>

              {/* Before/After */}
              <div className="p-4 border-b">
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">Before</p>
                    <p className="text-sm text-gray-700">{caseItem.before.issue}</p>
                  </div>
                  <HiTrendingDown className="w-6 h-6 text-primary rotate-[-45deg]" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-1">After</p>
                    <p className="text-sm font-bold text-primary">
                      {caseItem.after.achievement}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-right">
                  期間: {caseItem.period}
                </p>
              </div>

              {/* ストーリー */}
              <div className="p-4">
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {caseItem.story}
                </p>
                <div className="bg-white rounded-lg p-3 border-l-2 border-primary">
                  <p className="text-xs text-gray-500 mb-1">トレーナーコメント</p>
                  <p className="text-xs text-gray-600">{caseItem.trainerComment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
