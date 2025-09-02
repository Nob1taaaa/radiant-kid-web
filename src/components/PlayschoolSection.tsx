import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Clock, BookOpen, Heart } from "lucide-react";
import graduateChild from "@/assets/graduate-child.jpg";

const PlayschoolSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center lg:text-left">
              The Best Playschool{" "}
              <span className="text-primary">For Your Kid</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Better Training And Programs</h4>
                <p className="text-muted-foreground text-sm">Comprehensive curriculum designed by education experts</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Advanced Research Centers</h4>
                <p className="text-muted-foreground text-sm">Latest educational research and methodologies</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Highly Qualified ACT</h4>
                <p className="text-muted-foreground text-sm">Certified teachers with specialized training</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-medium rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-lg mb-2">Kid's Care Integrated Program</h4>
                <p className="text-muted-foreground text-sm">Holistic approach to child development</p>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <Button className="bg-gradient-primary hover:opacity-90 text-white px-8 py-4 rounded-full shadow-medium transition-all duration-300 flex items-center space-x-2 mx-auto lg:mx-0 w-fit">
                <span>Discover More</span>
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
          
          {/* Right - Image */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              <div className="w-full aspect-[4/5] max-w-md mx-auto rounded-3xl overflow-hidden shadow-strong bg-gradient-card">
                <img 
                  src={graduateChild} 
                  alt="Child celebrating graduation achievement" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-orange-medium/20 rounded-full animate-bounce-gentle"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-teal-medium/20 rounded-full animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayschoolSection;