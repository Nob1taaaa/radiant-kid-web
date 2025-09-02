import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { school } from "@/data/school";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Stay Connected With {school.name}</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Get the latest updates about our programs, events, and educational resources 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-primary hover:opacity-90 text-white px-6 py-3 rounded-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">{school.name.charAt(0)}</span>
              </div>
              <span className="text-2xl font-bold">{school.name}</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Nurturing young minds and building bright futures through innovative 
              early childhood education programs.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Facebook size={20} />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Twitter size={20} />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Youtube size={20} />
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">About Us</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Our Programs</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Admissions</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Teachers</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Events</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Blog</a>
            </nav>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-xl font-bold mb-6">Support</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Help Center</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Parent Portal</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Calendar</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Resources</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">Contact</a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors">FAQ</a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-white/80">{school.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-white/80">{school.contact.phone}</span>
              </div>
              {school.contact.email && (
                <div className="flex items-center space-x-3">
                  <Mail size={20} className="text-primary flex-shrink-0" />
                  <span className="text-white/80">{school.contact.email}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 {school.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
