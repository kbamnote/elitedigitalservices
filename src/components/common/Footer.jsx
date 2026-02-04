import { Facebook, Twitter, Linkedin, Youtube, Phone, Clock, ChevronRight, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const itSolutions = [
    { name: "IT Management", path: "/it-management" },
    { name: "SEO Optimization", path: "/seo-optimization" },
    { name: "Web Development", path: "/services" },
    { name: "Cyber Security", path: "/cyber-security" },
    { name: "Data Security", path: "/data-security" }
  ];

  const quickLinks = [
    { name: "About Elite Digital Solutions", path: "/about" },
    { name: "IT Services", path: "/services" },
    { name: "Engagement Models", path: "/engagement-models" },
    { name: "Case Studies", path: "/case-studies" },
    { name: "Our Team", path: "/our-team" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
  ];

  return (
    <footer className="relative bg-[#0f172a] text-white overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Blue Triangle */}
        <div className="absolute left-0 bottom-0 w-0 h-0 border-l-200 border-l-[#2563eb] border-t-500 border-t-transparent opacity-40"></div>
        
        {/* Right Corner Lines */}
        <svg className="absolute right-0 top-0 w-96 h-full opacity-20" viewBox="0 0 400 500">
          <line x1="300" y1="50" x2="400" y2="150" stroke="white" strokeWidth="2"/>
          <line x1="320" y1="70" x2="420" y2="170" stroke="white" strokeWidth="2"/>
          <line x1="340" y1="90" x2="440" y2="190" stroke="white" strokeWidth="2"/>
          <path d="M 350 200 L 400 200 L 400 250 Z" stroke="#2563eb" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#2563eb] rounded-sm flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5 p-1.5">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
              </div>
              <span className="text-2xl font-bold">Elite Digital Solutions</span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Elite Digital Solutions is an IT services and software development company delivering web, mobile, cloud, and AI solutions for organisations that rely on dependable digital platforms.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 border border-gray-700 rounded flex items-center justify-center hover:bg-[#2563eb] hover:border-[#2563eb] transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - IT Solution */}
          <div>
            <h3 className="text-xl font-bold mb-6">IT Solution</h3>
            <ul className="space-y-3">
              {itSolutions.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#2563eb] transition-colors duration-300 group"
                  >
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Quick Link */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Link</h3>
            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="flex items-center gap-2 text-gray-400 hover:text-[#2563eb] transition-colors duration-300 group"
                  >
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            
            {/* Address */}
            <p className="text-gray-400 mb-6">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>

            {/* Opening Hours */}
            <div className="flex gap-3 mb-6">
              <Clock size={24} className="text-[#2563eb] shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Opening Hours:</h4>
                <p className="text-gray-400">Mon – Sat: 10.00 AM – 4.00 PM</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3">
              <Phone size={24} className="text-[#2563eb] shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Phone Call:</h4>
                <p className="text-gray-400">208–6666–0112, 308–5555–0113</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 <span className="text-[#2563eb] font-semibold">Elite Digital Solutions</span>. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <Link to="/terms-conditions" className="text-gray-400 hover:text-[#2563eb] transition-colors duration-300 text-sm">
                Terms & Condition
              </Link>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#2563eb] transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#2563eb] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#1d4ed8] transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} className="group-hover:scale-110 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;