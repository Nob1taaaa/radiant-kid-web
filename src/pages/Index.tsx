import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LearningSection from "@/components/LearningSection";
import PlayschoolSection from "@/components/PlayschoolSection";
import StatsSection from "@/components/StatsSection";
import AgeProgramsSection from "@/components/AgeProgramsSection";
import TeachersSection from "@/components/TeachersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LearningSection />
        <PlayschoolSection />
        <StatsSection />
        <AgeProgramsSection />
        <TeachersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
