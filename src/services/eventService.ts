
import { v4 as uuidv4 } from 'uuid';

export interface EventData {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: string;
  visibility: string;
  imageUrl: string;
  attendees: number;
  status: "upcoming" | "ongoing" | "completed";
}

// Initial data
const initialEvents = [
  {
    id: "1",
    title: "Annual Science Exhibition 2025",
    date: "May 15, 2025 • 10:00 AM",
    location: "Delhi Convention Center",
    imageUrl: "https://images.unsplash.com/photo-1566041510639-8d95a2490bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    attendees: 250,
    status: "upcoming" as const,
    description: "Annual science exhibition featuring projects from schools across the country.",
    time: "10:00 AM",
    category: "academic",
    visibility: "public",
  },
  {
    id: "2",
    title: "Educational Leadership Summit",
    date: "June 5, 2025 • 9:00 AM",
    location: "Taj Vivanta, Mumbai",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    attendees: 120,
    status: "upcoming" as const,
    description: "Gathering of educational leaders to discuss new teaching methodologies.",
    time: "9:00 AM",
    category: "seminar",
    visibility: "rsvp-only",
  },
  {
    id: "3",
    title: "National Coding Competition",
    date: "April 25, 2025 • 2:00 PM",
    location: "Virtual Event",
    imageUrl: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    attendees: 350,
    status: "upcoming" as const,
    description: "Nationwide coding competition for students of all ages.",
    time: "2:00 PM",
    category: "academic",
    visibility: "public",
  },
  {
    id: "4",
    title: "Education Technology Expo",
    date: "July 10, 2025 • 11:00 AM",
    location: "Bangalore Exhibition Center",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    attendees: 500,
    status: "upcoming" as const,
    description: "Exposition showcasing the latest in educational technology.",
    time: "11:00 AM",
    category: "other",
    visibility: "public",
  },
  {
    id: "5",
    title: "Literature Festival 2025",
    date: "Currently ongoing",
    location: "Jaipur University Campus",
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    attendees: 180,
    status: "ongoing" as const,
    description: "Annual literature festival featuring renowned authors.",
    time: "All day",
    category: "cultural",
    visibility: "public",
  },
  {
    id: "6",
    title: "Robotics Workshop Series",
    date: "Currently ongoing",
    location: "IIT Delhi",
    imageUrl: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    attendees: 75,
    status: "ongoing" as const,
    description: "Hands-on workshop series teaching robotics fundamentals.",
    time: "10:00 AM - 4:00 PM",
    category: "workshop",
    visibility: "private",
  },
  {
    id: "7",
    title: "Winter Sports Tournament 2024",
    date: "February 15, 2024",
    location: "Shimla Indoor Stadium",
    imageUrl: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    attendees: 400,
    status: "completed" as const,
    description: "Annual winter sports tournament for schools.",
    time: "9:00 AM - 6:00 PM",
    category: "sports",
    visibility: "public",
  },
  {
    id: "8",
    title: "Annual Cultural Fest 2024",
    date: "March 20, 2024",
    location: "St. Xavier's College, Mumbai",
    imageUrl: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    attendees: 1200,
    status: "completed" as const,
    description: "Biggest cultural festival of the year featuring music, dance, and art.",
    time: "All day",
    category: "cultural",
    visibility: "public",
  },
];

// Check if events already exist in localStorage
const storedEvents = localStorage.getItem('events');
let events: EventData[] = storedEvents 
  ? JSON.parse(storedEvents) 
  : initialEvents;

// Save events to localStorage
const saveEvents = () => {
  localStorage.setItem('events', JSON.stringify(events));
};

// Get all events
export const getAllEvents = (): EventData[] => {
  return events;
};

// Get events by status
export const getEventsByStatus = (status: "upcoming" | "ongoing" | "completed"): EventData[] => {
  return events.filter(event => event.status === status);
};

// Add new event
export const addEvent = (eventData: Omit<EventData, "id" | "attendees">): EventData => {
  const newEvent: EventData = {
    ...eventData,
    id: uuidv4(),
    attendees: Math.floor(Math.random() * 50) + 10, // Generate random initial attendee count
  };
  
  events = [newEvent, ...events];
  saveEvents();
  return newEvent;
};

// Format date and time for display
export const formatEventDateTime = (date: string, time: string): string => {
  if (!date) return "";
  
  if (date && time) {
    return `${date} • ${time}`;
  }
  
  return date;
};

// Initialize events
if (!storedEvents) {
  saveEvents();
}
