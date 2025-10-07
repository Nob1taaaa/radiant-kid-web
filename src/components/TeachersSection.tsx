import { Star, Heart, Award, Mail } from "lucide-react";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";
import HorizontalScrollableCard from "./HorizontalScrollableCard";

const teachers = [
  {
    name: "Grace Miller",
    title: "Head of Education",
    experience: "8+ Years Experience", 
    image: teacher1,
    rating: 4.9,
    specialties: ["Early Childhood", "Creative Arts", "Social Development"]
  },
  {
    name: "Henry Wilson",
    title: "Senior Educator",
    experience: "6+ Years Experience",
    image: teacher2, 
    rating: 4.8,
    specialties: ["STEM Learning", "Language Arts", "Physical Development"]
  },
  {
    name: "Sarah Johnson", 
    title: "Learning Specialist",
    experience: "5+ Years Experience",
    image: teacher1, // Reusing image for demo
    rating: 4.9,
    specialties: ["Special Needs", "Behavioral Support", "Family Engagement"]
  }
];

const TeachersSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Our Expert <span className="text-primary">Instructors</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Meet our passionate team of certified educators who are dedicated to nurturing 
            your child's growth and helping them reach their full potential.
          </p>
        </div>
        
        <HorizontalScrollableCard cardClassName="animate-fade-in">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="inst-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <button className="inst-mail" aria-label="Email">
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </button>

              <div className="inst-profile">
                <img src={teacher.image} alt={teacher.name} />
              </div>

              <div className="inst-bottom">
                <div className="content">
                  <span className="name text-lg sm:text-xl">{teacher.name}</span>
                  <span className="about-me text-sm sm:text-base">{teacher.title} • {teacher.experience}</span>

                  <div className="mt-3 sm:mt-4">
                    {teacher.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block bg-white/30 text-white rounded-full px-2 sm:px-3 py-1 text-xs mr-1 sm:mr-2 mb-1 sm:mb-2">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-2 sm:gap-4 mt-3 sm:mt-4">
                    <div className="flex items-center gap-1 text-white/90 text-xs sm:text-sm">
                      <Star size={14} className="sm:w-4 sm:h-4 text-white fill-current" />
                      <span>{teacher.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/90 text-xs sm:text-sm">
                      <Heart size={14} className="sm:w-4 sm:h-4 text-white" />
                      <span>Loved</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/90 text-xs sm:text-sm">
                      <Award size={14} className="sm:w-4 sm:h-4 text-white" />
                      <span>Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </HorizontalScrollableCard>
      </div>
    </section>
  );
};

export default TeachersSection;
