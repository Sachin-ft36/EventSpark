
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How EventSpark works
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our platform streamlines the entire event management process from creation to execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Create your event</h3>
            <p className="text-gray-600">
              Use our intuitive wizard to set up your event details, schedule, venue, and more.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">Send invitations</h3>
            <p className="text-gray-600">
              Share beautiful invitations via email or social media platforms.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Track & manage</h3>
            <p className="text-gray-600">
              Monitor RSVPs, analyze attendance, and manage all aspects of your event.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link to="/create-event">Get Started Now</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
