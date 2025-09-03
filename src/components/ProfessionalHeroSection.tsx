import { Button } from "@/components/ui/button";
import { GraduationCap, Users, BookOpen, Award, ChevronRight, Phone } from "lucide-react";
import { school } from "@/data/school";
import heroImage from "@/assets/school-building.jpg";
import childrenImage from "@/assets/children-learning.jpg";

const ProfessionalHeroSection = () => {
  return (
    <section className="relative bg-gradient-hero min-h-[80vh] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full bg-repeat" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zM30 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")` 
             }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/90 backdrop-blur rounded-full px-4 py-2 mb-6 shadow-soft">
              <Award className="text-secondary mr-2" size={16} />
              <span className="text-sm font-semibold text-primary">Established {school.stats.yearEstablished} • UDISE: {school.stats.udise}</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              {school.name}
            </h1>
            
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              {school.tagline}
            </p>

            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              {school.overview}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-soft text-center">
                <Users className="mx-auto text-primary mb-2" size={24} />
                <div className="text-2xl font-bold text-primary">{school.stats.totals.students}</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-soft text-center">
                <GraduationCap className="mx-auto text-secondary mb-2" size={24} />
                <div className="text-2xl font-bold text-primary">{school.stats.totals.teachers}</div>
                <div className="text-sm text-muted-foreground">Teachers</div>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-4 shadow-soft text-center">
                <BookOpen className="mx-auto text-green-medium mb-2" size={24} />
                <div className="text-2xl font-bold text-primary">{school.stats.classesOffered.length}</div>
                <div className="text-sm text-muted-foreground">Classes</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-medium">
                <GraduationCap className="mr-2" size={20} />
                Apply for Admission
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Phone className="mr-2" size={20} />
                Schedule Visit
              </Button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-strong">
              <img 
                src={heroImage} 
                alt="Devnath Public School Building" 
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-strong max-w-xs">
              <div className="flex items-center gap-4">
                <img 
                  src={childrenImage} 
                  alt="Happy Students" 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-primary text-lg">Excellence in Education</h3>
                  <p className="text-sm text-muted-foreground">Nurturing young minds since {school.stats.yearEstablished}</p>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full shadow-medium">
              <span className="font-semibold text-sm">{school.location}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalHeroSection;