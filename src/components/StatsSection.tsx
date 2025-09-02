const stats = [
  { number: "25+", label: "Years of Experience", description: "Dedicated to early childhood education" },
  { number: "6,500+", label: "Happy Students", description: "Lives transformed through learning" },
  { number: "100+", label: "Expert Teachers", description: "Qualified and passionate educators" },
  { number: "6,561+", label: "Satisfied Parents", description: "Families who trust our programs" }
];

const StatsSection = () => {
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