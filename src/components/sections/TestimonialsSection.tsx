
import TestimonialCard from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    quote: "EventSpark has transformed how we organize our school events. The platform is intuitive and has saved us countless hours.",
    author: "Priya Sharma",
    role: "Principal, Delhi Public School",
    avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    quote: "The analytics provided by EventSpark helped us understand our engagement patterns and improve attendance by 35%.",
    author: "Rajesh Kumar",
    role: "Event Coordinator, IIT Mumbai",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote: "Our college festivals are now easier than ever to organize with EventSpark's comprehensive management tools.",
    author: "Ananya Patel",
    role: "Student Council President, St. Xavier's College",
    avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our users say
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Join hundreds of educational institutions already using EventSpark to streamline their event management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
