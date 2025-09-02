import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import LearningSection from "@/components/LearningSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import PlayschoolSection from "@/components/PlayschoolSection";
import FunFactsSection from "@/components/FunFactsSection";
import StatsSection from "@/components/StatsSection";
import AgeProgramsSection from "@/components/AgeProgramsSection";
import TeachersSection from "@/components/TeachersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import SchoolInfoSection from "@/components/SchoolInfoSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ActivitiesSection />
        <LearningSection />
        <FacilitiesSection />
        <PlayschoolSection />
        <FunFactsSection />
        <StatsSection />
        <AgeProgramsSection />
        <SchoolInfoSection />
        <TeachersSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
