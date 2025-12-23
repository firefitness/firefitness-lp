import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import Over40Hero from "@/components/over40/Over40Hero";
import Over40Problem from "@/components/over40/Over40Problem";
import Over40Cause from "@/components/over40/Over40Cause";
import Over40Solution from "@/components/over40/Over40Solution";
import Over40Results from "@/components/over40/Over40Results";
import Over40Reasons from "@/components/over40/Over40Reasons";
import Over40Price from "@/components/over40/Over40Price";
import Over40Flow from "@/components/over40/Over40Flow";
import Over40FAQ from "@/components/over40/Over40FAQ";
import Over40Offer from "@/components/over40/Over40Offer";
import Over40CTA from "@/components/over40/Over40CTA";
import Over40Access from "@/components/over40/Over40Access";

export const metadata: Metadata = {
  title: "【40代で気づいた】若い頃と同じやり方じゃ痩せない理由｜岡山市",
  description:
    "40代から始める体づくり。代謝低下、筋力低下、疲れやすさ...40代特有の悩みを精密3軸診断で解決。岡山市北区、島田本町・伊福町の2店舗、駐車場完備。",
  keywords: [
    "40代 ジム 岡山",
    "40代 ダイエット 岡山",
    "岡山市北区 パーソナルジム",
    "40代 筋トレ 初心者",
    "岡山 パーソナルトレーニング",
  ],
  openGraph: {
    title: "【40代で気づいた】若い頃と同じやり方じゃ痩せない理由",
    description:
      "40代から始める体づくり。精密3軸診断で40代の体に最適なプログラムを。",
    url: "https://lp.firefitness-okayama.com/over40",
    siteName: "FIREFITNESS",
    locale: "ja_JP",
    type: "website",
  },
};

export default function Over40Page() {
  return (
    <>
      <Header />
      <main>
        <Over40Hero />
        <Over40Problem />
        <Over40Cause />
        <Over40Solution />
        <Over40Results />
        <Over40Reasons />
        <Over40Price />
        <Over40Flow />
        <Over40FAQ />
        <Over40Offer />
        <Over40CTA />
        <Over40Access />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
