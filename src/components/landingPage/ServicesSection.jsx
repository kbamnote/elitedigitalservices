import { ArrowRight, Settings, Shield, Code } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "IT Management",
      description: "End‑to‑end management of your infrastructure, applications, security, and monitoring so your IT stack stays stable and aligned with the business."
    },
    {
      icon: Shield,
      title: "Cyber Security",
      description: "Security reviews, hardening, and continuous monitoring that protect your cloud, APIs, and data from emerging threats."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "High‑performance websites and web applications built with modern JavaScript frameworks and connected to your existing systems."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-4 bg-[#2563eb] rounded-full relative">
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase">
                What We Offer
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl font-bold text-gray-900">
              Excellent It Services
            </h2>
          </div>

          {/* View All Button */}
          <button className="bg-[#2563eb] text-white px-8 py-4 rounded-md font-medium inline-flex items-center gap-2 hover:bg-[#1d4ed8] transition-all duration-300 group">
            View All Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 group overflow-hidden"
            >
              {/* Circuit Board Pattern Background */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {/* Horizontal lines */}
                  <line x1="50" y1="80" x2="200" y2="80" stroke="#2563eb" strokeWidth="2"/>
                  <line x1="250" y1="80" x2="350" y2="80" stroke="#2563eb" strokeWidth="2"/>
                  <line x1="50" y1="150" x2="150" y2="150" stroke="#2563eb" strokeWidth="2"/>
                  <line x1="200" y1="150" x2="350" y2="150" stroke="#2563eb" strokeWidth="2"/>
                  <line x1="50" y1="220" x2="180" y2="220" stroke="#2563eb" strokeWidth="2"/>
                  <line x1="230" y1="220" x2="350" y2="220" stroke="#2563eb" strokeWidth="2"/>
                  
                  {/* Vertical lines */}
                  <line x1="120" y1="50" x2="120" y2="120" stroke="#2563eb" strokeWidth="2"/>
                  <line x1="120" y1="170" x2="120" y2="250" stroke="#2563eb" strokeWidth="2"/>
                  <line x1="280" y1="50" x2="280" y2="130" stroke="#2563eb" strokeWidth="2"/>
                  <line x1="280" y1="180" x2="280" y2="250" stroke="#2563eb" strokeWidth="2"/>
                  
                  {/* Connection points (circles) */}
                  <circle cx="120" cy="80" r="6" fill="#2563eb"/>
                  <circle cx="200" cy="80" r="6" fill="#2563eb"/>
                  <circle cx="250" cy="80" r="6" fill="#2563eb"/>
                  <circle cx="120" cy="150" r="6" fill="#2563eb"/>
                  <circle cx="200" cy="150" r="6" fill="#2563eb"/>
                  <circle cx="120" cy="220" r="6" fill="#2563eb"/>
                  <circle cx="280" cy="150" r="6" fill="#2563eb"/>
                  <circle cx="180" cy="220" r="6" fill="#2563eb"/>
                  <circle cx="230" cy="220" r="6" fill="#2563eb"/>
                </svg>
              </div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-[#2563eb] transition-colors duration-300">
                  <service.icon 
                    size={32} 
                    className="text-[#2563eb] group-hover:text-white transition-colors duration-300" 
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;