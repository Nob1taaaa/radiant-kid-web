import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import girlStudying from "@/assets/girl-studying.jpg";

const LearningSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-light/20 to-teal-light/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative animate-fade-in">
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-full overflow-hidden shadow-strong bg-gradient-card">
                <img 
                  src={girlStudying} 
                  alt="Girl studying with confidence" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute top-8 -right-8 bg-white rounded-2xl p-6 shadow-medium animate-bounce-gentle">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right - Content */}
          <div className="animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Learn To Play, Converse{" "}
              <span className="text-primary">With Confidence</span>
            </h2>
            
            <p className="text-base text-muted-foreground mb-6 leading-relaxed max-w-prose">
              A happy mix of structure and play that builds confidence and communication.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">Smart Program</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0" />
                    <span className="text-muted-foreground">Interactive</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0" />
                    <span className="text-muted-foreground">Creative</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0" />
                    <span className="text-muted-foreground">Growth</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3 text-foreground">Daily Routine</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0" />
                    <span className="text-muted-foreground">Circle Time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0" />
                    <span className="text-muted-foreground">Skills</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-success flex-shrink-0" />
                    <span className="text-muted-foreground">Free Play</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Button className="bg-gradient-secondary hover:opacity-90 text-white px-8 py-4 rounded-full shadow-medium transition-all duration-300 flex items-center space-x-2">
              <span>Learn More</span>
              <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
