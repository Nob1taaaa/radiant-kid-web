import { Smile, Heart, Trophy, Sparkles } from "lucide-react";
import giraffeMascot from "@/assets/giraffe-mascot.jpg";
import { school } from "@/data/school";
import HorizontalScrollableCard from "./HorizontalScrollableCard";

const facts = [
  {
    icon: Smile,
    number: "1,200+",
    title: "Happy Moments",
    description: "Created every single day",
    color: "from-yellow-400 to-orange-400"
  },
  {
    icon: Heart,
    number: "100%",
    title: "Love & Care", 
    description: "In everything we do",
    color: "from-pink-400 to-red-400"
  },
  {
    icon: Trophy,
    number: "50+",
    title: "Awards Won",
    description: "By our little champions",
    color: "from-blue-400 to-indigo-400"
  },
  {
    icon: Sparkles,
    number: "∞",
    title: "Magic Created",
    description: "Through learning and play",
    color: "from-purple-400 to-pink-400"
  }
];

const FunFactsSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-orange-light/20 to-teal-light/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
          {/* Left - Content */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-4 sm:px-6 py-2 mb-4 sm:mb-6 text-sm sm:text-base">
              <Sparkles className="text-primary mr-2" size={16} />
              <span className="text-primary font-semibold">Fun Facts</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight px-2 lg:px-0">
              Amazing Things Happen{" "}
              <span className="text-primary">Every Day</span> At {school.name}!
            </h2>
            
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed px-4 lg:px-0">
              Joy, laughter, and daily discoveries—here are some fun facts!
            </p>

            {/* Mobile horizontal scroll for facts */}
            <HorizontalScrollableCard cardClassName="animate-fade-in">
              <div className="hidden lg:grid lg:grid-cols-2 gap-4 sm:gap-6">
                {facts.map((fact, index) => (
                  <div key={index} className="amz-card" style={{ animationDelay: `${index * 0.1}s` }}>
                    <span className="amz-glass" />
                    <div className="amz-content">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${fact.color} rounded-xl flex items-center justify-center mb-3 sm:mb-4`}>
                        <fact.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                      </div>

                      <div className="text-2xl sm:text-3xl font-bold text-white mb-2">{fact.number}</div>
                      <div className="text-base sm:text-lg font-semibold text-white mb-1">{fact.title}</div>
                      <div className="text-white/80 text-xs sm:text-sm">{fact.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </HorizontalScrollableCard>
          </div>

          {/* Right - Mobile-optimized mascot image */}
          <div className="relative animate-slide-in-right order-1 lg:order-2">
            <div className="relative">
              {/* Mobile-optimized main image */}
              <div className="aspect-square max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden shadow-strong bg-gradient-card">
                  <img 
                    src={giraffeMascot} 
                    alt="Cute giraffe mascot with graduation cap" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Mobile-optimized floating elements */}
              <div className="absolute top-4 sm:top-8 -right-2 sm:-right-4 animate-bounce-gentle">
                <div className="bg-yellow-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-medium">
                  <Smile className="text-yellow-600" size={24} />
                </div>
              </div>

              <div className="absolute bottom-8 sm:bottom-12 -left-4 sm:-left-8 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <div className="bg-pink-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-medium">
                  <Heart className="text-pink-600" size={24} />
                </div>
              </div>

              <div className="absolute top-1/3 -left-3 sm:-left-6 animate-bounce-gentle" style={{ animationDelay: '2s' }}>
                <div className="bg-blue-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-medium">
                  <Trophy className="text-blue-600" size={24} />
                </div>
              </div>

              <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-8 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
                <div className="bg-purple-100 rounded-xl sm:rounded-2xl p-2 sm:p-4 shadow-medium">
                  <Sparkles className="text-purple-600" size={24} />
                </div>
              </div>

              {/* Mobile-optimized background decorations */}
              <div className="absolute -top-6 sm:-top-10 -left-6 sm:-left-10 w-12 h-12 sm:w-20 sm:h-20 bg-orange-medium/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 sm:-bottom-8 -right-4 sm:-right-8 w-8 h-8 sm:w-16 sm:h-16 bg-teal-medium/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-6 sm:-right-12 w-6 h-6 sm:w-12 sm:h-12 bg-purple-medium/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
