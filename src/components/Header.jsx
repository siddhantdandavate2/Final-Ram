import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Information', href: '/information' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-[#F5EFEB] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Title */}
          <div className="flex items-center">
            <div className="mr-3 sm:mr-4 flex-shrink-0">
              <img
                className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                src="/logo.png"
                alt="Maxcare Logo"
              />
            </div>
            <Link
              to="/"
              className="text-xl sm:text-2xl md:text-3xl font-bold text-[#567C8D] whitespace-nowrap"
            >
              <span className="text-[#567C8D]">Maxcare</span> Pain Clinic
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-md font-semibold transition-colors hover:text-[#2F4156] ${
                  isActive(item.href) ? 'text-[#6abbe1]' : 'text-[#567C8D]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Desktop Only */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <a
              href="tel:07777106344"
              className="flex items-center space-x-2 text-[#567c8d] hover:text-[#2f4156] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            <Link
              to="/book-appointment"
              className="bg-[#567c8d] text-[#F5EFEB] px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
            >
              <Calendar className="h-4 w-4" />
              <span>Book</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#567c8d] hover:text-[#2f4156] transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#F5EFEB] border-t border-gray-200 shadow-sm">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded text-base font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-[#567C8d] bg-[#F5EFEB]'
                    : 'text-[#567c8d] hover:text-[#2f4156] hover:bg-[#F5EFEB]'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <div className="pt-4 border-t space-y-3">
              <a
                href="tel:07777106344"
                className="flex items-center space-x-2 text-[#567c8d] hover:text-[#2f4156] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>Call Now</span>
              </a>
              <Link
                to="/book-appointment"
                className="bg-[#567c8d] text-[#F5EFEB] px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 flex items-center space-x-2 w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                <Calendar className="h-4 w-4" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;