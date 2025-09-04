import { BookOpen, Heart, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Interactive Learning",
    description: "Hands‑on fun that makes learning stick.",
    color: "from-orange-400 to-red-400",
    bgColor: "bg-orange-50",
    stats: "95% engagement rate"
  },
  {
    icon: Heart,
    title: "Caring Teachers",
    description: "Caring teachers who bring out the best.",
    color: "from-teal-400 to-blue-400", 
    bgColor: "bg-teal-50",
    stats: "1:8 teacher ratio"
  },
  {
    icon: Users,
    title: "Social Skills",
    description: "Friends, confidence, and great communication.",
    color: "from-purple-400 to-pink-400",
    bgColor: "bg-purple-50",
    stats: "100% confidence boost"
  },
  {
    icon: Trophy,
    title: "Achievement Focus",
    description: "Small wins celebrated, every day.",
    color: "from-green-400 to-teal-400",
    bgColor: "bg-green-50",
    stats: "Daily progress tracking"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Mobile-optimized background decorations */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 bg-primary/5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-12 sm:w-24 h-12 sm:h-24 bg-secondary/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Mobile-optimized header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-4 sm:px-6 py-2 mb-4 text-sm sm:text-base">
            <span className="text-primary font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            What Makes Us <span className="text-primary">Special</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Joyful early learning, strong basics, and lots of smiles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-[4px] sm:p-[6px] rounded-[16px] sm:rounded-[20px] shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 animate-fade-in group overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Mobile-optimized rotating gradient border */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 w-[100px] sm:w-[120px] h-[120%] sm:h-[140%] -translate-x-1/2 -translate-y-1/2 rounded-[16px] sm:rounded-[20px]" style={{ backgroundImage: 'linear-gradient(180deg, rgb(0,183,255), rgb(255,48,255))', animation: 'rotBGimg 3s linear infinite' }} />

              {/* Mobile-optimized inner card */}
              <div className={`${feature.bgColor} relative z-[1] rounded-[12px] sm:rounded-[16px] p-4 sm:p-6 lg:p-8`}>
                {/* Mobile-optimized icon */}
                <div className={`relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${feature.color} rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                </div>

                {/* Mobile-optimized content */}
                <div className="relative text-center">
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-3 sm:mb-4">{feature.description}</p>

                  {/* Mobile-optimized stats badge */}
                  <div className="inline-block bg-white/70 backdrop-blur rounded-full px-2 sm:px-3 py-1 text-xs font-semibold text-foreground">
                    {feature.stats}
                  </div>

                  {/* Mobile-optimized progress bar */}
                  <div className="mt-3 sm:mt-4">
                    <div className={`h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile-optimized bottom stats */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-3xl mx-auto">
            <div className="animate-fade-in bg-white/50 backdrop-blur rounded-2xl p-3 sm:p-4 shadow-soft" style={{ animationDelay: '0.5s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">15+</div>
              <div className="text-muted-foreground text-xs sm:text-sm">Years Experience</div>
            </div>
            <div className="animate-fade-in bg-white/50 backdrop-blur rounded-2xl p-3 sm:p-4 shadow-soft" style={{ animationDelay: '0.6s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">500+</div>
              <div className="text-muted-foreground text-xs sm:text-sm">Happy Children</div>
            </div>
            <div className="animate-fade-in bg-white/50 backdrop-blur rounded-2xl p-3 sm:p-4 shadow-soft" style={{ animationDelay: '0.7s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-success mb-1 sm:mb-2">50+</div>
              <div className="text-muted-foreground text-xs sm:text-sm">Expert Teachers</div>
            </div>
            <div className="animate-fade-in bg-white/50 backdrop-blur rounded-2xl p-3 sm:p-4 shadow-soft" style={{ animationDelay: '0.8s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">4.9</div>
              <div className="text-muted-foreground text-xs sm:text-sm">Parent Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
