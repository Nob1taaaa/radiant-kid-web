import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star, Rocket } from "lucide-react";
const heroImageBase = "https://cdn.builder.io/api/v1/image/assets%2F56e1d9932d634c60acef602bc721d4a0%2F80aeeb2426b64748a685912db2080b21?format=webp";
import { school } from "@/data/school";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center relative overflow-hidden bg-gradient-hero">
      {/* Super cute decorative curves and elements */}
      <svg className="pointer-events-none absolute -bottom-8 right-0 w-[60%] md:w-[45%] text-foreground/15" viewBox="0 0 600 180" fill="none" aria-hidden>
        <path d="M0 160 C160 100 280 20 400 60 C500 90 550 40 600 80" stroke="currentColor" strokeWidth="12" strokeLinecap="round"/>
        <path d="M0 180 C200 100 320 40 450 80 C530 110 570 60 600 100" stroke="currentColor" strokeWidth="6" strokeLinecap="round"/>
        <path d="M100 120 C200 80 300 160 400 120 C450 100 500 140 550 120" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.6"/>
      </svg>
      
      {/* Floating cute elements */}
      <div className="absolute top-6 right-6 text-secondary/80 animate-bounce-gentle hidden md:block">
        <Rocket size={40} />
      </div>
      <div className="absolute top-20 left-12 text-orange-medium/60 animate-bounce-gentle hidden lg:block" style={{animationDelay: '0.5s'}}>
        ✨
      </div>
      <div className="absolute bottom-20 left-8 text-teal-medium/60 animate-bounce-gentle hidden lg:block" style={{animationDelay: '1s'}}>
        🎈
      </div>
      <div className="absolute top-32 right-20 text-purple-medium/60 animate-bounce-gentle hidden lg:block" style={{animationDelay: '1.5s'}}>
        🌟
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
        {/* Left - Image circle */}
        <div className="order-1 lg:order-none animate-fade-in">
          <div className="relative w-full max-w-xl mx-auto">
            {/* Main circle image */}
            <div className="relative aspect-square rounded-full overflow-hidden shadow-strong bg-white">
              <img
                src={`${heroImageBase}&width=1200`}
                srcSet={`${heroImageBase}&width=800 800w, ${heroImageBase}&width=1200 1200w, ${heroImageBase}&width=1800 1800w, ${heroImageBase}&width=2400 2400w`}
                sizes="(max-width: 1024px) 90vw, 40vw"
                alt="Happy children going to school"
                className="w-full h-full object-cover"
                loading="eager" decoding="async"
              />
            </div>

            {/* Super cute curves hugging the circle */}
            <svg className="pointer-events-none absolute inset-0 overflow-visible" viewBox="0 0 100 100" fill="none" aria-hidden>
              <g transform="translate(50,50)">
                {/* Animated wiggling curves */}
                <circle r="52" fill="none" className="text-orange-medium/40" stroke="currentColor" strokeWidth="6" strokeDasharray="60 80 40 120" strokeLinecap="round" transform="rotate(-40)">
                  <animateTransform attributeName="transform" type="rotate" values="-40;-20;-40" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle r="57" fill="none" className="text-teal-medium/60" stroke="currentColor" strokeWidth="4" strokeDasharray="80 60 100 60" strokeLinecap="round" transform="rotate(20)">
                  <animateTransform attributeName="transform" type="rotate" values="20;40;20" dur="5s" repeatCount="indefinite"/>
                </circle>
                <circle r="62" fill="none" className="text-purple-medium/30" stroke="currentColor" strokeWidth="3" strokeDasharray="40 80 60 100" strokeLinecap="round" transform="rotate(-60)">
                  <animateTransform attributeName="transform" type="rotate" values="-60;-80;-60" dur="6s" repeatCount="indefinite"/>
                </circle>
                {/* Cute little dots */}
                <circle r="2" cx="45" cy="0" fill="hsl(var(--orange-medium))" opacity="0.8">
                  <animateTransform attributeName="transform" type="rotate" values="0;360" dur="8s" repeatCount="indefinite"/>
                </circle>
                <circle r="1.5" cx="-50" cy="10" fill="hsl(var(--teal-medium))" opacity="0.6">
                  <animateTransform attributeName="transform" type="rotate" values="0;-360" dur="10s" repeatCount="indefinite"/>
                </circle>
              </g>
            </svg>
          </div>
        </div>

        {/* Right - Content */}
        <div className="animate-slide-in-right lg:pl-8">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400" fill="currentColor" stroke="currentColor" />
              ))}
            </div>
            <span className="text-muted-foreground">{school.stats.totals.students ?? '—'} Students • {school.stats.totals.teachers ?? '—'} Teachers</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3 text-foreground">
            Nurturing Bright Minds for a Brighter Tomorrow
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-xl">
            Early education designed to inspire curiosity, creativity, and confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-full shadow-medium transition-all duration-300">
              Admission Now
            </Button>
            <Button variant="outline" className="border-2 border-foreground/20 hover:bg-foreground/5 px-8 py-4 rounded-full flex items-center gap-2">
              <Play size={18} /> Watch Tour
            </Button>
          </div>

          <div className="inline-flex items-center bg-white/70 backdrop-blur rounded-full px-4 py-2 shadow-soft text-sm">
            <span className="font-semibold text-foreground">{school.name}</span>
            <span className="mx-2">•</span>
            <span className="text-muted-foreground">{school.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
