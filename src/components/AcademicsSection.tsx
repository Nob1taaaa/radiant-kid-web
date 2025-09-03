import { Book, Users, Award, Target, BookOpen, GraduationCap } from "lucide-react";
import { school } from "@/data/school";

const AcademicsSection = () => {
  const features = [
    {
      icon: Book,
      title: "Comprehensive Curriculum",
      description: school.curriculum,
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Our dedicated team of qualified teachers ensures quality education with personalized attention to each student.",
      color: "text-secondary"
    },
    {
      icon: Target,
      title: "Student-Centric Approach",
      description: "We focus on individual learning styles and provide an environment that encourages academic excellence and personal growth.",
      color: "text-green-medium"
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Strong emphasis on building fundamentals in language, mathematics, science, and essential life skills for holistic development.",
      color: "text-red-medium"
    }
  ];

  return (
    <section id="academics" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-4">
            <BookOpen className="text-primary mr-2" size={18} />
            <span className="text-primary font-semibold">Academic Excellence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Academic Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Providing quality education through innovative teaching methods and comprehensive curriculum design.
          </p>
        </div>

        {/* Class Levels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {school.levels.map((level, index) => (
            <div key={level} className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${index === 0 ? 'bg-primary text-white' : 'bg-secondary text-secondary-foreground'}`}>
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-2xl font-bold text-primary ml-4">{level}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {index === 0 
                  ? "Foundation years focusing on basic literacy, numeracy, and social skills development through play-based learning and interactive activities."
                  : "Advanced learning with emphasis on critical thinking, problem-solving, and preparation for higher secondary education."
                }
              </p>
            </div>
          ))}
        </div>

        {/* Academic Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-6 bg-white rounded-2xl shadow-medium flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={feature.color} size={32} />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Class Distribution Chart */}
        <div className="mt-16 bg-gradient-primary rounded-3xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Class-wise Student Distribution</h3>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {school.stats.enrollmentByClass.map((classData) => (
              <div key={classData.classLabel} className="text-center">
                <div className="bg-white/20 backdrop-blur rounded-lg p-4 mb-2">
                  <div className="text-2xl font-bold">Class {classData.classLabel}</div>
                  <div className="text-sm opacity-90">{classData.students} students</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicsSection;