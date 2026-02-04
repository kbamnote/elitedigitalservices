import { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import one from "../../assets/banner-image.jpg";
import two from "../../assets/banner-image2.jpg";
import three from "../../assets/banner-image3.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: one,
      badge: "BEST IT SOLUTION PROVIDER",
      title: "Enterprise IT services for modern businesses",
      description: "Design, build, and support secure web and mobile platforms that keep your customers, teams, and data connected in real time."
    },
    {
      image: two,
      badge: "BEST IT SOLUTION PROVIDER",
      title: "Scalable software development company",
      description: "From greenfield applications to platform modernisation, our engineers ship production‑ready code that is tested, observable, and easy to maintain."
    },
    {
      image: three,
      badge: "BEST IT SOLUTION PROVIDER",
      title: "Digital solutions agency for growth",
      description: "We combine product strategy, UI/UX design, cloud architecture, and DevOps to turn digital roadmaps into measurable business results."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] lg:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={`Indian technology team banner ${index + 1}`}
              className={`w-full h-full object-cover ${index === currentSlide ? 'animate-hero-zoom' : ''}`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Decorative Elements */}
          {/* Left Blue Triangle */}
          {/* <div className="absolute left-0 top-0 w-0 h-0 border-l-[300px] border-l-[#2563eb] border-b-[700px] border-b-transparent opacity-90"></div> */}
          
          {/* Right Corner Lines */}
          <div className="absolute right-8 top-8 space-y-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-16 h-16 border-2 border-white/30"
                style={{
                  transform: `rotate(45deg) translateX(${i * 8}px)`,
                }}
              ></div>
            ))}
          </div>

          {/* Wavy Line Decoration */}
          <svg
            className="absolute left-1/3 bottom-32 w-24 h-16 opacity-60"
            viewBox="0 0 100 50"
          >
            <path
              d="M 0 25 Q 25 0, 50 25 T 100 25"
              stroke="#2563eb"
              strokeWidth="3"
              fill="none"
            />
          </svg>

          {/* Curved Bottom Right */}
          <svg
            className="absolute right-0 bottom-0 w-96 h-64 opacity-80"
            viewBox="0 0 400 300"
            preserveAspectRatio="none"
          >
            <path
              d="M 400 300 L 400 150 Q 300 100, 200 150 T 0 200 L 0 300 Z"
              fill="#2563eb"
            />
          </svg>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
                <div className="w-8 h-4 bg-white rounded-full relative">
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#2563eb] rounded-full"></div>
                </div>
                <span className="text-white text-sm font-medium tracking-wider">
                  {slide.badge}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {slide.title}
              </h1>

              {/* Description */}
              <p className="text-lg text-white/90 mb-8 max-w-2xl leading-relaxed">
                {slide.description}
              </p>

              {/* CTA Button */}
              <button className="bg-[#2563eb] text-white px-8 py-4 rounded-md font-medium inline-flex items-center gap-2 hover:bg-[#1d4ed8] transition-all duration-300 group">
                Explore More
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/30 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} className="text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/30 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} className="text-white" />
      </button> */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-12' 
                : 'bg-white/40 w-8 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;