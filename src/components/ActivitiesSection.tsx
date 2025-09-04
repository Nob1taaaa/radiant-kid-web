import { Button } from "@/components/ui/button";
import { Palette, Music, BookOpen, Gamepad2, Globe, Calculator } from "lucide-react";
import classroom from "@/assets/classroom.jpg";
import HorizontalScrollableCard from "./HorizontalScrollableCard";

const activities = [
  {
    icon: Palette,
    title: "Creative Arts",
    description: "Drawing, painting, crafts and creative expression to develop imagination and fine motor skills.",
    color: "from-red-400 to-pink-400",
    bgColor: "bg-red-50"
  },
  {
    icon: Music,
    title: "Music & Dance", 
    description: "Musical exploration, singing, and movement to enhance rhythm and self-expression.",
    color: "from-purple-400 to-indigo-400",
    bgColor: "bg-purple-50"
  },
  {
    icon: BookOpen,
    title: "Reading Corner",
    description: "Story time and early literacy.",
    color: "from-green-400 to-teal-400",
    bgColor: "bg-green-50"
  },
  {
    icon: Gamepad2,
    title: "Fun Games",
    description: "Smart games and puzzles.",
    color: "from-yellow-400 to-orange-400",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Globe,
    title: "World Exploration",
    description: "Explore the world together.",
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-50"
  },
  {
    icon: Calculator,
    title: "Early Math",
    description: "Numbers made friendly.",
    color: "from-indigo-400 to-purple-400",
    bgColor: "bg-indigo-50"
  }
];

const ActivitiesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-orange-light/10 via-white to-teal-light/10">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Mobile-optimized header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 sm:px-6 py-2 mb-4 text-sm sm:text-base">
            <span className="text-primary font-semibold">Our Activities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            Fun Learning <span className="text-primary">Activities</span> For Kids
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Learning is play. Every child finds a favorite and grows new skills.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-16 sm:mb-20">
          {/* Left - Mobile horizontal scroll for activities */}
          <HorizontalScrollableCard cardClassName="animate-fade-in" className="order-2 lg:order-1">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              {activities.map((activity, index) => (
                <div 
                  key={index}
                  className={`${activity.bgColor} p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 hover:transform hover:scale-105 group h-full`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${activity.color} rounded-xl sm:rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <activity.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">{activity.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{activity.description}</p>
                  
                  <div className="mt-3 sm:mt-4">
                    <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${activity.color} rounded-full opacity-30`}></div>
                  </div>
                </div>
              ))}
            </div>
          </HorizontalScrollableCard>

          {/* Right - Mobile-optimized feature image */}
          <div className="relative animate-slide-in-right order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-strong bg-gradient-card">
                <img 
                  src={classroom} 
                  alt="Colorful modern classroom with learning activities" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Mobile-optimized floating cards */}
              <div className="absolute -top-3 sm:-top-6 -right-3 sm:-right-6 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-medium animate-bounce-gentle">
                <div className="text-center">
                  <Palette className="text-red-400 mx-auto mb-1 sm:mb-2" size={20} />
                  <div className="text-xs sm:text-sm font-semibold text-foreground">Creative</div>
                  <div className="text-xs text-muted-foreground hidden sm:block">Learning</div>
                </div>
              </div>
              
              <div className="absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-medium animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <Music className="text-purple-400 mx-auto mb-1 sm:mb-2" size={20} />
                  <div className="text-xs sm:text-sm font-semibold text-foreground">Musical</div>
                  <div className="text-xs text-muted-foreground hidden sm:block">Expression</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ActivitiesSection;
