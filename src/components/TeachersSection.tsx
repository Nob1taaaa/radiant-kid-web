import { Star, Heart, Award } from "lucide-react";
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
              className="bg-gradient-card rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto shadow-medium">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-success rounded-full px-4 py-2 shadow-medium">
                    <div className="flex items-center space-x-1">
                      <Star size={16} className="text-white fill-current" />
                      <span className="text-white font-semibold text-sm">{teacher.rating}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">{teacher.name}</h3>
                <div className="text-primary font-semibold mb-1">{teacher.title}</div>
                <div className="text-muted-foreground mb-4">{teacher.experience}</div>
                
                <div className="space-y-2 mb-6">
                  {teacher.specialties.map((specialty, idx) => (
                    <div key={idx} className="inline-block bg-muted rounded-full px-3 py-1 text-sm text-muted-foreground mx-1">
                      {specialty}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Heart size={16} className="text-red-500" />
                    <span className="text-sm text-muted-foreground">Loved by kids</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Award size={16} className="text-yellow-500" />
                    <span className="text-sm text-muted-foreground">Certified</span>
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