"use client";

import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "運動経験がほとんどありませんが大丈夫ですか？",
    answer:
      "はい、大丈夫です。40代から始める方の多くは運動未経験者です。精密3軸診断で現在の体の状態を把握し、無理のないプログラムを作成します。",
  },
  {
    question: "週1回でも効果は出ますか？",
    answer:
      "出ます。40代の体は回復に時間がかかるため、週1回でも十分効果が出ます。むしろ適切な頻度で継続することが重要です。",
  },
  {
    question: "仕事が忙しく、時間が不規則です",
    answer:
      "22時まで営業しており、予約の変更も柔軟に対応しています。多くのビジネスマンが仕事と両立しています。",
  },
  {
    question: "食事制限は厳しいですか？",
    answer:
      "厳しい制限は行いません。会食や接待があっても続けられる、現実的な食事アドバイスを提供します。",
  },
  {
    question: "膝や腰に不安がありますが大丈夫ですか？",
    answer:
      "精密3軸診断で関節への負担を最小限にしたプログラムを作成します。多くの方が痛みを感じることなくトレーニングを続けています。",
  },
  {
    question: "体験当日に入会を決める必要がありますか？",
    answer:
      "いいえ、必要ありません。体験後、じっくりご検討いただいて構いません。",
  },
];

export default function Over40MenFAQ() {
  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-male-accent text-sm font-medium mb-2">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            よくあるご質問
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              theme="dark"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
