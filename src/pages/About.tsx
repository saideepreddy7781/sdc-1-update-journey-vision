import { Users, Target, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About SDC</h1>
        <p className="text-xl text-gray-600">Building the future of technical education in India</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
            <Target className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600">
            Empowering students across India through technical education, hands-on experience, and collaborative learning opportunities.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
            <Zap className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-600">
            Creating a nationwide network of technically skilled students ready to tackle real-world challenges and drive innovation.
          </p>
        </div>
        <div className="text-center">
          <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
          <p className="text-gray-600">
            Building bridges between academia and industry through meaningful collaborations and practical learning experiences.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2022 – Foundation</h3>
              <p className="text-gray-600">The idea of Student Developers Community (SDC) was born with a vision to bridge the gap between learning and industry needs. We started as a small group of passionate students eager to explore and share knowledge in technology.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2023 – Growth</h3>
              <p className="text-gray-600">SDC expanded rapidly, organizing 30+ events, workshops, hackathons, and networking sessions across Hyderabad and Bangalore. We built strong industry collaborations and connected thousands of students with real-world opportunities.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2024 – Innovation</h3>
              <p className="text-gray-600">This year marked a shift towards AI, emerging technologies, and startup culture. And organised 45 Events, We introduced hands-on learning experiences, fostering creativity and problem-solving skills through advanced tech sessions and industry partnerships.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">2025 – Making Impact</h3>
              <p className="text-gray-600">SDC is now focused on creating real change. With large-scale AI summits, industry collaborations, and mentorship programs, we are helping students, professionals, and startups leverage technology to build the future.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Our Vision for the Next 5 Years</h2>
        <div className="space-y-8">
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Build India’s Largest Student Tech Community</h3>
              <p className="text-gray-600">Fostering collaboration and learning across universities.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Host 500+ Tech Events, Hackathons & AI Summits</h3>
              <p className="text-gray-600">Equipping students with cutting-edge skills.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Create AI-Powered Learning & Mentorship Programs</h3>
              <p className="text-gray-600">Bridging the gap between students and industry experts.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Help 10,000+ Students Get Job-Ready</h3>
              <p className="text-gray-600">Offering internships, placements, and startup incubation opportunities.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 rounded-full p-2 mr-4">
              <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Expand Beyond India</h3>
              <p className="text-gray-600">Connecting globally with tech communities and industry leaders.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
