import { Metadata } from "next";
import SwitchHero from "@/components/switch/SwitchHero";
import SwitchProblem from "@/components/switch/SwitchProblem";
import SwitchComparison from "@/components/switch/SwitchComparison";
import SwitchSolution from "@/components/switch/SwitchSolution";
import SwitchTrainer from "@/components/switch/SwitchTrainer";
import SwitchVoice from "@/components/switch/SwitchVoice";
import SwitchConcern from "@/components/switch/SwitchConcern";
import SwitchFlow from "@/components/switch/SwitchFlow";
import SwitchAccess from "@/components/switch/SwitchAccess";
import SwitchCTA from "@/components/switch/SwitchCTA";

export const metadata: Metadata = {
  title:
    "「通っているのに変わらない」を解決｜岡山市のパーソナルジム FIREFITNESS",
  description:
    "ジムに通っているのに変化を感じない40代50代女性へ。担当トレーナーが変わらない一貫した指導、食事も運動もまるごとサポート。岡山市北区2店舗、完全個室、駐車場完備。まずはLINEでご相談ください。",
  keywords: [
    "岡山 パーソナルジム 女性",
    "40代 ダイエット 岡山",
    "ジム 変わらない",
    "パーソナルトレーニング 乗り換え",
    "岡山市北区 パーソナルジム",
  ],
  openGraph: {
    title:
      "「通っているのに変わらない」を解決｜岡山市のパーソナルジム FIREFITNESS",
    description:
      "ジムに通っているのに変化を感じない40代50代女性へ。担当トレーナーが変わらない一貫した指導で、あなたに合った方法を一緒に見つけます。",
    type: "website",
  },
};

export default function SwitchPage() {
  return (
    <main>
      <SwitchHero />
      <SwitchProblem />
      <SwitchComparison />
      <SwitchSolution />
      <SwitchTrainer />
      <SwitchVoice />
      <SwitchConcern />
      <SwitchFlow />
      <SwitchAccess />
      <SwitchCTA />
    </main>
  );
}
