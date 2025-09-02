import { Smile, Heart, Trophy, Sparkles } from "lucide-react";
import giraffeMascot from "@/assets/giraffe-mascot.jpg";
import { school } from "@/data/school";

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
    <section className="py-20 bg-gradient-to-br from-primary/10 via-orange-light/20 to-teal-light/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Sparkles className="text-primary mr-2" size={20} />
              <span className="text-primary font-semibold">Fun Facts</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Amazing Things Happen{" "}
              <span className="text-primary">Every Day</span> At {school.name}!
            </h2>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Our school is filled with joy, laughter, and incredible moments of discovery.
              Here are some fun facts that make {school.name} such a special place for children to grow and learn.
            </p>

            {/* Facts Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {facts.map((fact, index) => (
                <div 
                  key={index}
                  className="bg-white/80 backdrop-blur rounded-2xl p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:transform hover:scale-105 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${fact.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <fact.icon size={24} className="text-white" />
                  </div>
                  
                  <div className="text-3xl font-bold text-foreground mb-2">{fact.number}</div>
                  <div className="text-lg font-semibold text-foreground mb-1">{fact.title}</div>
                  <div className="text-muted-foreground text-sm">{fact.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Mascot Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-square max-w-md mx-auto">
                <div className="w-full h-full rounded-full overflow-hidden shadow-strong bg-gradient-card">
                  <img 
                    src={giraffeMascot} 
                    alt="Cute giraffe mascot with graduation cap" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-8 -right-4 animate-bounce-gentle">
                <div className="bg-yellow-100 rounded-2xl p-4 shadow-medium">
                  <Smile className="text-yellow-600" size={32} />
                </div>
              </div>

              <div className="absolute bottom-12 -left-8 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <div className="bg-pink-100 rounded-2xl p-4 shadow-medium">
                  <Heart className="text-pink-600" size={32} />
                </div>
              </div>

              <div className="absolute top-1/3 -left-6 animate-bounce-gentle" style={{ animationDelay: '2s' }}>
                <div className="bg-blue-100 rounded-2xl p-4 shadow-medium">
                  <Trophy className="text-blue-600" size={32} />
                </div>
              </div>

              <div className="absolute bottom-4 right-8 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
                <div className="bg-purple-100 rounded-2xl p-4 shadow-medium">
                  <Sparkles className="text-purple-600" size={32} />
                </div>
              </div>

              {/* Background Decorations */}
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-medium/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-teal-medium/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-12 w-12 h-12 bg-purple-medium/20 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunFactsSection;
