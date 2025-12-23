import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import MetaboHero from "@/components/metabo/MetaboHero";
import MetaboProblem from "@/components/metabo/MetaboProblem";
import MetaboCause from "@/components/metabo/MetaboCause";
import MetaboSolution from "@/components/metabo/MetaboSolution";
import MetaboTrainer from "@/components/metabo/MetaboTrainer";
import MetaboResults from "@/components/metabo/MetaboResults";
import MetaboReasons from "@/components/metabo/MetaboReasons";
import MetaboPrice from "@/components/metabo/MetaboPrice";
import MetaboFlow from "@/components/metabo/MetaboFlow";
import MetaboFAQ from "@/components/metabo/MetaboFAQ";
import MetaboOffer from "@/components/metabo/MetaboOffer";
import MetaboCTA from "@/components/metabo/MetaboCTA";
import MetaboAccess from "@/components/metabo/MetaboAccess";

export const metadata: Metadata = {
  title: "【健康診断で黄信号】40代男性が3ヶ月で数値改善できた方法｜岡山市",
  description:
    "健康診断でメタボ予備軍と言われた40代男性へ。精密3軸診断で、食事制限なしで内臓脂肪を落とす方法を指導。岡山市北区、島田本町・伊福町の2店舗、駐車場完備。まずは体験から。",
  keywords: [
    "岡山 メタボ ジム",
    "40代 男性 ダイエット 岡山",
    "岡山市北区 パーソナルジム",
    "健康診断 メタボ 対策",
    "岡山 パーソナルトレーニング",
  ],
  openGraph: {
    title: "【健康診断で黄信号】40代男性が3ヶ月で数値改善できた方法",
    description:
      "健康診断でメタボ予備軍と言われた40代男性へ。精密3軸診断で指導。",
    url: "https://lp.firefitness-okayama.com/metabo",
    siteName: "FIREFITNESS",
    locale: "ja_JP",
    type: "website",
  },
};

export default function MetaboPage() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <MetaboHero />

        {/* 2. Problem */}
        <MetaboProblem />

        {/* 3. Cause */}
        <MetaboCause />

        {/* 4. Solution */}
        <MetaboSolution />

        {/* 5. Trainer */}
        <MetaboTrainer />

        {/* 6. Results */}
        <MetaboResults />

        {/* 7. Reasons */}
        <MetaboReasons />

        {/* 8. Price */}
        <MetaboPrice />

        {/* 9. Flow */}
        <MetaboFlow />

        {/* 10. FAQ */}
        <MetaboFAQ />

        {/* 11. Offer */}
        <MetaboOffer />

        {/* 12. CTA */}
        <MetaboCTA />

        {/* Access */}
        <MetaboAccess />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
