import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Star, Rocket } from "lucide-react";
const heroImageBase = "https://cdn.builder.io/api/v1/image/assets%2F56e1d9932d634c60acef602bc721d4a0%2F80aeeb2426b64748a685912db2080b21?format=webp";
import { school } from "@/data/school";

const HeroSection = () => {
  return (
    <section className="min-h-[80vh] flex items-center relative overflow-hidden bg-gradient-to-b from-white to-[hsl(220_50%_97%)]">
      {/* Decorative curves and rocket */}
      <svg className="pointer-events-none absolute -bottom-8 right-0 w-[60%] md:w-[45%]" viewBox="0 0 600 180" fill="none" aria-hidden>
        <path d="M0 160 C160 120 280 40 600 100" stroke="hsl(220 40% 30% / 0.15)" strokeWidth="12" strokeLinecap="round"/>
        <path d="M0 180 C200 120 320 60 600 120" stroke="hsl(220 40% 30% / 0.15)" strokeWidth="6" strokeLinecap="round"/>
      </svg>
      <div className="absolute top-6 right-6 text-[hsl(220_40%_25%)]/70 animate-bounce-gentle hidden md:block">
        <Rocket size={40} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
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

            {/* Outside design curves hugging the circle */}
            <svg className="pointer-events-none absolute right-[-6%] top-1/2 -translate-y-1/2 w-[42%] h-[66%]" viewBox="0 0 200 300" fill="none" aria-hidden>
              <path d="M20 20 A 160 160 0 0 1 180 150" stroke="hsl(220 40% 25% / 0.25)" strokeWidth="14" strokeLinecap="round" />
              <path d="M30 40 A 140 140 0 0 1 170 150" stroke="hsl(220 40% 25% / 0.35)" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Right - Content */}
        <div className="animate-slide-in-right">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground">{school.stats.totals.students ?? '—'} Students • {school.stats.totals.teachers ?? '—'} Teachers</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 text-[hsl(220_40%_20%)]">
            Nurturing Bright Minds for a Brighter Tomorrow
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            Early education designed to inspire curiosity, creativity, and confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <Button className="bg-[hsl(220_70%_35%)] hover:bg-[hsl(220_70%_30%)] text-white px-8 py-4 rounded-full shadow-medium transition-all duration-300">
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
