import FAQAccordion from "../FAQAccordion";

const faqs = [
  {
    question: "40代で運動経験がなくても大丈夫ですか？",
    answer:
      "はい、全く問題ありません。当ジムの40代会員の多くが運動初心者からスタートしています。40代の体に合わせた負荷設定で、安全かつ効果的にトレーニングできます。",
  },
  {
    question: "若い頃のように痩せられますか？",
    answer:
      "同じ方法では難しいですが、40代に合った方法なら結果は出ます。代謝が落ちた40代は、食事制限より代謝を上げることが重要。精密3軸診断であなたに最適な方法をお伝えします。",
  },
  {
    question: "膝や腰が痛いのですが、トレーニングできますか？",
    answer:
      "痛みがある部位に負担をかけないメニューを作成します。むしろ、正しいトレーニングで関節周りの筋肉を鍛えることで、痛みが改善するケースも多いです。事前にご相談ください。",
  },
  {
    question: "週1回で本当に効果がありますか？",
    answer:
      "はい、あります。40代は回復力も落ちているため、週1回の質の高いトレーニングと正しい食事の組み合わせが効果的です。むしろ毎日やるより効率が良いケースもあります。",
  },
  {
    question: "若い人ばかりのジムは気が引けるのですが...",
    answer:
      "ご安心ください。FIREFITNESSは完全個室のマンツーマン指導です。他のお客様と顔を合わせることはありません。40代の会員様も多く、気兼ねなくトレーニングできます。",
  },
  {
    question: "仕事が忙しくて続けられるか不安です",
    answer:
      "完全予約制なので待ち時間なし。朝7時から夜22時まで営業しているので、出勤前や仕事帰りにも通えます。週1回60分から始められるので、忙しい40代の方も無理なく継続できます。",
  },
];

export default function Over40FAQ() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
          40代の方からよくある質問
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
