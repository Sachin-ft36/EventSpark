
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import EventCard from "@/components/ui/EventCard";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const rsvpData = [
  { month: "Jan", going: 45, maybe: 15, notGoing: 10 },
  { month: "Feb", going: 60, maybe: 20, notGoing: 15 },
  { month: "Mar", going: 75, maybe: 25, notGoing: 20 },
  { month: "Apr", going: 90, maybe: 30, notGoing: 25 },
  { month: "May", going: 120, maybe: 40, notGoing: 30 },
  { month: "Jun", going: 150, maybe: 50, notGoing: 35 },
];

const myEvents = [
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
];

const attendingEvents = [
  {
    id: "3",
    title: "National Coding Competition",
    date: "April 25, 2025 • 2:00 PM",
    location: "Virtual Event",
    imageUrl: "https://source.unsplash.com/random/600x400/?coding",
    attendees: 350,
    status: "upcoming" as const,
  },
  {
    id: "4",
    title: "Education Technology Expo",
    date: "July 10, 2025 • 12:00 AM",
    location: "Bangalore Exhibition Center",
    imageUrl: "https://source.unsplash.com/random/600x400/?technology",
    attendees: 500,
    status: "upcoming" as const,
  },
];

const remindersList = [
  {
    id: "1",
    eventName: "Annual Science Exhibition 2025",
    date: "May 15, 2025",
    time: "10:00 AM",
    type: "1 week before",
  },
  {
    id: "2",
    eventName: "Educational Leadership Summit",
    date: "June 5, 2025",
    time: "9:00 AM",
    type: "1 day before",
  },
  {
    id: "3",
    eventName: "National Coding Competition",
    date: "April 25, 2025",
    time: "2:00 PM",
    type: "2 hours before",
  },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-600">Manage your events and RSVPs</p>
        </div>
        <Button asChild className="mt-4 md:mt-0">
          <Link to="/create-event">Create New Event</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">8</div>
            <p className="text-sm text-gray-600">4 upcoming, 2 ongoing, 2 completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Attendees</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">1,250</div>
            <p className="text-sm text-gray-600">350 new this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Average Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">85%</div>
            <p className="text-sm text-gray-600">5% increase from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* RSVP Analytics */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>RSVP Analytics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={rsvpData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="going" name="Going" fill="#0052CC" />
                <Bar dataKey="maybe" name="Maybe" fill="#FFB700" />
                <Bar dataKey="notGoing" name="Not Going" fill="#FF6B6B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Events Tabs */}
      <Tabs defaultValue="my-events" className="mb-8">
        <TabsList className="mb-4">
          <TabsTrigger value="my-events">My Events</TabsTrigger>
          <TabsTrigger value="attending">Attending</TabsTrigger>
        </TabsList>
        
        <TabsContent value="my-events">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {myEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="attending">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {attendingEvents.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Reminders */}
      <Card>
        <CardHeader>
          <CardTitle>Automated Reminders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {remindersList.map((reminder) => (
              <div
                key={reminder.id}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <h4 className="font-medium">{reminder.eventName}</h4>
                  <p className="text-sm text-gray-600">
                    {reminder.date} • {reminder.time}
                  </p>
                  <p className="text-xs text-primary-600">{reminder.type}</p>
                </div>
                <div className="flex items-center">
                  <div className="mr-4">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
