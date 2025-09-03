import { Palette, BookOpen, PartyPopper, Shield, Trophy, Users } from "lucide-react";
import { school } from "@/data/school";

const items = [
  {
    icon: Palette,
    title: "Creative Learning",
    desc: "Art, music and play-based activities for joyful growth.",
    colors: "from-orange-400 to-red-400",
    emoji: "🎨",
  },
  {
    icon: BookOpen,
    title: "Strong Basics",
    desc: "Reading and numeracy foundations across classes I–VIII.",
    colors: "from-teal-400 to-blue-400",
    emoji: "📚",
  },
  {
    icon: Users,
    title: "Co‑Ed, Caring",
    desc: "Safe, inclusive and values‑driven environment.",
    colors: "from-purple-400 to-pink-400",
    emoji: "🤝",
  },
  {
    icon: Shield,
    title: "Secure Campus",
    desc: "Pucca boundary, clean water and hygiene facilities.",
    colors: "from-green-400 to-teal-400",
    emoji: "🛡️",
  },
  {
    icon: Trophy,
    title: "Everyday Wins",
    desc: "Celebrating progress for {students} students with {teachers} teachers.",
    colors: "from-amber-400 to-orange-500",
    emoji: "🏆",
  },
  {
    icon: PartyPopper,
    title: "Festivals & Events",
    desc: "Assemblies, sports and cultural days for confidence.",
    colors: "from-sky-400 to-cyan-500",
    emoji: "🎉",
  },
];

const ZigZagCardsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-light/10 via-white to-teal-light/10 relative overflow-hidden">
      {/* super cute wave top */}
      <svg className="absolute -top-12 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M0 60C120 20 240 80 360 80C480 80 600 20 720 20C840 20 960 80 1080 80C1200 80 1320 20 1440 60V0H0V60Z" fill="hsl(var(--orange-light)/0.3)"/>
        <path d="M0 80C160 40 320 100 480 100C640 100 800 40 960 40C1120 40 1280 100 1440 120V0H0V80Z" fill="hsl(var(--orange-light)/0.15)"/>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-4 shadow-soft">
            <span className="text-primary font-semibold">Highlights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Super Cute Zig‑Zag Cards</h2>
          <p className="text-muted-foreground mt-3">Designed with adorable zigzag borders and bouncy animations.</p>
        </div>

        {/* enhanced zig‑zag grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative group rounded-3xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden bg-white ${i % 2 === 1 ? 'md:-translate-y-6' : ''} hover:-translate-y-2 hover:rotate-1`}
              style={{
                clipPath: i % 3 === 0 
                  ? 'polygon(0% 0%, 95% 0%, 100% 8%, 100% 92%, 95% 100%, 5% 100%, 0% 92%, 0% 8%)'
                  : i % 3 === 1 
                  ? 'polygon(5% 0%, 100% 0%, 100% 8%, 95% 100%, 0% 100%, 0% 92%)'
                  : 'polygon(0% 0%, 100% 0%, 100% 92%, 95% 100%, 5% 100%, 0% 8%)'
              }}
            >
              {/* enhanced gradient ribbon */}
              <div className={`absolute -z-0 -right-16 -top-16 w-56 h-56 rounded-3xl blur-2xl opacity-70 bg-gradient-to-br ${it.colors} animate-pulse`}></div>

              {/* floating emoji */}
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce-gentle" style={{ animationDelay: `${i * 0.2}s` }}>
                {it.emoji}
              </div>

              {/* header chip */}
              <div className={`relative z-10 inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold shadow-medium`}> 
                <span>{it.emoji}</span>
                <span className="text-foreground/80">{school.shortName}</span>
              </div>

              {/* icon */}
              <div className={`relative z-10 w-14 h-14 mt-4 mb-3 rounded-2xl flex items-center justify-center text-white shadow-medium bg-gradient-to-br ${it.colors} group-hover:scale-110 transition-transform duration-300`}>
                <it.icon size={24} />
              </div>

              <h3 className="relative z-10 text-xl font-bold mb-2">{it.title}</h3>
              <p className="relative z-10 text-muted-foreground">
                {it.desc
                  .replace('{students}', String(school.stats.totals.students ?? ''))
                  .replace('{teachers}', String(school.stats.totals.teachers ?? ''))}
              </p>

              {/* enhanced zig‑zag bottom edge */}
              <svg className="absolute left-0 bottom-0 w-full h-12" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden>
                <path d="M0,12 L8,2 L16,12 L24,2 L32,12 L40,2 L48,12 L56,2 L64,12 L72,2 L80,12 L88,2 L96,12 L100,12 L100,12 L0,12 Z" fill="hsl(var(--orange-light)/0.4)"/>
                <path d="M0,12 L6,4 L12,12 L18,4 L24,12 L30,4 L36,12 L42,4 L48,12 L54,4 L60,12 L66,4 L72,12 L78,4 L84,12 L90,4 L96,12 L100,12 L100,12 L0,12 Z" fill="hsl(var(--teal-light)/0.3)"/>
              </svg>

              {/* cute corner decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 rounded-full bg-gradient-to-br from-yellow-300 to-orange-300 opacity-60"></div>
              <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 opacity-60"></div>
            </div>
          ))}
        </div>
      </div>

      {/* super cute wave bottom */}
      <svg className="absolute -bottom-12 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M0 60C120 100 240 40 360 40C480 40 600 100 720 100C840 100 960 40 1080 40C1200 40 1320 100 1440 60V120H0V60Z" fill="hsl(var(--teal-light)/0.3)"/>
        <path d="M0 40C160 80 320 20 480 20C640 20 800 80 960 80C1120 80 1280 20 1440 40V120H0V40Z" fill="hsl(var(--teal-light)/0.15)"/>
      </svg>
    </section>
  );
};

export default ZigZagCardsSection;