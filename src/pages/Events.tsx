import { useState } from 'react';
import EventCard from '../components/EventCard';
import { Event } from '../types';

export default function Events() {
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'Hackathon 2024',
      date: '24-25 March 2024',
      time: '10:00 AM - 6:00 PM',
      location: 'IIT Mumbai',
      description: '48-hour coding challenge with exciting prizes and learning opportunities.',
      type: 'upcoming',
      status: 'open',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800'
    },
    {
      id: '2',
      title: 'AI Workshop Series',
      date: '15 April 2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Virtual Event',
      description: 'Deep dive into artificial intelligence and machine learning fundamentals.',
      type: 'upcoming',
      status: 'open',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800'
    },
    {
      id: '3',
      title: 'Tech Summit 2024',
      date: '1 May 2024',
      time: '11:00 AM - 4:00 PM',
      location: 'Delhi NCR',
      description: 'Annual technology conference featuring industry leaders and innovators.',
      type: 'upcoming',
      status: 'open',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800'
    }
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h1>
        <p className="text-xl text-gray-600">Join our latest technical events and workshops</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}