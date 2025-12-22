import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialSection from "@/components/TestimonialSection";
import AccessSection from "@/components/AccessSection";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "デスクワーカーの体の不調を改善 | FIREFITNESS 岡山",
  description:
    "デスクワークによる肩こり・腰痛・猫背・運動不足でお悩みの方へ。FIREFITNESSでは、デスクワーカー特有の体の問題を根本から改善するパーソナルトレーニングを提供しています。",
};

const problems = [
  { icon: "😣", text: "長時間のデスクワークで肩こりがひどい" },
  { icon: "😰", text: "慢性的な腰痛に悩まされている" },
  { icon: "🙁", text: "猫背が気になるけど直し方がわからない" },
  { icon: "😔", text: "運動不足を感じているが、何から始めればいいかわからない" },
  { icon: "😩", text: "ジムに通っても続かなかった経験がある" },
  { icon: "😥", text: "体重が増えて、スーツがきつくなってきた" },
];

const solutions = [
  {
    title: "姿勢改善プログラム",
    description:
      "デスクワークで固まった筋肉をほぐし、正しい姿勢を維持するための筋力を鍛えます。猫背や巻き肩を根本から改善。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    title: "完全マンツーマン指導",
    description:
      "あなたの体の状態や目標に合わせた完全オーダーメイドのトレーニングメニュー。効率的に結果を出します。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "仕事帰りに通いやすい",
    description:
      "完全予約制で待ち時間なし。22時まで営業しているので、仕事終わりでも無理なく通えます。",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "T.K様",
    age: "40代",
    occupation: "会社員（事務職）",
    content:
      "10年以上悩んでいた肩こりが、3ヶ月で劇的に改善しました。トレーナーさんが私の姿勢の問題点を的確に指摘してくれて、正しいフォームで鍛えられたのが良かったです。",
    result: "肩こり改善・姿勢改善",
  },
  {
    name: "S.M様",
    age: "30代",
    occupation: "ITエンジニア",
    content:
      "1日10時間以上PCに向かう仕事で、腰痛が限界でした。FIREFITNESSで体幹を鍛えてからは、長時間座っていても痛みが出なくなりました。",
    result: "腰痛改善・体重-5kg",
  },
  {
    name: "A.Y様",
    age: "40代",
    occupation: "管理職",
    content:
      "運動嫌いの私でも続けられたのは、マンツーマンで丁寧に教えてもらえるから。周りの目を気にせずトレーニングできるのも良いですね。",
    result: "運動習慣の定着",
  },
];

export default function DeskWorkPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          title={`デスクワークによる\n体の不調を\n根本から改善`}
          subtitle="岡山のパーソナルジム FIREFITNESS"
          description="肩こり・腰痛・猫背・運動不足...デスクワーカー特有のお悩みを、専門トレーナーがマンツーマンで解決します。"
        />
        <ProblemSection problems={problems} />
        <SolutionSection
          subtitle="デスクワーカーに選ばれる理由"
          solutions={solutions}
        />
        <TestimonialSection testimonials={testimonials} />
        <ContactSection />
        <AccessSection />
      </main>
      <Footer />
    </>
  );
}
