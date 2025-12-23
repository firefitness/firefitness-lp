import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Over40WomenHero from "@/components/over40-women/Over40WomenHero";
import Over40WomenProblem from "@/components/over40-women/Over40WomenProblem";
import Over40WomenCause from "@/components/over40-women/Over40WomenCause";
import Over40WomenSolution from "@/components/over40-women/Over40WomenSolution";
import Over40WomenResults from "@/components/over40-women/Over40WomenResults";
import Over40WomenReasons from "@/components/over40-women/Over40WomenReasons";
import Over40WomenPrice from "@/components/over40-women/Over40WomenPrice";
import Over40WomenFlow from "@/components/over40-women/Over40WomenFlow";
import Over40WomenFAQ from "@/components/over40-women/Over40WomenFAQ";
import Over40WomenOffer from "@/components/over40-women/Over40WomenOffer";
import Over40WomenCTA from "@/components/over40-women/Over40WomenCTA";
import Over40WomenAccess from "@/components/over40-women/Over40WomenAccess";

export const metadata: Metadata = {
  title: "【40代女性】体型の変化は年齢のせいじゃない？本当の原因と対策｜岡山市",
  description:
    "40代女性のための体づくり。体型の変化、疲れやすさ、肌のハリ...正しいケアで美しく乗り越えましょう。精密3軸診断で内側から輝く美しさを。岡山市北区、完全個室。",
  keywords: [
    "40代 女性 ジム 岡山",
    "40代 ダイエット 女性",
    "岡山市北区 パーソナルジム 女性",
    "40代 美容 体づくり",
    "更年期 運動 岡山",
  ],
  openGraph: {
    title: "【40代女性】体型の変化は年齢のせいじゃない？本当の原因と対策",
    description:
      "40代女性のための体づくり。精密3軸診断で内側から輝く美しさを。",
    url: "https://lp.firefitness-okayama.com/over40-women",
    siteName: "FIREFITNESS",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Over40WomenPage() {
  return (
    <>
      <Header />
      <main>
        <Over40WomenHero />
        <Over40WomenProblem />
        <Over40WomenCause />
        <Over40WomenSolution />
        <Over40WomenResults />
        <Over40WomenReasons />
        <Over40WomenPrice />
        <Over40WomenFlow />
        <Over40WomenFAQ />
        <Over40WomenOffer />
        <Over40WomenCTA />
        <Over40WomenAccess />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
