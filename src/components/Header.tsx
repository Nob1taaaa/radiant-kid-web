import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { school } from "@/data/school";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Mobile-optimized Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-medium">
              <span className="text-white font-bold text-lg sm:text-xl">{school.name.charAt(0)}</span>
            </div>
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-foreground truncate max-w-[150px] sm:max-w-none">{school.name}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Program</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Pages</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Shop</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-gradient-primary hover:opacity-90 text-white px-4 lg:px-6 py-2 rounded-full shadow-medium transition-all duration-300 text-sm lg:text-base">
              Book A Tour
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Super cute mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t bg-gradient-to-br from-white to-muted/20 rounded-b-2xl shadow-medium animate-fade-in">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5 active:bg-primary/10">Home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5 active:bg-primary/10">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5 active:bg-primary/10">Program</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5 active:bg-primary/10">Pages</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5 active:bg-primary/10">Shop</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5 active:bg-primary/10">Blog</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2 px-3 rounded-lg hover:bg-primary/5 active:bg-primary/10">Contact</a>
              <Button className="bg-gradient-primary hover:opacity-90 text-white px-6 py-3 rounded-full shadow-medium transition-all duration-300 w-full mt-2 font-medium">
                Book A Tour ✨
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
