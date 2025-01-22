import React from 'react';
import { Brain, Database, LineChart, Code, Cloud, Shield, Cpu, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Consulting",
      description: "Strategic guidance on implementing AI solutions tailored to your business needs. We help identify opportunities and develop roadmaps for AI adoption.",
      features: ["AI Readiness Assessment", "Strategy Development", "Implementation Planning"]
    },
    {
      icon: Database,
      title: "Machine Learning Solutions",
      description: "Custom machine learning models designed to solve your specific business challenges and drive measurable results.",
      features: ["Predictive Analytics", "Pattern Recognition", "Natural Language Processing"]
    },
    {
      icon: LineChart,
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights with our advanced analytics solutions and visualization tools.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Modeling"]
    },
    {
      icon: Code,
      title: "AI Development",
      description: "End-to-end development of AI-powered applications and systems tailored to your requirements.",
      features: ["Custom AI Applications", "API Integration", "Scalable Solutions"]
    },
    {
      icon: Cloud,
      title: "Cloud AI Integration",
      description: "Seamlessly integrate AI capabilities with your existing cloud infrastructure for maximum efficiency.",
      features: ["Cloud Migration", "Platform Integration", "Performance Optimization"]
    },
    {
      icon: Shield,
      title: "AI Security & Compliance",
      description: "Ensure your AI implementations are secure, ethical, and compliant with industry regulations.",
      features: ["Security Audits", "Compliance Checks", "Risk Assessment"]
    },
    {
      icon: Cpu,
      title: "Process Automation",
      description: "Automate repetitive tasks and workflows using AI-powered solutions to increase efficiency.",
      features: ["Workflow Automation", "RPA Implementation", "Process Optimization"]
    },
    {
      icon: Bot,
      title: "Chatbot & Virtual Assistants",
      description: "Intelligent conversational AI solutions to enhance customer service and internal operations.",
      features: ["Custom Chatbots", "Virtual Assistants", "Natural Language Understanding"]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business and drive innovation
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white mb-6">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Ready to get started?</h2>
                <p className="text-blue-100">
                  Contact us today to discuss how we can help transform your business.
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <Link
                  to="/contact"
                  className="inline-block px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;