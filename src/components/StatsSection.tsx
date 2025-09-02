import { school } from "@/data/school";

const StatsSection = () => {
  const totals = school.stats.totals;
  const stats = [
    { number: totals.students ?? "—", label: "Students", description: "Currently Enrolled" },
    { number: totals.teachers ?? "—", label: "Teachers", description: "Dedicated Educators" },
    { number: school.stats.classesOffered?.length || "—", label: "Classes", description: school.stats.classesOffered?.join(" · ") || "" },
    { number: school.stats.coEd ? "Co‑Ed" : "—", label: "School Type", description: school.stats.category || "" },
  ];

  return (
    <section className="py-20 bg-gradient-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-white/80 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
