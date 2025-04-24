
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/ui/EventCard";

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  imageUrl: string;
  attendees: number;
  status: "upcoming" | "ongoing" | "completed";
}

interface UpcomingEventsSectionProps {
  events: Event[];
}

const UpcomingEventsSection = ({ events }: UpcomingEventsSectionProps) => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Upcoming Events
          </h2>
          <Button asChild variant="outline">
            <Link to="/timeline">View All Events</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEventsSection;
