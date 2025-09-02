import { School, BookOpen, Building2, Bus, Shield, NotebookPen, Clock, MapPin, Phone, MessageCircle } from "lucide-react";
import { school } from "@/data/school";

const badge = (text: string) => (
  <span className="inline-block rounded-full px-3 py-1 text-xs font-semibold bg-white/70 backdrop-blur text-foreground shadow-soft">{text}</span>
);

const SchoolInfoSection = () => {
  return (
    <section id="school-info" className="py-20 bg-gradient-to-br from-orange-light/10 via-white to-teal-light/10 relative overflow-hidden">
      <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full animate-bounce-gentle"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full animate-bounce-gentle" style={{ animationDelay: "1s" }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary/10 rounded-full px-6 py-2 mb-4">
            <School className="text-primary mr-2" size={18} />
            <span className="text-primary font-semibold">Our School</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            {school.name} <span className="text-primary">— {school.location}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{school.tagline}</p>
        </div>

        {/* Overview + Curriculum */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-orange-medium" />
              <h3 className="text-2xl font-bold">Overview</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{school.overview}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {badge("Experienced Teachers")}
              {badge("Child‑First Approach")}
              {badge("Holistic Growth")}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="text-teal-medium" />
              <h3 className="text-2xl font-bold">Curriculum & Methodology</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{school.curriculum}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {badge("Activity Based")}
              {badge("Projects & Play")}
              {badge("Strong Fundamentals")}
            </div>
          </div>
        </div>

        {/* Levels + Facilities */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold mb-4">Levels of Schooling</h3>
            <ul className="space-y-3">
              {school.levels.map((l) => (
                <li key={l} className="flex items-start gap-3">
                  <NotebookPen className="mt-0.5 text-primary" size={18} />
                  <span className="text-foreground">{l}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-teal-50 rounded-3xl p-8 shadow-soft">
            <h3 className="text-2xl font-bold mb-4">School Facilities</h3>
            <ul className="grid md:grid-cols-2 gap-3">
              {school.facilities.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Shield className="mt-0.5 text-secondary" size={18} />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Admissions */}
        <div className="bg-white rounded-3xl p-8 shadow-soft mb-12">
          <h3 className="text-2xl font-bold mb-3">Admissions</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{school.admissions}</p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Documents Required</h4>
              <ul className="list-disc ml-5 text-foreground space-y-1">
                {school.documents.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-6">
              <h4 className="font-semibold mb-4">School Timings</h4>
              <ul className="space-y-2">
                {school.hours.map(({ day, time }) => (
                  <li key={day} className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{day}</span>
                    <span className="text-muted-foreground">{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-8 shadow-medium">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-2">Contact & Visit</h3>
              <p className="flex items-start gap-2 mb-2"><MapPin size={18} /> <span>{school.address}</span></p>
              <p className="flex items-center gap-2"><Phone size={18} /> <span>{school.contact.phone}</span></p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a href={`tel:${school.contact.phone}`} className="bg-white text-foreground rounded-full px-6 py-3 font-semibold shadow-strong hover:opacity-90 transition">Call Now</a>
              <a href={`https://wa.me/${school.contact.whatsapp.replace(/[^0-9]/g, "")}`} target="_blank" rel="noreferrer" className="bg-black/20 border border-white/40 text-white rounded-full px-6 py-3 font-semibold flex items-center gap-2 hover:bg-white/15 transition">
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SchoolInfoSection;
