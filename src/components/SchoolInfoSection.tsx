import { School, BookOpen, Building2, Bus, Shield, NotebookPen, Clock, MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { school } from "@/data/school";

const badge = (text: string) => (
  <span className="inline-block rounded-full px-4 py-2 text-sm font-semibold bg-primary/10 text-primary">{text}</span>
);

const SchoolInfoSection = () => {
  return (
    <section id="about" className="py-20 bg-white">{/* Professional geometric pattern background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '60px 60px'
             }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-4">
            <School className="text-primary mr-2" size={18} />
            <span className="text-primary font-semibold">About Our School</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {school.name}
          </h2>
          <p className="text-secondary text-xl font-semibold mb-2">{school.location}</p>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">{school.tagline}</p>
        </div>

        {/* Overview + Curriculum */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Building2 className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary">About Our School</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{school.overview}</p>
            <div className="flex flex-wrap gap-2">
              {badge("Experienced Faculty")}
              {badge("Student-Centered Learning")}
              {badge("Holistic Development")}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 border border-secondary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <BookOpen className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Academic Approach</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">{school.curriculum}</p>
            <div className="flex flex-wrap gap-2">
              {badge("Activity-Based Learning")}
              {badge("Experiential Projects")}
              {badge("Strong Fundamentals")}
            </div>
          </div>
        </div>

        {/* Levels + Facilities */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all border border-primary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-medium rounded-lg flex items-center justify-center">
                <NotebookPen className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Classes Offered</h3>
            </div>
            <div className="space-y-4">
              {school.levels.map((level) => (
                <div key={level} className="bg-muted/30 rounded-lg p-4">
                  <h4 className="font-semibold text-primary mb-2">{level}</h4>
                  <p className="text-sm text-muted-foreground">
                    Comprehensive curriculum designed for this age group with focus on academic excellence and character building.
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all border border-secondary/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                <Shield className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-primary">Key Facilities</h3>
            </div>
            <div className="grid gap-3">
              {school.facilities.map((facility) => (
                <div key={facility} className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                  <span className="text-foreground text-sm">{facility}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Admissions */}
        <div id="admissions" className="bg-muted/30 rounded-2xl p-8 shadow-soft mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-primary mb-4">Admissions Process</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">{school.admissions}</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <NotebookPen size={20} />
                Required Documents
              </h4>
              <ul className="space-y-3">
                {school.documents.map((doc) => (
                  <li key={doc} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-foreground">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-soft">
              <h4 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                <Clock size={20} />
                School Timings
              </h4>
              <div className="space-y-3">
                {school.hours.map(({ day, time }) => (
                  <div key={day} className="flex items-center justify-between p-3 bg-muted/20 rounded-lg">
                    <span className="font-medium text-foreground">{day}</span>
                    <span className="text-primary font-semibold">{time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-primary text-white rounded-2xl p-8 shadow-medium">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <p className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 flex-shrink-0" /> 
                  <span>{school.address}</span>
                </p>
                {school.contact.phone && (
                  <p className="flex items-center gap-3">
                    <Phone size={20} /> 
                    <span>{school.contact.phone}</span>
                  </p>
                )}
                <p className="flex items-center gap-3">
                  <Mail size={20} /> 
                  <span>{school.contact.email || 'info@devnathschool.edu'}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <a href="#contact" className="bg-white text-primary rounded-lg px-6 py-3 font-semibold text-center hover:bg-gray-50 transition">
                Contact Us
              </a>
              {school.contact.phone && (
                <a href={`tel:${school.contact.phone}`} className="bg-secondary text-secondary-foreground rounded-lg px-6 py-3 font-semibold text-center hover:bg-secondary/90 transition">
                  Call Now
                </a>
              )}
              <a href="#admissions" className="border border-white/20 text-white rounded-lg px-6 py-3 font-semibold text-center hover:bg-white/10 transition">
                Apply for Admission
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolInfoSection;
