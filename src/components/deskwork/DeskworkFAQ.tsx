import FAQAccordion from "../FAQAccordion";

const faqs = [
  {
    question: "整骨院やマッサージとの違いは何ですか？",
    answer:
      "整骨院やマッサージは「緩める」ことがメインですが、FIREFITNESSは「鍛える」ことで根本改善を目指します。硬くなった筋肉をほぐすだけでなく、弱った筋肉を鍛えて姿勢を支える力をつけることで、肩こり・腰痛が再発しにくい体を作ります。",
  },
  {
    question: "運動経験がなくても大丈夫ですか？",
    answer:
      "はい、問題ありません。当ジムの会員様の多くが運動初心者です。マンツーマンで正しいフォームを丁寧に指導しますので、運動が苦手な方でも安心して始められます。",
  },
  {
    question: "肩こりや腰痛があっても運動できますか？",
    answer:
      "むしろ、正しい運動で改善することが多いです。痛みの原因となる姿勢の崩れを特定し、無理のない範囲でトレーニングを行います。痛みがひどい場合は、まずストレッチや姿勢改善から始めます。",
  },
  {
    question: "仕事が忙しくて時間がありません",
    answer:
      "週1回60分から始められます。完全予約制で待ち時間なし、22時まで営業しているので仕事帰りにも通えます。短時間で効果的なメニューを組みますので、忙しい方でも無理なく継続できます。",
  },
  {
    question: "どのくらいで効果が出ますか？",
    answer:
      "個人差はありますが、多くの方が1〜2ヶ月で姿勢の変化を実感されます。肩こり・腰痛の軽減は、早い方で2週間程度から感じ始めます。3ヶ月継続すると、体の使い方が変わり、根本的な改善につながります。",
  },
  {
    question: "駐車場はありますか？",
    answer:
      "はい、島田本町店・伊福町店ともに駐車場を完備しています。車でのお越しも便利です。",
  },
];

export default function DeskworkFAQ() {
  return (
    <section className="py-20 bg-light">
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
