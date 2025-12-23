import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MainHero from "@/components/main/MainHero";
import MainWorries from "@/components/main/MainWorries";
import MainBeforeAfter from "@/components/main/MainBeforeAfter";
import MainFeatures from "@/components/main/MainFeatures";
import MainFlow from "@/components/main/MainFlow";
import MainPricing from "@/components/main/MainPricing";
import MainTrainers from "@/components/main/MainTrainers";
import MainLocations from "@/components/main/MainLocations";
import MainTestimonials from "@/components/main/MainTestimonials";
import MainFAQ from "@/components/main/MainFAQ";
import MainBookingWidget from "@/components/main/MainBookingWidget";
import MainCTA from "@/components/main/MainCTA";
import MainFloatingCTA from "@/components/main/MainFloatingCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <MainHero />
        <MainWorries />
        <MainBeforeAfter />
        <MainFeatures />
        <MainFlow />
        <MainPricing />
        <MainTrainers />
        <MainLocations />
        <MainTestimonials />
        <MainFAQ />
        <MainBookingWidget />
        <MainCTA />
      </main>
      <Footer />
      <MainFloatingCTA />
    </>
  );
}
