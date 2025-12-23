"use client";

import { useState } from "react";

const faqs = [
  {
    question: "トレーニング経験がないのですが大丈夫でしょうか？",
    answer:
      "もちろん大丈夫です。むしろ当ジムのお客様の約70%がトレーニング未経験からのスタートです。専門のトレーナーが一人ひとりのペースに合わせて丁寧に指導しますので、安心してお通いいただけます。",
  },
  {
    question: "どのくらいの頻度で通えば効果が出ますか？",
    answer:
      "週1〜2回のトレーニングと日常生活での指導内容の実践で効果を実感いただけます。目標や現在の状態によって最適な頻度は異なりますので、カウンセリング時に詳しくご提案させていただきます。",
  },
  {
    question: "持ち物はありますか？",
    answer:
      "動きやすい服装とシューズ、タオルをお持ちください。ウェアやシューズのレンタルも行っておりますので、手ぶらでお越しいただくことも可能です。",
  },
  {
    question: "どのくらいで効果が出るものでしょうか？",
    answer:
      "個人差はありますが、多くの方が1ヶ月程度で体調の改善や姿勢の変化を実感され、2〜3ヶ月で体型の変化を感じられます。継続的なトレーニングと食事管理を組み合わせることで、より効果的に結果を出すことができます。",
  },
  {
    question: "入会金や解約金はありますか？",
    answer:
      "当店は入会金は無料です。解約金はありませんが、回数券途中での解約の場合、日割り返金は行っておりません。また、契約期間はありませんので、いつでも解約可能です。",
  },
];

export default function MainFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-secondary text-white">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          よくある質問
        </h2>
        <p className="text-center text-gray-300 mb-12">
          お客様からよくいただくご質問にお答えします。
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl overflow-hidden shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left hover:bg-white/10 transition-colors"
              >
                <span className="font-semibold pr-4">{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-5 pt-0 text-gray-300">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
