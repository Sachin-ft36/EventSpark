
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import StatusBadge from "@/components/ui/StatusBadge";

const EventDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [rsvpStatus, setRsvpStatus] = useState<string | null>(null);

  // Mock event data - in a real app, you'd fetch this based on the ID
  const event = {
    id: id || "1",
    title: "Annual Science Exhibition 2025",
    description:
      "Join us for the annual science exhibition showcasing innovative projects from students across India. The event will feature guest lectures, interactive workshops, and a science quiz competition.",
    date: "May 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Delhi Convention Center",
    address: "123 Convention Ave, New Delhi, India",
    imageUrl: "https://source.unsplash.com/random/1200x400/?science",
    organizer: "Delhi Public School",
    attendees: [
      {
        id: "u1",
        name: "Priya Sharma",
        avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg",
        status: "going",
      },
      {
        id: "u2",
        name: "Rajesh Kumar",
        avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        status: "going",
      },
      {
        id: "u3",
        name: "Ananya Patel",
        avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
        status: "maybe",
      },
      {
        id: "u4",
        name: "Vikram Singh",
        avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
        status: "going",
      },
      {
        id: "u5",
        name: "Meena Desai",
        avatarUrl: "https://randomuser.me/api/portraits/women/67.jpg",
        status: "not_going",
      },
    ],
    comments: [
      {
        id: "c1",
        user: {
          name: "Priya Sharma",
          avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg",
        },
        text: "Looking forward to this event! Will there be a section for robotics projects?",
        timestamp: "2 days ago",
      },
      {
        id: "c2",
        user: {
          name: "Rajesh Kumar",
          avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        text: "Can we bring guests who are not from the school?",
        timestamp: "1 day ago",
      },
      {
        id: "c3",
        user: {
          name: "Vikram Singh",
          avatarUrl: "https://randomuser.me/api/portraits/men/45.jpg",
        },
        text: "I'll be presenting my project on renewable energy. Hope to see everyone there!",
        timestamp: "12 hours ago",
      },
    ],
    status: "upcoming" as const,
  };

  const handleRSVP = (status: string) => {
    setRsvpStatus(status);
  };

  const getRsvpButtonVariant = (buttonStatus: string) => {
    return rsvpStatus === buttonStatus ? "default" : "outline";
  };

  return (
    <div className="min-h-screen">
      {/* Event Banner */}
      <div
        className="w-full h-64 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${event.imageUrl})` }}
      >
        <div className="w-full h-full bg-black bg-opacity-40 flex items-end">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                {event.title}
              </h1>
              <StatusBadge status={event.status} />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="details">
              <TabsList className="mb-4">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="attendees">Attendees</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">About This Event</h2>
                <p className="text-gray-600 mb-6">{event.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2">Date and Time</h3>
                    <div className="flex items-center text-gray-600 mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2">Location</h3>
                    <div className="flex items-center text-gray-600 mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                      <span>{event.address}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-2">Organizer</h3>
                  <p className="text-gray-600">{event.organizer}</p>
                </div>

                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-bold text-lg mb-2">Event Schedule</h3>
                  <ul className="space-y-3">
                    <li className="flex">
                      <span className="text-primary font-medium w-24">10:00 AM</span>
                      <span>Opening Ceremony</span>
                    </li>
                    <li className="flex">
                      <span className="text-primary font-medium w-24">11:00 AM</span>
                      <span>Project Showcase Begins</span>
                    </li>
                    <li className="flex">
                      <span className="text-primary font-medium w-24">12:30 PM</span>
                      <span>Lunch Break</span>
                    </li>
                    <li className="flex">
                      <span className="text-primary font-medium w-24">1:30 PM</span>
                      <span>Guest Lecture</span>
                    </li>
                    <li className="flex">
                      <span className="text-primary font-medium w-24">3:00 PM</span>
                      <span>Science Quiz Competition</span>
                    </li>
                    <li className="flex">
                      <span className="text-primary font-medium w-24">4:00 PM</span>
                      <span>Award Ceremony & Closing</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="attendees" className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Attendees</h2>
                <p className="text-gray-600 mb-6">{event.attendees.length} people are attending this event</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.attendees.map((attendee) => (
                    <div
                      key={attendee.id}
                      className="flex items-center p-3 border border-gray-200 rounded-lg"
                    >
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={attendee.avatarUrl} />
                        <AvatarFallback>
                          {attendee.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{attendee.name}</p>
                        <p className="text-xs text-gray-500 capitalize">
                          {attendee.status === "going"
                            ? "Going"
                            : attendee.status === "maybe"
                            ? "Maybe"
                            : "Not Going"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="discussion" className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">Discussion</h2>

                <div className="space-y-6">
                  {event.comments.map((comment) => (
                    <div key={comment.id} className="flex">
                      <Avatar className="h-10 w-10 mr-4">
                        <AvatarImage src={comment.user.avatarUrl} />
                        <AvatarFallback>
                          {comment.user.name.split(" ").map((n) => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center">
                          <p className="font-medium">{comment.user.name}</p>
                          <span className="mx-2 text-gray-400">•</span>
                          <p className="text-xs text-gray-500">{comment.timestamp}</p>
                        </div>
                        <p className="mt-1 text-gray-600">{comment.text}</p>
                      </div>
                    </div>
                  ))}

                  <div className="mt-8">
                    <textarea
                      placeholder="Add a comment..."
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      rows={3}
                    />
                    <div className="mt-2 flex justify-end">
                      <Button>Post Comment</Button>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* RSVP Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">Your RSVP</h3>
              <div className="flex flex-col space-y-2">
                <Button
                  onClick={() => handleRSVP("going")}
                  variant={getRsvpButtonVariant("going")}
                  className="justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Going
                </Button>
                
                <Button
                  onClick={() => handleRSVP("maybe")}
                  variant={getRsvpButtonVariant("maybe")}
                  className="justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Maybe
                </Button>
                
                <Button
                  onClick={() => handleRSVP("not_going")}
                  variant={getRsvpButtonVariant("not_going")}
                  className="justify-start"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Not Going
                </Button>
              </div>
            </div>

            {/* Share Card */}
            <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
              <h3 className="font-bold text-lg mb-4">Share This Event</h3>
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </Button>
                
                <Button variant="outline" className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                  </svg>
                  Twitter
                </Button>
                
                <Button variant="outline" className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.89 2 1.99 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  Email
                </Button>
                
                <Button variant="outline" className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="font-bold text-lg mb-4">Location</h3>
              <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Map placeholder</p>
              </div>
              <p className="mt-2 text-gray-600 text-sm">{event.address}</p>
              <Button variant="outline" className="w-full mt-4">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
