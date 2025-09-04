import { Button } from "@/components/ui/button";
import { Home, Trees, Utensils, Shield, Camera, Wifi } from "lucide-react";
import schoolBuilding from "@/assets/school-building.jpg";
import playground from "@/assets/playground.jpg";
import kidsArt from "@/assets/kids-art.jpg";

const facilities = [
  {
    icon: Home,
    title: "Modern Classrooms",
    description: "Bright, spacious classrooms designed specifically for early learning with child-safe furniture.",
    image: schoolBuilding
  },
  {
    icon: Trees,
    title: "Safe Playground",
    description: "Outdoor play areas with age-appropriate equipment for physical development and fun.",
    image: playground
  },
  {
    icon: Utensils,
    title: "Healthy Meals",
    description: "Nutritious meals and snacks prepared fresh daily with organic and locally sourced ingredients.",
    image: kidsArt
  }
];

const amenities = [
  { icon: Shield, title: "24/7 Security", description: "Round-the-clock security for complete peace of mind" },
  { icon: Camera, title: "Live Updates", description: "Parents can see their child's activities through our app" },
  { icon: Wifi, title: "Digital Learning", description: "Interactive smart boards and educational technology" },
  { icon: Home, title: "Cozy Nap Areas", description: "Comfortable rest spaces for younger children" }
];

const FacilitiesSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Mobile-optimized header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-4 sm:px-6 py-2 mb-4 text-sm sm:text-base">
            <span className="text-secondary font-semibold">Our Facilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2">
            World-Class <span className="text-secondary">Facilities</span> For Your Child
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Safe, happy spaces where children learn, play, and grow.
          </p>
        </div>

        {/* Mobile-optimized main facilities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-soft hover:shadow-strong transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Mobile-optimized background image */}
              <div className="aspect-[4/3] relative">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              
              {/* Mobile-optimized content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300`}>
                  <facility.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">{facility.title}</h3>
                <p className="text-white/90 text-xs sm:text-sm leading-relaxed">{facility.description}</p>
                
                {/* Mobile-optimized hover button */}
                <div className="mt-3 sm:mt-4 transform translate-y-4 sm:translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-gray-900 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default FacilitiesSection;
