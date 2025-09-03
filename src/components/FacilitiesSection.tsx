import { Button } from "@/components/ui/button";
import { Building2, Library, Users, Shield, Wifi, Bus, BookOpen, FlaskConical, MapPin } from "lucide-react";
import { school } from "@/data/school";
import schoolBuilding from "@/assets/school-building.jpg";
import classroom from "@/assets/classroom.jpg";
import playground from "@/assets/playground.jpg";

const facilities = [
  {
    icon: Building2,
    title: "Smart Classrooms",
    description: "Well-ventilated, modern classrooms equipped with educational technology and child-friendly furniture.",
    image: schoolBuilding,
    available: true
  },
  {
    icon: Library,
    title: "Library & Reading Corner",
    description: "Extensive collection of books and dedicated reading spaces to foster love for learning.",
    image: classroom,
    available: true
  },
  {
    icon: MapPin,
    title: "Safe Play Area",
    description: "Secure outdoor playground with age-appropriate equipment for physical development.",
    image: playground,
    available: true
  }
];

const additionalFacilities = [
  { icon: Shield, title: "CCTV Security", description: "Complete campus surveillance with secure entry points", available: true },
  { icon: Bus, title: "Transport Facility", description: "Safe transportation service available on demand", available: true },
  { icon: FlaskConical, title: "Science Resources", description: "Basic science equipment and learning materials", available: true },
  { icon: Users, title: "Computer Lab", description: "IT infrastructure for digital learning", available: false },
  { icon: Wifi, title: "Internet Connectivity", description: "High-speed internet for educational purposes", available: false },
  { icon: BookOpen, title: "Book Bank", description: "Free books and educational materials for students", available: true }
];

const FacilitiesSection = () => {
  return (
    <section id="facilities" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-4">
            <Building2 className="text-primary mr-2" size={18} />
            <span className="text-primary font-semibold">School Facilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Modern Infrastructure for Quality Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our school provides state-of-the-art facilities designed to support comprehensive learning and development.
          </p>
        </div>

        {/* Main Facilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 bg-white"
            >
              {/* Background Image */}
              <div className="aspect-[4/3] relative">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
                
                {/* Available Badge */}
                {facility.available && (
                  <div className="absolute top-4 right-4 bg-green-medium text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Available
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <facility.icon size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{facility.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Facilities Grid */}
        <div className="bg-white rounded-3xl p-8 shadow-soft">
          <h3 className="text-2xl font-bold text-primary mb-8 text-center">Additional Facilities & Resources</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFacilities.map((facility, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-muted/30 transition-colors">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${facility.available ? 'bg-green-medium text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <facility.icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-primary">{facility.title}</h4>
                    <span className={`w-2 h-2 rounded-full ${facility.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  </div>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* School Facilities Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">{school.facilities.length}</div>
              <div className="text-sm text-muted-foreground">Core Facilities</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="text-3xl font-bold text-secondary mb-2">{school.stats.totals.students}</div>
              <div className="text-sm text-muted-foreground">Students Enrolled</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="text-3xl font-bold text-green-medium mb-2">{school.stats.classesOffered.length}</div>
              <div className="text-sm text-muted-foreground">Classes Available</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <div className="text-3xl font-bold text-primary mb-2">{school.stats.yearEstablished}</div>
              <div className="text-sm text-muted-foreground">Year Established</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
