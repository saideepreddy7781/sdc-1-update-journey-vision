import { useState } from 'react';
import { EventRegistration } from '../types';

interface EventRegistrationFormProps {
  eventId: string;
  onSubmit: (registration: EventRegistration) => void;
}

export default function EventRegistrationForm({ eventId, onSubmit }: EventRegistrationFormProps) {
  const [formData, setFormData] = useState<EventRegistration>({
    fullName: '',
    email: '',
    institution: '',
    eventId,
    requirements: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-200">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          required
          className="input-field"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          required
          className="input-field"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="institution" className="block text-sm font-medium text-gray-200">
          Institution
        </label>
        <input
          type="text"
          id="institution"
          required
          className="input-field"
          value={formData.institution}
          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="requirements" className="block text-sm font-medium text-gray-200">
          Special Requirements (Optional)
        </label>
        <textarea
          id="requirements"
          rows={4}
          className="input-field"
          value={formData.requirements}
          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full"
      >
        Register for Event
      </button>
    </form>
  );
}