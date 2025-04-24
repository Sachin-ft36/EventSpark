
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to transform your event management?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Join 500+ educational institutions already using EventSpark to create successful events.
          </p>
          <Button asChild
            variant="outline"
            className="bg-white text-primary hover:bg-gray-100"
            size="lg"
          >
            <Link to="/create-event">Start Creating Events</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
