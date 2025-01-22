import React from 'react';
import { Award, Users, Target, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">About AI Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're a team of AI experts, data scientists, and engineers passionate about
              transforming businesses through innovative AI solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg">
                To democratize AI technology and make it accessible to businesses of all sizes,
                enabling them to harness the power of artificial intelligence for sustainable growth
                and innovation.
              </p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Rocket className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg">
                To be the global leader in AI solutions, recognized for our innovative approach,
                technical excellence, and commitment to creating positive impact through technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts behind our innovative AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Chief Executive Officer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Ph.D. in Machine Learning from MIT with 15+ years of industry experience."
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Technology Officer",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Former Tech Lead at Google AI with expertise in deep learning and neural networks."
              },
              {
                name: "Dr. Emily Watson",
                role: "Head of Research",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
                bio: "Leading our research initiatives in advanced AI algorithms and applications."
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company History */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              A decade of innovation and growth in AI technology
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                year: "2013",
                title: "Company Founded",
                description: "Started with a vision to make AI accessible to businesses."
              },
              {
                year: "2015",
                title: "First Major Breakthrough",
                description: "Launched our proprietary AI platform for business analytics."
              },
              {
                year: "2018",
                title: "Global Expansion",
                description: "Opened offices in Europe and Asia to serve international clients."
              },
              {
                year: "2023",
                title: "Industry Leader",
                description: "Recognized as a leading AI solutions provider worldwide."
              }
            ].map((milestone, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Award className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {milestone.year} - {milestone.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;