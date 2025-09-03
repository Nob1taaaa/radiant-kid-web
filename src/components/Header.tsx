import { Button } from "@/components/ui/button";
import { Menu, X, GraduationCap, Phone, Mail } from "lucide-react";
import { useState } from "react";
import { school } from "@/data/school";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="flex items-center"><Mail size={14} className="mr-1" /> {school.contact.email || 'info@devnathschool.edu'}</span>
              {school.contact.phone && (
                <span className="flex items-center"><Phone size={14} className="mr-1" /> {school.contact.phone}</span>
              )}
            </div>
            <div className="hidden md:block">
              <span>UDISE: {school.stats.udise} | Est. {school.stats.yearEstablished}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-soft sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center shadow-medium">
                <GraduationCap className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary leading-tight">{school.name}</h1>
                <p className="text-xs text-muted-foreground">{school.location}</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-foreground hover:text-primary font-medium transition-colors relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-foreground hover:text-primary font-medium transition-colors relative group">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#academics" className="text-foreground hover:text-primary font-medium transition-colors relative group">
                Academics
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#admissions" className="text-foreground hover:text-primary font-medium transition-colors relative group">
                Admissions
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#facilities" className="text-foreground hover:text-primary font-medium transition-colors relative group">
                Facilities
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-foreground hover:text-primary font-medium transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-all">
                Enquire Now
              </Button>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-medium transition-all">
                Apply Online
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">About Us</a>
                <a href="#academics" className="text-foreground hover:text-primary transition-colors">Academics</a>
                <a href="#admissions" className="text-foreground hover:text-primary transition-colors">Admissions</a>
                <a href="#facilities" className="text-foreground hover:text-primary transition-colors">Facilities</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
                <div className="pt-2">
                  <Button className="bg-secondary text-secondary-foreground w-full">
                    Apply Online
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
