import { useState, useEffect, useRef } from 'react';
import { Handshake, Lightbulb, Users, MessageSquare } from 'lucide-react';

const StatsSection = () => {
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    experts: 0,
    posts: 0
  });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: Handshake,
      end: 6561,
      label: 'IT Projects Delivered',
      key: 'clients'
    },
    {
      icon: Lightbulb,
      end: 600,
      label: 'Finished Projects',
      key: 'projects'
    },
    {
      icon: Users,
      end: 250,
      label: 'Skilled Experts',
      key: 'experts'
    },
    {
      icon: MessageSquare,
      end: 590,
      label: 'Knowledge Articles & Updates',
      key: 'posts'
    }
  ];

  // Intersection Observer to trigger animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animate counters
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach(stat => {
      let currentStep = 0;
      const increment = stat.end / steps;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCounts(prev => ({
            ...prev,
            [stat.key]: Math.min(Math.round(increment * currentStep), stat.end)
          }));
        } else {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 relative overflow-hidden">
      {/* Background with tech pattern */}
      <div className="absolute inset-0 bg-linear-to-r from-[#3b82f6] to-[#2563eb]">
        {/* Circuit board pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          {/* Horizontal lines */}
          <line x1="0" y1="50" x2="30%" y2="50" stroke="white" strokeWidth="2"/>
          <line x1="35%" y1="50" x2="65%" y2="50" stroke="white" strokeWidth="2"/>
          <line x1="70%" y1="50" x2="100%" y2="50" stroke="white" strokeWidth="2"/>
          
          <line x1="0" y1="150" x2="25%" y2="150" stroke="white" strokeWidth="2"/>
          <line x1="30%" y1="150" x2="50%" y2="150" stroke="white" strokeWidth="2"/>
          <line x1="55%" y1="150" x2="75%" y2="150" stroke="white" strokeWidth="2"/>
          <line x1="80%" y1="150" x2="100%" y2="150" stroke="white" strokeWidth="2"/>
          
          {/* Vertical connections */}
          <line x1="30%" y1="30" x2="30%" y2="80" stroke="white" strokeWidth="2"/>
          <line x1="65%" y1="30" x2="65%" y2="80" stroke="white" strokeWidth="2"/>
          <line x1="70%" y1="130" x2="70%" y2="170" stroke="white" strokeWidth="2"/>
          
          {/* Diagonal lines */}
          <line x1="50%" y1="30" x2="55%" y2="60" stroke="white" strokeWidth="1.5"/>
          <line x1="75%" y1="40" x2="80%" y2="70" stroke="white" strokeWidth="1.5"/>
          
          {/* Connection nodes */}
          <circle cx="30%" cy="50" r="5" fill="white"/>
          <circle cx="35%" cy="50" r="5" fill="white"/>
          <circle cx="65%" cy="50" r="5" fill="white"/>
          <circle cx="70%" cy="50" r="5" fill="white"/>
          <circle cx="30%" cy="150" r="5" fill="white"/>
          <circle cx="55%" cy="150" r="5" fill="white"/>
          <circle cx="75%" cy="150" r="5" fill="white"/>
          <circle cx="80%" cy="150" r="5" fill="white"/>
        </svg>

        {/* Decorative curved lines on edges */}
        <svg className="absolute left-0 top-0 w-64 h-full opacity-10" preserveAspectRatio="none">
          <path d="M 0 100 Q 100 150, 0 200" stroke="white" strokeWidth="3" fill="none"/>
          <ellipse cx="50" cy="80" rx="80" ry="40" stroke="white" strokeWidth="2" fill="none"/>
        </svg>

        <svg className="absolute right-0 top-0 w-96 h-full opacity-10" preserveAspectRatio="none">
          <path d="M 300 50 L 350 80 L 300 110" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M 250 100 L 300 130 L 250 160" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Stats Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-white"
            >
              {/* Icon */}
              <div className="mb-4">
                <stat.icon size={60} strokeWidth={1.5} />
              </div>

              {/* Counter */}
              <div className="mb-2">
                <span className="text-5xl font-bold">
                  {counts[stat.key].toLocaleString()}+
                </span>
              </div>

              {/* Label */}
              <div className="text-lg font-medium opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;