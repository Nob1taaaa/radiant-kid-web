import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero-children.jpg";
import { school } from "@/data/school";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full animate-bounce-gentle"></div>
      <div className="absolute top-1/3 right-10 w-16 h-16 bg-secondary/10 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-accent/10 rounded-full animate-bounce-gentle" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div className="animate-fade-in">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground">{school.stats.totals.students ?? '—'} Students • {school.stats.totals.teachers ?? '—'} Teachers</span>
            <span className="ml-3 px-3 py-1 rounded-full bg-white/70 text-xs text-foreground shadow-soft">{school.name} • {school.location}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            We Prepare Your{" "}
            <span className="text-primary">Child</span>{" "}
            <span className="text-secondary">For Life</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our comprehensive early childhood education program nurtures creativity, 
            builds confidence, and develops essential life skills through play-based learning 
            and individualized attention.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-full shadow-medium transition-all duration-300 flex items-center space-x-2">
              <span>Start Learning</span>
              <ArrowRight size={20} />
            </Button>
            <Button variant="outline" className="border-2 border-foreground/20 hover:bg-foreground/5 px-8 py-4 rounded-full flex items-center space-x-2">
              <Play size={20} />
              <span>Take A Tour</span>
            </Button>
          </div>
          
          <div className="flex items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-medium rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-xs">1</span>
              </div>
              <span>Flexible & Learning</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-medium rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-xs">2</span>
              </div>
              <span>Passionate Teachers</span>
            </div>
          </div>
        </div>
        
        {/* Right content - Hero Image */}
        <div className="relative animate-slide-in-right">
          <div className="relative">
            <div className="w-full aspect-square rounded-full overflow-hidden shadow-strong bg-gradient-card">
              <img 
                src={heroImage} 
                alt="Happy children learning together" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-medium animate-bounce-gentle">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.9</div>
                <div className="text-xs text-muted-foreground">Rating</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-medium animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">25+</div>
                <div className="text-xs text-muted-foreground">Teachers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
