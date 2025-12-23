import FAQAccordion from "../FAQAccordion";

const faqs = [
  {
    question: "運動経験がなくても大丈夫ですか？",
    answer:
      "はい、大丈夫です。当ジムのお客様の8割以上が運動初心者です。あなたの体力レベルに合わせたプログラムを作成しますので、無理なく始められます。",
  },
  {
    question: "本当に食事制限なしで痩せられますか？",
    answer:
      "はい。当ジムでは「制限」ではなく「置き換え」を提案しています。例えば、菓子パンをおにぎりに、カフェラテをブラックコーヒーに。我慢ではなく、習慣を変えることで無理なく続けられます。",
  },
  {
    question: "仕事が忙しくて、続けられるか不安です",
    answer:
      "週1回60分から始められます。完全予約制なので待ち時間もありません。朝7時〜夜22時まで営業しているので、仕事前や仕事帰りにも通えます。",
  },
  {
    question: "体験後、必ず入会しないといけませんか？",
    answer:
      "いいえ、その場で決めていただく必要はありません。体験後にじっくり検討いただいて構いません。無理な勧誘は一切しませんのでご安心ください。",
  },
  {
    question: "駐車場はありますか？",
    answer:
      "はい、島田本町店・伊福町店ともに駐車場を完備しています。車でのお越しも便利です。",
  },
  {
    question: "他のジムやヨガと何が違うのですか？",
    answer:
      "一番の違いは「最初に原因を特定する」ことです。一般的なジムやヨガは決まったメニューをこなしますが、FIREFITNESSでは精密3軸診断であなたの体の癖、食事パターン、性格タイプを分析し、あなただけのプログラムを作成します。だから効率的に結果が出ます。",
  },
];

export default function MetaboFAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
          よくある質問
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
