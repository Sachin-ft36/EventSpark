
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import EventCard from "@/components/ui/EventCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAllEvents, getEventsByStatus } from "@/services/eventService";
import type { EventData } from "@/services/eventService";

const Timeline = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    // Load events when component mounts
    setEvents(getAllEvents());
  }, []);

  const filteredEvents = (status: "upcoming" | "ongoing" | "completed") => {
    return events
      .filter((event) => event.status === status)
      .filter(
        (event) =>
          event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Event Timeline</h1>
        <div className="w-full md:max-w-sm">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="upcoming">
        <TabsList className="mb-4">
          <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing Events</TabsTrigger>
          <TabsTrigger value="past">Past Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents("upcoming").length > 0 ? (
              filteredEvents("upcoming").map((event) => (
                <EventCard key={event.id} {...event} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-600">No upcoming events found.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="ongoing">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents("ongoing").length > 0 ? (
              filteredEvents("ongoing").map((event) => (
                <EventCard key={event.id} {...event} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-600">No ongoing events found.</p>
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="past">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents("completed").length > 0 ? (
              filteredEvents("completed").map((event) => (
                <EventCard key={event.id} {...event} />
              ))
            ) : (
              <div className="col-span-full py-12 text-center">
                <p className="text-gray-600">No past events found.</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Timeline;
