
import HeroSection from "@/components/ui/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import UpcomingEventsSection from "@/components/sections/UpcomingEventsSection";
import CTASection from "@/components/sections/CTASection";

const upcomingEvents = [
  {
    id: "1",
    title: "Annual Science Exhibition 2025",
    date: "May 15, 2025 • 10:00 AM",
    location: "Delhi Convention Center",
    imageUrl: "https://source.unsplash.com/random/600x400/?science",
    attendees: 250,
    status: "upcoming" as const,
  },
  {
    id: "2",
    title: "Educational Leadership Summit",
    date: "June 5, 2025 • 9:00 AM",
    location: "Taj Vivanta, Mumbai",
    imageUrl: "https://source.unsplash.com/random/600x400/?conference",
    attendees: 120,
    status: "upcoming" as const,
  },
  {
    id: "3",
    title: "National Coding Competition",
    date: "April 25, 2025 • 2:00 PM",
    location: "Virtual Event",
    imageUrl: "https://source.unsplash.com/random/600x400/?coding",
    attendees: 350,
    status: "upcoming" as const,
  },
];

const Index = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <UpcomingEventsSection events={upcomingEvents} />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Index;
