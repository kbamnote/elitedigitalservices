import { Mail, Phone, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="bg-[#1a1a2e] text-white py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Contact info */}
        <div className="flex items-center gap-6">
          <a 
            href="mailto:hello@elitedigitalsolutions.com" 
            className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
          >
            <Mail size={16} />
            <span>hello@elitedigitalsolutions.com</span>
          </a>
          
          <a 
            href="tel:+208-6666-0112" 
            className="flex items-center gap-2 text-sm hover:text-gray-300 transition-colors"
          >
            <Phone size={16} />
            <span>+208-6666-0112</span>
          </a>
        </div>

        {/* Right side - Social icons */}
        <div className="flex items-center gap-4">
          <a 
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
          <a 
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
            aria-label="Twitter"
          >
            <Twitter size={18} />
          </a>
          <a 
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-300 transition-colors"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}