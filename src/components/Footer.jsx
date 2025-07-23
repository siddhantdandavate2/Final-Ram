
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#567c8d] text-[#F5EFEB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8">
          {/* Clinic Info */}
          <div>
            <h3 className="text-2xl sm:text-xl font-bold mb-4">
              <span className="text-[#2f4156]">Maxcare</span> Pain Clinic
            </h3>
            <p className="text-[#F5EFEB] text-sm sm:text-base mb-4 leading-relaxed">
              Providing specialized pain management services with compassionate care and modern treatment approaches.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-[#2f4156] rounded-full flex items-center justify-center">
                <span className="text-[#F5EFEB] font-bold text-sm">M</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl sm:text-lg font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm sm:text-base">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#F5EFEB] shrink-0" />
                <span className="break-words">07777106344</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#F5EFEB] shrink-0" />
                <span className="break-words">admin@berkshirepainclinic.co.uk</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#F5EFEB] shrink-0" />
                <span className="break-words">Berkshire, UK</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl sm:text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm sm:text-base">
              <Link to="/about" className="block text-[#F5EFEB] hover:text-[#2f4156] transition-colors">
                About Dr. Ram Dhotarkar
              </Link>
              <Link to="/services" className="block text-[#F5EFEB] hover:text-[#2f4156] transition-colors">
                Our Services
              </Link>
              <Link to="/faqs" className="block text-[#F5EFEB] hover:text-[#2f4156] transition-colors">
                FAQs
              </Link>
              <Link to="/contact" className="block text-[#F5EFEB] hover:text-[#2f4156] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-[#2f4156] mt-10 pt-6 text-center">
          <p className="text-[#F5EFEB] text-sm">
            © {currentYear} Maxcare Pain Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
