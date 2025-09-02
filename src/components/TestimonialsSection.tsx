import { Star, Quote } from "lucide-react";
import happyParents from "@/assets/happy-parents.jpg";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mother of Emma (Age 4)",
    image: happyParents,
    rating: 5,
    text: "Kidsa has been absolutely wonderful for our daughter Emma. The teachers are so caring and the programs are perfectly designed for her age. She's learned so much and made great friends!",
    highlight: "Amazing teachers and programs!"
  },
  {
    name: "Michael Chen", 
    role: "Father of Lucas (Age 3)",
    image: happyParents,
    rating: 5,
    text: "We couldn't be happier with our choice. The facilities are top-notch, and our son Lucas has grown so much in confidence. The daily updates help us stay connected to his learning journey.",
    highlight: "Top-notch facilities and care!"
  },
  {
    name: "Emily Rodriguez",
    role: "Mother of Sofia (Age 5)",
    image: happyParents,
    rating: 5,
    text: "The preparation for kindergarten has been excellent. Sofia feels ready and excited for the next step. The balance of learning and play at Kidsa is exactly what we were looking for.",
    highlight: "Perfect kindergarten preparation!"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-secondary/5 via-white to-primary/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-success/10 rounded-full px-6 py-2 mb-4">
            <Star className="text-success mr-2" size={20} />
            <span className="text-success font-semibold">Parent Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What <span className="text-primary">Parents</span> Say About Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our amazing families have to say 
            about their experience at Kidsa Learning Center.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:transform hover:-translate-y-2 animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-medium">
                  <Quote size={20} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="pt-6">
                {/* Rating Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current mr-1" />
                  ))}
                </div>

                {/* Highlight */}
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {testimonial.highlight}
                </div>

                {/* Testimonial Text */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-medium mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-br from-secondary/10 to-primary/10 rounded-tl-full transform translate-x-10 translate-y-10 group-hover:scale-110 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center animate-fade-in">
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-secondary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Families</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-success mb-2">98%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-accent mb-2">15</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;