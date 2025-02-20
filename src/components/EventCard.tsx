import { Calendar, MapPin } from 'lucide-react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <div className="glass-card card-hover overflow-hidden">
      {event.image && (
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{event.title}</h3>
        <div className="flex items-center text-gray-300 mb-2">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-300 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-300 mb-4">{event.description}</p>
        {event.type === 'upcoming' && (
            <a
            href="https://sdc.openinapp.link/AIsummit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-center inline-block"
            >
            Register Now
            </a>
        )}
      </div>
    </div>
  );
}