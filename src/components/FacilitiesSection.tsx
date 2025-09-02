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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-secondary/10 rounded-full px-6 py-2 mb-4">
            <span className="text-secondary font-semibold">Our Facilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            World-Class <span className="text-secondary">Facilities</span> For Your Child
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Safe, happy spaces where children learn, play, and grow.
          </p>
        </div>

        {/* Main Facilities Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-strong transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Image */}
              <div className="aspect-[4/3] relative">
                <img 
                  src={facility.image} 
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              
              {/* Content Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <div className={`w-12 h-12 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300`}>
                  <facility.icon size={24} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{facility.title}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{facility.description}</p>
                
                {/* Hover Button */}
                <div className="mt-4 transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Button variant="outline" className="bg-white/20 border-white/30 text-white hover:bg-white hover:text-gray-900 rounded-full px-4 py-2">
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12">Additional <span className="text-primary">Amenities</span></h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-medium hover:scale-110 transition-transform duration-300">
                  <amenity.icon size={24} className="text-white" />
                </div>
                <h4 className="text-lg font-bold mb-2 text-foreground">{amenity.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Button className="bg-gradient-secondary hover:opacity-90 text-white px-8 py-4 rounded-full shadow-medium transition-all duration-300 mr-4">
            Schedule a Tour
          </Button>
          <Button variant="outline" className="border-2 border-secondary/20 hover:bg-secondary/5 px-8 py-4 rounded-full">
            View Virtual Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
