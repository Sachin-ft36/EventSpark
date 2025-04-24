
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent rounded-full opacity-10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className={`transition-all duration-700 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-600 text-sm font-medium mb-6">
              Introducing SESSI Event Management
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Create <span className="text-primary">memorable</span> events with ease
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl mb-8">
              The all-in-one platform designed for educational institutions to plan, organize, and manage events effortlessly.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="text-lg">
                <Link to="/create-event">Create Event</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/timeline">Explore Events</Link>
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div 
            className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="glass-effect p-6">
              <h3 className="text-4xl font-bold text-primary">5,000+</h3>
              <p className="text-gray-600">Events Created</p>
            </div>
            <div className="glass-effect p-6">
              <h3 className="text-4xl font-bold text-primary">98%</h3>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
            <div className="glass-effect p-6">
              <h3 className="text-4xl font-bold text-primary">500+</h3>
              <p className="text-gray-600">Institutions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
