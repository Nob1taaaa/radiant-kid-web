import { Star, Heart, Award, Mail } from "lucide-react";
import teacher1 from "@/assets/teacher-1.jpg";
import teacher2 from "@/assets/teacher-2.jpg";

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Expert <span className="text-primary">Instructors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet our passionate team of certified educators who are dedicated to nurturing 
            your child's growth and helping them reach their full potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={index}
              className="inst-card animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <button className="inst-mail" aria-label="Email">
                <Mail size={24} />
              </button>

              <div className="inst-profile">
                <img src={teacher.image} alt={teacher.name} />
              </div>

              <div className="inst-bottom">
                <div className="content">
                  <span className="name">{teacher.name}</span>
                  <span className="about-me">{teacher.title} • {teacher.experience}</span>

                  <div className="mt-4">
                    {teacher.specialties.map((specialty, idx) => (
                      <span key={idx} className="inline-block bg-white/30 text-white rounded-full px-3 py-1 text-xs mr-2 mb-2">
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-4 mt-4">
                    <div className="flex items-center gap-1 text-white/90 text-sm">
                      <Star size={16} className="text-white fill-current" />
                      <span>{teacher.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/90 text-sm">
                      <Heart size={16} className="text-white" />
                      <span>Loved by kids</span>
                    </div>
                    <div className="flex items-center gap-1 text-white/90 text-sm">
                      <Award size={16} className="text-white" />
                      <span>Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
