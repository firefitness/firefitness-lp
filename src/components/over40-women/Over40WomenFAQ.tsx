"use client";

import FAQAccordion from "@/components/FAQAccordion";

const faqs = [
  {
    question: "運動が苦手ですが大丈夫ですか？",
    answer:
      "はい、大丈夫です。40代から始める方の多くは運動未経験者です。お一人おひとりの体力に合わせた無理のないメニューを組みますので、ご安心ください。",
  },
  {
    question: "週1回でも効果は出ますか？",
    answer:
      "はい、出ます。週1回60分でも、正しい方法で継続すれば確実に変化を感じられます。お忙しい方も無理なく続けられます。",
  },
  {
    question: "食事制限は厳しいですか？",
    answer:
      "厳しい制限は行いません。あなたの生活スタイルに合った、続けられる食事の工夫をお伝えします。我慢のダイエットではなく、食べながら綺麗になる方法を一緒に見つけましょう。",
  },
  {
    question: "更年期の症状があるのですが...",
    answer:
      "ご安心ください。更年期の体の変化を理解した上で、プログラムを組み立てます。適度な運動は更年期症状の緩和にも効果があるとされています。",
  },
  {
    question: "子どもが小さくて時間が取れません",
    answer:
      "22時まで営業していますので、お子様が寝た後でも通えます。また、予約の変更も柔軟に対応していますので、急な予定変更にも対応可能です。",
  },
  {
    question: "体験当日に入会を決める必要がありますか？",
    answer:
      "いいえ、必要ありません。体験後、ゆっくりご検討いただいて構いません。ご自身のペースでお決めください。",
  },
];

export default function Over40WomenFAQ() {
  return (
    <section className="py-20 bg-female-soft">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-female-pink text-sm font-medium mb-2">よくあるご質問</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            ご不安な点はありませんか？
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQAccordion
              key={index}
              question={faq.question}
              answer={faq.answer}
              theme="female"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
