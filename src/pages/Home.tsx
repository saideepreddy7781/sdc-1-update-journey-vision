import { ArrowRight, Users, Calendar, Building2, Target, Zap, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import EventCard from '../components/EventCard';
import { Event, ContactForm, EventRegistration } from '../types';
import EventRegistrationForm from '../components/EventRegistrationForm';

export default function Home() {
  
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'AI Summit',
      date: '1 March 2024',
      time: '9:00 AM - 4:00 PM',
      location: 'Microsoft Office, Hyderabad',
      description: 'Join us for an immersive AI Summit featuring expert talks, hands-on sessions, and deep dives into artificial intelligence technologies.',
      type: 'upcoming', 
      status: 'open',
      image: 'https://media.licdn.com/dms/image/v2/D5622AQHG1XgGZsiWMQ/feedshare-shrink_800/B56ZUd3HySGsAg-/0/1739962750600?e=1743033600&v=beta&t=PBIVN50DPqL2d9L3N2y6rvY9SrLX1vp6rdrFjhGPV_k',
    }
  ]);


  const [contactForm, setContactForm] = useState<ContactForm>({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [hostEventForm, setHostEventForm] = useState({
    institutionName: '',
    contactPerson: '',
    email: '',
    eventType: '',
    expectedDate: '',
    details: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', contactForm);
  };

  const handleHostEventSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Host event form submitted:', hostEventForm);
  };

  const handleEventRegistration = (registration: EventRegistration) => {
    console.log('Registration submitted:', registration);
  };

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Student Development Community</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">Empowering students through technical innovation and collaboration</p>
            <div className="space-x-4">
                <a href="https://www.instagram.com/sdcindia01/" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Join Community
                </a>
              <a href="#host-event" className="btn-secondary">
                Host Event
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center">
            <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
            <p className="text-gray-300">Events Successfully Conducted</p>
          </div>
          <div className="glass-card p-8 text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">10,000+</h3>
            <p className="text-gray-300">Active Community Members</p>
          </div>
          <div className="glass-card p-8 text-center">
            <Building2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white mb-2">100+</h3>
            <p className="text-gray-300">College Collaborations</p>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-heading">Upcoming Events</h2>
          <p className="text-xl text-gray-300">Join our latest technical events and workshops</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">About SDC</h2>
          <p className="text-xl text-gray-300">Building the future of technical education in India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="glass-card p-8 text-center">
            <div className="bg-blue-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Target className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Our Mission</h3>
            <p className="text-gray-300">
              Empowering students across India through technical education, hands-on experience, and collaborative learning opportunities.
            </p>
          </div>
          <div className="glass-card p-8 text-center">
            <div className="bg-blue-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Our Vision</h3>
            <p className="text-gray-300">
              Creating a nationwide network of technically skilled students ready to tackle real-world challenges and drive innovation.
            </p>
          </div>
          <div className="glass-card p-8 text-center">
            <div className="bg-blue-500/20 rounded-full p-4 w-16 h-16 mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">Our Impact</h3>
            <p className="text-gray-300">
              Building bridges between academia and industry through meaningful collaborations and practical learning experiences.
            </p>
          </div>
        </div>

        <div className="glass-card p-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Our Journey</h3>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                <div className="w-4 h-4 rounded-full bg-blue-400"></div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">2022 – Foundation</h4>
                <p className="text-gray-300">The idea of Student Developers Community (SDC) was born with a vision to bridge the gap between learning and industry needs. We started as a small group of passionate students eager to explore and share knowledge in technology.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                <div className="w-4 h-4 rounded-full bg-blue-400"></div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">2023 – Growth</h4>
                <p className="text-gray-300">SDC expanded rapidly, organizing 30+ events, workshops, hackathons, and networking sessions across Hyderabad and Bangalore. We built strong industry collaborations and connected thousands of students with real-world opportunities.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                <div className="w-4 h-4 rounded-full bg-blue-400"></div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">2024 – Innovation</h4>
                <p className="text-gray-300">This year marked a shift towards AI, emerging technologies, and startup culture. And organised 45 Events, We introduced hands-on learning experiences, fostering creativity and problem-solving skills through advanced tech sessions and industry partnerships.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                <div className="w-4 h-4 rounded-full bg-blue-400"></div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">2025 – Making Impact</h4>
                <p className="text-gray-300">SDC is now focused on creating real change. With large-scale AI summits, industry collaborations, and mentorship programs, we are helping students, professionals, and startups leverage technology to build the future.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">Our Vision for the Next 5 Years</h3>
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                <div className="w-4 h-4 rounded-full bg-blue-400"></div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">Build India’s Largest Student Tech Community</h4>
                <p className="text-gray-300">Fostering collaboration and learning across universities.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                <div className="w-4 h-4 rounded-full bg-blue-400"></div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">Host 500+ Tech Events, Hackathons & AI Summits</h4>
                <p className="text-gray-300">Equipping students with cutting-edge skills.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                <div className="w-4 h-4 rounded-full bg-blue-400"></div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">Create AI-Powered Learning & Mentorship Programs</h4>
                <p className="text-gray-300">Bridging the gap between students and industry experts.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                <div className="w-4 h-4 rounded-full bg-blue-400"></div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">Help 10,000+ Students Get Job-Ready</h4>
                <p className="text-gray-300">Offering internships, placements, and startup incubation opportunities.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-blue-500/20 rounded-full p-2 mr-4">
                <div className="w-4 h-4 rounded-full bg-blue-400"></div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-white">Expand Beyond India</h4>
                <p className="text-gray-300">Connecting globally with tech communities and industry leaders.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Host Event Section */}
      <section id="host-event" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8">
          <h2 className="text-3xl font-bold text-white mb-8">Host an Event with SDC</h2>
          <p className="text-gray-300 mb-8">
            Partner with us to organize impactful technical events at your institution. Join our network of 100+ colleges across India.
          </p>

          <form onSubmit={handleHostEventSubmit} className="space-y-6">
            <div>
              <label htmlFor="institutionName" className="block text-sm font-medium text-gray-200">
                Institution Name
              </label>
              <input
                type="text"
                id="institutionName"
                required
                className="input-field"
                value={hostEventForm.institutionName}
                onChange={(e) => setHostEventForm({ ...hostEventForm, institutionName: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-200">
                Contact Person
              </label>
              <input
                type="text"
                id="contactPerson"
                required
                className="input-field"
                value={hostEventForm.contactPerson}
                onChange={(e) => setHostEventForm({ ...hostEventForm, contactPerson: e.target.value })}
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
                value={hostEventForm.email}
                onChange={(e) => setHostEventForm({ ...hostEventForm, email: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-gray-200">
                Event Type
              </label>
              <select
                id="eventType"
                required
                className="input-field"
                value={hostEventForm.eventType}
                onChange={(e) => setHostEventForm({ ...hostEventForm, eventType: e.target.value })}
              >
                <option value="">Select an event type</option>
                <option value="hackathon">Hackathon</option>
                <option value="workshop">Workshop</option>
                <option value="conference">Conference</option>
                <option value="bootcamp">Bootcamp</option>
              </select>
            </div>

            <div>
              <label htmlFor="expectedDate" className="block text-sm font-medium text-gray-200">
                Expected Date
              </label>
              <input
                type="date"
                id="expectedDate"
                required
                className="input-field"
                value={hostEventForm.expectedDate}
                onChange={(e) => setHostEventForm({ ...hostEventForm, expectedDate: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="details" className="block text-sm font-medium text-gray-200">
                Additional Details
              </label>
              <textarea
                id="details"
                rows={4}
                className="input-field"
                value={hostEventForm.details}
                onChange={(e) => setHostEventForm({ ...hostEventForm, details: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Submit Proposal
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-heading">Contact Us</h2>
          <p className="text-xl text-gray-300">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Send us a message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label htmlFor="contactFullName" className="block text-sm font-medium text-gray-200">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="contactFullName"
                    required
                    className="input-field"
                    value={contactForm.fullName}
                    onChange={(e) => setContactForm({ ...contactForm, fullName: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-200">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    required
                    className="input-field"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-200">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    className="input-field"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="input-field"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
            <div className="space-y-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Contact Information</h3>
              <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                <h4 className="font-medium text-white">Email</h4>
                <p className="text-gray-300">Admin@sdcindia.tech</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                <h4 className="font-medium text-white">Phone</h4>
                <p className="text-gray-300">+91 72777 44777</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-6 h-6 text-blue-400 mr-4" />
                <div>
                <h4 className="font-medium text-white">Address</h4>
                <p className="text-gray-300">
                  SDC India<br />
                  Vijaypuri colony<br />
                  Tarnaka - 500017
                </p>
                </div>
              </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-white">Connect With Us</h3>
              <div className="space-y-4">
                <a href="https://www.linkedin.com/company/sdcindia01/posts/?feedView=all" className="block text-gray-300 hover:text-blue-400 transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/sdcindia01/" className="block text-gray-300 hover:text-blue-400 transition-colors">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-secondary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">SDC</h3>
              <p className="text-gray-300">Empowering students through technical education and collaborative learning opportunities across India.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#events" className="text-gray-300 hover:text-blue-400 transition-colors">Events</a></li>
                <li><a href="#host-event" className="text-gray-300 hover:text-blue-400 transition-colors">Host Event</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-300">
            <p>© 2025 Student Development Community. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
