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
      {/* wave top */}
      <svg className="absolute -top-8 left-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M0 48C160 16 320 64 480 64C640 64 800 16 960 16C1120 16 1280 64 1440 80V0H0V48Z" fill="hsl(var(--orange-light)/0.25)"/>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-4 shadow-soft">
            <span className="text-primary font-semibold">Highlights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">Cute Zig‑Zag Cards</h2>
          <p className="text-muted-foreground mt-3">Designed like your reference—colorful, bouncy and kid‑friendly.</p>
        </div>

        {/* zig‑zag grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative group rounded-3xl p-6 shadow-soft hover:shadow-strong transition-all duration-300 overflow-hidden bg-white ${i % 2 === 1 ? 'md:-translate-y-6' : ''}`}
            >
              {/* gradient ribbon */}
              <div className={`absolute -z-0 -right-16 -top-16 w-56 h-56 rounded-3xl blur-2xl opacity-70 bg-gradient-to-br ${it.colors}`}></div>

              {/* header chip */}
              <div className={`relative z-10 inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-3 py-1 text-xs font-semibold shadow-medium`}> 
                <span>{it.emoji}</span>
                <span className="text-foreground/80">{school.shortName}</span>
              </div>

              {/* icon */}
              <div className={`relative z-10 w-14 h-14 mt-4 mb-3 rounded-2xl flex items-center justify-center text-white shadow-medium bg-gradient-to-br ${it.colors}`}>
                <it.icon size={24} />
              </div>

              <h3 className="relative z-10 text-xl font-bold mb-2">{it.title}</h3>
              <p className="relative z-10 text-muted-foreground">
                {it.desc
                  .replace('{students}', String(school.stats.totals.students ?? ''))
                  .replace('{teachers}', String(school.stats.totals.teachers ?? ''))}
              </p>

              {/* zig‑zag edge using svg clip */}
              <svg className="absolute left-0 bottom-0 w-full h-10" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden>
                <path d="M0,10 L10,0 L20,10 L30,0 L40,10 L50,0 L60,10 L70,0 L80,10 L90,0 L100,10 L100,10 L0,10 Z" fill="hsl(var(--orange-light)/0.25)"/>
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* wave bottom */}
      <svg className="absolute -bottom-8 left-0 w-full" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <path d="M0 0C160 32 320 16 480 16C640 16 800 64 960 64C1120 64 1280 16 1440 0V80H0V0Z" fill="hsl(var(--teal-light)/0.25)"/>
      </svg>
    </section>
  );
};

export default ZigZagCardsSection;
