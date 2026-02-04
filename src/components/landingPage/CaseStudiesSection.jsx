import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ArrowUpCircle } from 'lucide-react';

const CaseStudiesSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef();

  const caseStudies = [
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      category: "Technology",
      title: "Platform Integration",
      categoryColor: "text-[#2563eb]"
    },
    {
      image: "https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=800&h=600&fit=crop",
      category: "Solution",
      title: "IT Management",
      categoryColor: "text-[#2563eb]"
    },
    {
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop",
      category: "Technology",
      title: "Platform Integration",
      categoryColor: "text-[#2563eb]"
    },
    {
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      category: "Solution",
      title: "Web Development",
      categoryColor: "text-[#2563eb]"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      category: "Technology",
      title: "Cloud Solutions",
      categoryColor: "text-[#2563eb]"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, caseStudies.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Calculate visible slides (show 4 at a time on desktop)
  const getVisibleSlides = () => {
    const slides = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentSlide + i) % caseStudies.length;
      slides.push(caseStudies[index]);
    }
    return slides;
  };

  return (
    <section className="py-20 bg-gray-50 relative">
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
                From Our Case Studies
              </span>
            </div>
            
            {/* Title */}
            <h2 className="text-5xl font-bold text-gray-900">
              We Delivered Best Solution
            </h2>
          </div>

          {/* View All Button */}
          <button className="bg-[#2563eb] text-white px-8 py-4 rounded-md font-medium inline-flex items-center gap-2 hover:bg-[#1d4ed8] transition-all duration-300 group">
            View All Case
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleSlides().map((study, index) => (
              <div
                key={`${currentSlide}-${index}`}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer animate-fadeIn"
              >
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className={`text-sm font-semibold mb-2 ${study.categoryColor}`}>
                    {study.category}
                  </p>
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-between">
                    {study.title}
                    <div className="w-12 h-12 bg-[#2563eb] rounded flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <ArrowRight 
                        size={20} 
                        className="text-white group-hover:text-[#2563eb] group-hover:translate-x-1 transition-all duration-300" 
                      />
                    </div>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-3 mt-12">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-[#2563eb]'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {/* <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white border-2 border-[#2563eb] text-[#2563eb] rounded-full flex items-center justify-center shadow-lg hover:bg-[#2563eb] hover:text-white transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUpCircle size={28} className="group-hover:scale-110 transition-transform" />
      </button> */}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default CaseStudiesSection;