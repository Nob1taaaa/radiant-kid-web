import { BookOpen, Heart, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Flexible & Learning",
    description: "Interactive learning experiences tailored to each child's unique learning style and pace.",
    color: "bg-orange-medium"
  },
  {
    icon: Heart,
    title: "Passionate Teachers",
    description: "Dedicated educators who truly care about your child's growth and development.",
    color: "bg-teal-medium"
  },
  {
    icon: Users,
    title: "Social Environment",
    description: "Building friendships and social skills in a nurturing, inclusive community.",
    color: "bg-purple-medium"
  },
  {
    icon: Trophy,
    title: "Full Day Experience",
    description: "Comprehensive programs that support working families with quality care and education.",
    color: "bg-red-medium"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`w-20 h-20 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:shadow-strong transition-shadow duration-300`}>
                <feature.icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;