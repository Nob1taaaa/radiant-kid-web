import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star, Rocket } from "lucide-react";
const heroImageBase = "https://cdn.builder.io/api/v1/image/assets%2F56e1d9932d634c60acef602bc721d4a0%2F80aeeb2426b64748a685912db2080b21?format=webp";
import { school } from "@/data/school";

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] sm:min-h-[80vh] flex items-center relative overflow-hidden bg-gradient-hero">
      {/* Mobile-optimized decorative curves */}
      <svg className="pointer-events-none absolute -bottom-4 sm:-bottom-8 right-0 w-[70%] sm:w-[60%] md:w-[45%] text-foreground/10" viewBox="0 0 600 180" fill="none" aria-hidden>
        <path d="M0 160 C160 100 280 20 400 60 C500 90 550 40 600 80" stroke="currentColor" strokeWidth="8" strokeLinecap="round"/>
        <path d="M0 180 C200 100 320 40 450 80 C530 110 570 60 600 100" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
        <path d="M100 120 C200 80 300 160 400 120 C450 100 500 140 550 120" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
      </svg>
      
      {/* Mobile-friendly floating elements */}
      <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-secondary/80 animate-bounce-gentle">
        <Rocket size={28} className="sm:w-10 sm:h-10" />
      </div>
      <div className="absolute top-16 sm:top-20 left-4 sm:left-12 text-orange-medium/60 animate-bounce-gentle text-2xl sm:text-3xl" style={{animationDelay: '0.5s'}}>
        ✨
      </div>
      <div className="absolute bottom-16 sm:bottom-20 left-4 sm:left-8 text-teal-medium/60 animate-bounce-gentle text-2xl sm:text-3xl" style={{animationDelay: '1s'}}>
        🎈
      </div>
      <div className="absolute top-24 sm:top-32 right-8 sm:right-20 text-purple-medium/60 animate-bounce-gentle text-2xl sm:text-3xl" style={{animationDelay: '1.5s'}}>
        🌟
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center w-full py-6 sm:py-0">
        {/* Left - Mobile-optimized image circle */}
        <div className="order-1 lg:order-none animate-fade-in">
          <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-xl mx-auto">
            {/* Main circle image with mobile-first design */}
            <div className="relative aspect-square rounded-full overflow-hidden shadow-strong bg-white ring-4 ring-white/20 ring-offset-4 ring-offset-transparent">
              <img
                src={`${heroImageBase}&width=1200`}
                srcSet={`${heroImageBase}&width=400 400w, ${heroImageBase}&width=800 800w, ${heroImageBase}&width=1200 1200w`}
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 384px, 576px"
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

        {/* Right - Mobile-optimized content */}
        <div className="animate-slide-in-right lg:pl-8 text-center lg:text-left px-2 sm:px-0">
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
            <div className="flex space-x-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="sm:w-5 sm:h-5 text-yellow-400" fill="currentColor" stroke="currentColor" />
              ))}
            </div>
            <span className="text-muted-foreground text-xs sm:text-sm">{school.stats.totals.students ?? '—'} Students • {school.stats.totals.teachers ?? '—'} Teachers</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3 text-foreground px-2 sm:px-0">
            Nurturing Bright Minds for a Brighter Tomorrow
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 max-w-xl mx-auto lg:mx-0 px-2 sm:px-0">
            Early education designed to inspire curiosity, creativity, and confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 px-2 sm:px-0">
            <Button className="bg-gradient-primary hover:opacity-90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full shadow-medium transition-all duration-300 text-sm sm:text-base font-medium">
              Admission Now
            </Button>
            <Button variant="outline" className="border-2 border-foreground/20 hover:bg-foreground/5 px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center gap-2 text-sm sm:text-base">
              <Play size={16} className="sm:w-[18px] sm:h-[18px]" /> Watch Tour
            </Button>
          </div>

          <div className="inline-flex items-center bg-white/80 backdrop-blur rounded-full px-3 sm:px-4 py-2 shadow-soft text-xs sm:text-sm mx-2 sm:mx-0">
            <span className="font-semibold text-foreground">{school.name}</span>
            <span className="mx-1 sm:mx-2">•</span>
            <span className="text-muted-foreground">{school.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
