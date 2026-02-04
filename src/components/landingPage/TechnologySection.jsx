import { ArrowRight, Globe, Smartphone, Apple, Watch, Tv, Rocket } from 'lucide-react';

const TechnologySection = () => {
  const platforms = [
    {
      icon: Globe,
      title: "Website"
    },
    {
      icon: Smartphone,
      title: "Android"
    },
    {
      icon: Apple,
      title: "IOS"
    },
    {
      icon: Watch,
      title: "Watch"
    },
    {
      icon: Tv,
      title: "Tv"
    },
    {
      icon: Rocket,
      title: "IOT"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-linear-to-br from-[#0f172a] via-[#1e293b] to-[#1e3a8a] py-20 overflow-hidden">
      {/* Circuit Board Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg className="absolute left-0 top-0 w-1/3 h-full" viewBox="0 0 400 600">
          {/* Circuit lines */}
          <line x1="50" y1="100" x2="50" y2="200" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="50" y1="100" x2="100" y2="100" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="50" y1="200" x2="100" y2="200" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="80" y1="150" x2="130" y2="150" stroke="#3b82f6" strokeWidth="2"/>
          
          <line x1="100" y1="250" x2="100" y2="350" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="100" y1="250" x2="150" y2="250" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="100" y1="350" x2="150" y2="350" stroke="#3b82f6" strokeWidth="2"/>
          
          {/* Connection nodes */}
          <circle cx="50" cy="100" r="4" fill="#3b82f6"/>
          <circle cx="50" cy="200" r="4" fill="#3b82f6"/>
          <circle cx="100" cy="100" r="4" fill="#3b82f6"/>
          <circle cx="100" cy="200" r="4" fill="#3b82f6"/>
          <circle cx="80" cy="150" r="4" fill="#3b82f6"/>
          <circle cx="130" cy="150" r="4" fill="#3b82f6"/>
          <circle cx="100" cy="250" r="4" fill="#3b82f6"/>
          <circle cx="100" cy="350" r="4" fill="#3b82f6"/>
          <circle cx="150" cy="250" r="4" fill="#3b82f6"/>
          <circle cx="150" cy="350" r="4" fill="#3b82f6"/>
        </svg>

        <svg className="absolute right-0 top-0 w-1/4 h-full" viewBox="0 0 300 600">
          {/* Right side circuit pattern */}
          <line x1="200" y1="50" x2="250" y2="50" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="200" y1="100" x2="250" y2="100" stroke="#3b82f6" strokeWidth="2"/>
          <line x1="225" y1="50" x2="225" y2="150" stroke="#3b82f6" strokeWidth="2"/>
          
          <circle cx="200" cy="50" r="4" fill="#3b82f6"/>
          <circle cx="250" cy="50" r="4" fill="#3b82f6"/>
          <circle cx="200" cy="100" r="4" fill="#3b82f6"/>
          <circle cx="250" cy="100" r="4" fill="#3b82f6"/>
          <circle cx="225" cy="150" r="4" fill="#3b82f6"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-16">
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-4 bg-[#3b82f6] rounded-full relative">
                <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
              </div>
              <span className="text-[#3b82f6] text-sm font-semibold tracking-wider uppercase">
                Our Offering
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl font-bold text-white leading-tight max-w-2xl">
              Build consistent digital experiences across every platform.
            </h2>
          </div>

          {/* Explore More Button */}
          <button className="bg-[#3b82f6] text-white px-8 py-4 rounded-md font-medium inline-flex items-center gap-2 hover:bg-[#2563eb] transition-all duration-300 group">
            Explore More
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Platform Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
            >
              {/* Card */}
              <div className="relative bg-white/5 backdrop-blur-sm border border-[#3b82f6]/30 rounded-lg p-8 hover:bg-white/10 hover:border-[#3b82f6]/60 transition-all duration-300">
                {/* Icon Container */}
                <div className="w-16 h-16 bg-[#1e293b] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:bg-[#3b82f6] transition-all duration-300">
                  <platform.icon 
                    size={32} 
                    className="text-[#3b82f6] group-hover:text-white transition-colors duration-300" 
                  />
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-bold text-center">
                  {platform.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Media Partners Section */}
        {/* <div className="bg-[#3b82f6] rounded-lg py-12 px-8">
          <div className="flex items-center justify-between gap-8 overflow-x-auto">
           
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 text-white font-bold text-2xl whitespace-nowrap opacity-90 hover:opacity-100 transition-opacity"
              >
                
                <div className="w-10 h-10 flex items-center justify-center">
                  {index === 0 && (
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                  )}
                  {index === 1 && (
                    <svg className="w-10 h-10" viewBox="0 0 40 40">
                      <path d="M 5 20 L 15 10 L 25 20 L 35 10" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-10 h-10" viewBox="0 0 40 40">
                      <path d="M 10 15 L 20 10 L 30 15 L 30 25 L 20 30 L 10 25 Z" stroke="white" strokeWidth="3" fill="none"/>
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-10 h-10" viewBox="0 0 40 40">
                      <rect x="10" y="15" width="8" height="15" fill="white" transform="skewY(-10)"/>
                      <rect x="20" y="10" width="8" height="20" fill="white" transform="skewY(-10)"/>
                    </svg>
                  )}
                  {index === 4 && (
                    <svg className="w-10 h-10" viewBox="0 0 40 40">
                      <path d="M 15 10 L 10 20 L 15 30 L 25 30 L 30 20 L 25 10 Z" fill="white"/>
                    </svg>
                  )}
                </div>
                <span>Tech Media</span>
              </div>
            ))}
          </div>
        </div> */}
      </div>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white border-2 border-[#3b82f6] text-[#3b82f6] rounded-full flex items-center justify-center shadow-lg hover:bg-[#3b82f6] hover:text-white transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowRight size={24} className="-rotate-90 group-hover:scale-110 transition-transform" />
      </button> */}
    </section>
  );
};

export default TechnologySection;