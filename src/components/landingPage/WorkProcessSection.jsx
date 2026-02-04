import { ArrowRight, ArrowUp } from 'lucide-react';

const WorkProcessSection = () => {
  const processes = [
    {
      number: "1",
      image: "https://images.unsplash.com/photo-1557425493-6f90ae4659fc?w=400&h=400&fit=crop",
      title: "Define Requirements",
      description: "We map business goals, user journeys, and technical constraints into a concise delivery brief for your digital product."
    },
    {
      number: "2",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
      title: "Design & Prototyping",
      description: "Our UX and engineering teams collaborate on wireframes and clickable prototypes to validate flows before we commit to code."
    },
    {
      number: "3",
      image: "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=400&h=400&fit=crop",
      title: "Build, launch, and iterate",
      description: "We implement the solution with modern stacks, automated testing, and observability, then iterate based on real usage."
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-8 h-4 bg-[#2563eb] rounded-full relative">
              <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-[#2563eb] text-sm font-semibold tracking-wider uppercase">
              Work Process
            </span>
          </div>
          
          {/* Title */}
          <h2 className="text-5xl font-bold text-gray-900">
            Our Development Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {processes.map((process, index) => (
              <div key={index} className="relative">
                {/* Connecting Arrow - Hidden on mobile, shown on md+ */}
                {index < processes.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-[calc(50%+120px)] w-[calc(100%-80px)] z-0">
                    <svg 
                      className="w-full h-24" 
                      viewBox="0 0 300 100" 
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" style={{ stopColor: '#93c5fd', stopOpacity: 0.3 }} />
                          <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 0.5 }} />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 50 Q 150 20, 300 50"
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="3"
                        strokeDasharray="8 4"
                      />
                      <polygon
                        points="300,50 290,45 290,55"
                        fill="#3b82f6"
                        opacity="0.5"
                      />
                    </svg>
                  </div>
                )}

                {/* Process Card */}
                <div className="relative z-10 text-center">
                  {/* Image Container */}
                  <div className="relative inline-block mb-6">
                    {/* Dotted Circle Border */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300 animate-spin-slow"></div>
                    
                    {/* Image */}
                    <div className="relative w-64 h-64 mx-auto">
                      <img
                        src={process.image}
                        alt={`Indian software team – ${process.title}`}
                        className="w-full h-full rounded-full object-cover border-8 border-white shadow-lg"
                        loading="lazy"
                      />
                      
                      {/* Number Badge */}
                      <div className="absolute -top-4 -left-4 w-14 h-14 bg-[#2563eb] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg border-4 border-white">
                        {process.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                    {process.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white border-2 border-[#2563eb] text-[#2563eb] rounded-full flex items-center justify-center shadow-lg hover:bg-[#2563eb] hover:text-white transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:scale-110 transition-transform" />
      </button> */}

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default WorkProcessSection;