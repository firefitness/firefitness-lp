import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import DeskworkHero from "@/components/deskwork/DeskworkHero";
import DeskworkProblem from "@/components/deskwork/DeskworkProblem";
import DeskworkCause from "@/components/deskwork/DeskworkCause";
import DeskworkSolution from "@/components/deskwork/DeskworkSolution";
import DeskworkResults from "@/components/deskwork/DeskworkResults";
import DeskworkReasons from "@/components/deskwork/DeskworkReasons";
import DeskworkPrice from "@/components/deskwork/DeskworkPrice";
import DeskworkFlow from "@/components/deskwork/DeskworkFlow";
import DeskworkFAQ from "@/components/deskwork/DeskworkFAQ";
import DeskworkOffer from "@/components/deskwork/DeskworkOffer";
import DeskworkCTA from "@/components/deskwork/DeskworkCTA";
import DeskworkAccess from "@/components/deskwork/DeskworkAccess";

export const metadata: Metadata = {
  title: "【座りすぎで体ボロボロ】デスクワークの不調、実は筋肉じゃなかった｜岡山市",
  description:
    "デスクワークによる肩こり・腰痛・猫背・運動不足でお悩みの方へ。精密3軸診断で原因を特定し、根本から改善。岡山市北区、島田本町・伊福町の2店舗、22時まで営業。",
  keywords: [
    "岡山 肩こり ジム",
    "岡山 腰痛 改善",
    "デスクワーク 運動不足 岡山",
    "岡山市北区 パーソナルジム",
    "姿勢改善 岡山",
  ],
  openGraph: {
    title: "【座りすぎで体ボロボロ】デスクワークの不調、実は筋肉じゃなかった",
    description:
      "デスクワークによる肩こり・腰痛を精密3軸診断で根本改善。",
    url: "https://lp.firefitness-okayama.com/desk-work",
    siteName: "FIREFITNESS",
    locale: "ja_JP",
    type: "website",
  },
};

export default function DeskWorkPage() {
  return (
    <>
      <Header />
      <main>
        <DeskworkHero />
        <DeskworkProblem />
        <DeskworkCause />
        <DeskworkSolution />
        <DeskworkResults />
        <DeskworkReasons />
        <DeskworkPrice />
        <DeskworkFlow />
        <DeskworkFAQ />
        <DeskworkOffer />
        <DeskworkCTA />
        <DeskworkAccess />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
