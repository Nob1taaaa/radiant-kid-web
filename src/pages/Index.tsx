import Header from "@/components/Header";
import ProfessionalHeroSection from "@/components/ProfessionalHeroSection";
import AcademicsSection from "@/components/AcademicsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import TeachersSection from "@/components/TeachersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import SchoolInfoSection from "@/components/SchoolInfoSection";
import SchoolStatsSection from "@/components/SchoolStatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <ProfessionalHeroSection />
        <AcademicsSection />
        <SchoolInfoSection />
        <FacilitiesSection />
        <SchoolStatsSection />
        <TeachersSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
