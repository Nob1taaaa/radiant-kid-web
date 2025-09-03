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
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/5 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-4">
            <span className="text-primary font-semibold">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Makes Us <span className="text-primary">Special</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Joyful early learning, strong basics, and lots of smiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`${feature.bgColor} p-8 rounded-3xl shadow-soft hover:shadow-medium transition-all duration-300 hover:transform hover:-translate-y-2 animate-fade-in group relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <feature.icon size={28} className="text-white" />
              </div>
              
              {/* Content */}
              <div className="relative text-center">
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                
                {/* Stats badge */}
                <div className="inline-block bg-white/70 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold text-foreground">
                  {feature.stats}
                </div>
                
                {/* Progress bar */}
                <div className="mt-4">
                  <div className={`h-1 bg-gradient-to-r ${feature.color} rounded-full`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground text-sm">Happy Children</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
              <div className="text-3xl font-bold text-success mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Expert Teachers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-3xl font-bold text-accent mb-2">4.9</div>
              <div className="text-muted-foreground text-sm">Parent Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
