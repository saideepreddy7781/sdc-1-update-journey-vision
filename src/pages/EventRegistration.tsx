import { useParams } from 'react-router-dom';
import EventRegistrationForm from '../components/EventRegistrationForm';
import { EventRegistration } from '../types';

export default function EventRegistrationPage() {
  const { eventId } = useParams<{ eventId: string }>();

  const handleSubmit = (registration: EventRegistration) => {
    // TODO: Implement registration submission
    console.log('Registration submitted:', registration);
  };

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Event Registration</h1>
        <EventRegistrationForm eventId={eventId || ''} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}