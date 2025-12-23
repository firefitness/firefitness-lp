import { HiUser, HiTrendingDown } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

const cases = [
  {
    name: "M・T様",
    age: "47歳",
    occupation: "会社経営",
    location: "岡山市在住",
    before: {
      issue: "体重増加、体力低下が顕著",
    },
    after: {
      achievement: "体重-8kg、体脂肪率-6%",
    },
    period: "4ヶ月",
    story:
      "40代後半になり、体重は増える一方、階段を上るだけで息切れするように。このままではまずいと思い入会しました。3軸診断で自分の体の癖がわかり、効率よくトレーニングできました。",
    trainerComment:
      "M・T様は反り腰が強く、腹筋が使えていない状態でした。姿勢改善と体幹トレーニングを中心に、無理なく体を変えていきました。",
  },
  {
    name: "K・S様",
    age: "43歳",
    occupation: "公務員",
    location: "倉敷市在住",
    before: {
      issue: "何をしても痩せない",
    },
    after: {
      achievement: "ウエスト-10cm",
    },
    period: "5ヶ月",
    story:
      "30代まではすぐ痩せられたのに、40代になってから何をしても体重が落ちず困っていました。食事の置き換えを教えてもらい、我慢せずに体型が変わりました。",
    trainerComment:
      "代謝が落ちている40代は、食事制限ではなく代謝を上げることが重要です。K・S様には基礎代謝を上げる食事法をお伝えしました。",
  },
  {
    name: "H・N様",
    age: "45歳",
    occupation: "自営業",
    location: "岡山市在住",
    before: {
      issue: "運動経験ゼロ",
    },
    after: {
      achievement: "筋力アップ、疲れにくい体に",
    },
    period: "6ヶ月",
    story:
      "人生で一度も運動したことがなく、ジムは敷居が高いと思っていました。完全個室で人目を気にせずできるのが良かったです。今では体を動かすのが楽しみになりました。",
    trainerComment:
      "運動経験がない方でも、40代の体に合わせた負荷設定で安全にトレーニングできます。H・N様は着実に筋力がつき、日常生活も楽になったとおっしゃっています。",
  },
];

export default function Over40Results() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-4">
          40代から始めて、こう変わりました
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
