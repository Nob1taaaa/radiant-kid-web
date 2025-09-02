import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-soft sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">K</span>
            </div>
            <span className="text-2xl font-bold text-foreground">Kidsa</span>
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
            <Button className="bg-gradient-primary hover:opacity-90 text-white px-6 py-2 rounded-full shadow-medium transition-all duration-300">
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Program</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Pages</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Shop</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Blog</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button className="bg-gradient-primary hover:opacity-90 text-white px-6 py-2 rounded-full shadow-medium transition-all duration-300 w-fit">
                Book A Tour
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;