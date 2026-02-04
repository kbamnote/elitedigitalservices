import { Search, ArrowRight, Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ onGetQuote }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetQuote = () => {
    if (onGetQuote) {
      onGetQuote();
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white shadow-lg py-4">
      <nav className="relative">
        <div className="flex items-center">
          {/* Blue diagonal section with logo */}
          <div className="relative bg-[#2563eb] text-white px-6 py-4 pr-16 md:px-12 md:py-6 md:pr-24">
            {/* Diagonal cut */}
            <div className="absolute top-0 right-0 w-12 h-full bg-white transform -skew-x-12 translate-x-6 md:w-20 md:translate-x-10"></div>
            
            {/* Logo */}
            <div className="relative z-10 flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-sm flex items-center justify-center">
                <div className="grid grid-cols-2 gap-0.5 p-1 md:p-1.5">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#2563eb] rounded-sm"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#2563eb] rounded-sm"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#2563eb] rounded-sm"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-[#2563eb] rounded-sm"></div>
                </div>
              </div>
              <span className="text-lg md:text-2xl font-bold font-['Kumbh_Sans']">Elite Digital Solutions</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-between px-6 md:px-12">
            <ul className="flex items-center gap-6 md:gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors relative group ${
                      isActive ? 'text-[#2563eb]' : 'text-gray-900 hover:text-[#2563eb]'
                    }`
                  }
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2563eb] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors relative group ${
                      isActive ? 'text-[#2563eb]' : 'text-gray-900 hover:text-[#2563eb]'
                    }`
                  }
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2563eb] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors relative group ${
                      isActive ? 'text-[#2563eb]' : 'text-gray-900 hover:text-[#2563eb]'
                    }`
                  }
                >
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2563eb] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors relative group ${
                      isActive ? 'text-[#2563eb]' : 'text-gray-900 hover:text-[#2563eb]'
                    }`
                  }
                >
                  Portfolio
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2563eb] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors relative group ${
                      isActive ? 'text-[#2563eb]' : 'text-gray-900 hover:text-[#2563eb]'
                    }`
                  }
                >
                  Blog
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2563eb] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors relative group ${
                      isActive ? 'text-[#2563eb]' : 'text-gray-900 hover:text-[#2563eb]'
                    }`
                  }
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2563eb] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </li>
            </ul>

            {/* Right side - Search and CTA */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* <button 
                className="text-gray-600 hover:text-[#2563eb] transition-colors p-2"
                aria-label="Search"
              >
                <Search size={18} />
              </button> */}
              
              <button 
                onClick={handleGetQuote}
                className="bg-[#2563eb] text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-medium flex items-center gap-2 hover:bg-[#1d4ed8] transition-colors group"
              >
                Get A Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto px-6">
            <button
              className="text-gray-900 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white absolute top-full left-0 right-0 shadow-lg py-4 px-6">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 text-gray-900 font-medium transition-colors ${
                      isActive ? 'text-[#2563eb]' : 'hover:text-[#2563eb]'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 text-gray-900 font-medium transition-colors ${
                      isActive ? 'text-[#2563eb]' : 'hover:text-[#2563eb]'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 text-gray-900 font-medium transition-colors ${
                      isActive ? 'text-[#2563eb]' : 'hover:text-[#2563eb]'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) =>
                    `block py-2 text-gray-900 font-medium transition-colors ${
                      isActive ? 'text-[#2563eb]' : 'hover:text-[#2563eb]'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `block py-2 text-gray-900 font-medium transition-colors ${
                      isActive ? 'text-[#2563eb]' : 'hover:text-[#2563eb]'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 text-gray-900 font-medium transition-colors ${
                      isActive ? 'text-[#2563eb]' : 'hover:text-[#2563eb]'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button 
                onClick={handleGetQuote}
                className="w-full bg-[#2563eb] text-white px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-[#1d4ed8] transition-colors"
              >
                Get A Quote
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}