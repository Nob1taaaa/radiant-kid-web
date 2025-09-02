import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

const programs = [
  {
    title: "Infant Class",
    subtitle: "(3-12 Months)",
    description: "Gentle care and early sensory development for our youngest learners in a nurturing environment.",
    color: "bg-teal-medium",
    textColor: "text-white"
  },
  {
    title: "Toddler Class", 
    subtitle: "(1-2 Years)",
    description: "Active exploration and basic skill development through guided play and interaction.",
    color: "bg-orange-medium",
    textColor: "text-white"
  },
  {
    title: "Preschool Class",
    subtitle: "(3-4 Years)",  
    description: "Structured learning activities that prepare children for formal education while maintaining fun.",
    color: "bg-blue-medium",
    textColor: "text-white"
  },
  {
    title: "Pre-K Class",
    subtitle: "(4-5 Years)",
    description: "Comprehensive kindergarten preparation with advanced social and academic skills development.",
    color: "bg-red-medium", 
    textColor: "text-white"
  }
];

const AgeProgramsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-light/10 to-teal-light/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            We Meet Kids At Their Level{" "}
            <span className="text-primary">Regardless Of Their Age</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our age-appropriate programs are designed to meet each child where they are, 
            fostering growth and development at every stage of their early years.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className={`${program.color} ${program.textColor} p-8 rounded-3xl shadow-strong hover:transform hover:scale-105 transition-all duration-300 animate-fade-in group`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users size={24} className="text-white" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <div className="text-lg font-semibold mb-4 opacity-90">{program.subtitle}</div>
                <p className="text-white/90 leading-relaxed mb-6">{program.description}</p>
                
                <Button 
                  variant="outline" 
                  className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-gray-900 rounded-full px-6 py-2 transition-all duration-300"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-full shadow-medium transition-all duration-300 flex items-center space-x-2 mx-auto">
            <span>View All Programs</span>
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AgeProgramsSection;