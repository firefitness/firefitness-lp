import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Over40MenHero from "@/components/over40-men/Over40MenHero";
import Over40MenProblem from "@/components/over40-men/Over40MenProblem";
import Over40MenCause from "@/components/over40-men/Over40MenCause";
import Over40MenSolution from "@/components/over40-men/Over40MenSolution";
import Over40MenResults from "@/components/over40-men/Over40MenResults";
import Over40MenReasons from "@/components/over40-men/Over40MenReasons";
import Over40MenPrice from "@/components/over40-men/Over40MenPrice";
import Over40MenFlow from "@/components/over40-men/Over40MenFlow";
import Over40MenFAQ from "@/components/over40-men/Over40MenFAQ";
import Over40MenOffer from "@/components/over40-men/Over40MenOffer";
import Over40MenCTA from "@/components/over40-men/Over40MenCTA";
import Over40MenAccess from "@/components/over40-men/Over40MenAccess";

export const metadata: Metadata = {
  title: "【忙しい40代男性へ】週1回・60分で体が変わる科学的な理由｜岡山市",
  description:
    "40代ビジネスマンの体づくり。仕事のパフォーマンスを上げたい、健康診断の数値が気になる方へ。精密3軸診断で効率的に結果を出す。岡山市北区、22時まで営業。",
  keywords: [
    "40代 男性 ジム 岡山",
    "40代 ダイエット 男性",
    "岡山市北区 パーソナルジム",
    "40代 筋トレ 初心者",
    "ビジネスマン トレーニング 岡山",
  ],
  openGraph: {
    title: "【忙しい40代男性へ】週1回・60分で体が変わる科学的な理由",
    description:
      "40代ビジネスマンの体づくり。精密3軸診断で効率的に結果を出す。",
    url: "https://lp.firefitness-okayama.com/over40-men",
    siteName: "FIREFITNESS",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Over40MenPage() {
  return (
    <>
      <Header />
      <main>
        <Over40MenHero />
        <Over40MenProblem />
        <Over40MenCause />
        <Over40MenSolution />
        <Over40MenResults />
        <Over40MenReasons />
        <Over40MenPrice />
        <Over40MenFlow />
        <Over40MenFAQ />
        <Over40MenOffer />
        <Over40MenCTA />
        <Over40MenAccess />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
