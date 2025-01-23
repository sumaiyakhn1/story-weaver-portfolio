import { Mail, Phone, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-white mt-16 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl mb-4">MOHAMMAD ASIF KHAN</h3>
            <p className="text-gray-300">
              Multimedia Journalist based in New Delhi, specializing in defense news and national security.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/multimedia" className="text-gray-300 hover:text-white transition-colors">
                Multimedia Stories
              </Link>
              <Link to="/documentaries" className="text-gray-300 hover:text-white transition-colors">
                Documentaries
              </Link>
              <Link to="/news" className="text-gray-300 hover:text-white transition-colors">
                News & Op-Eds
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@example.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Mail size={18} />
                asifwork76@gmail.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <Phone size={18} />
                +91 9215000721
              </a>
              <div className="flex space-x-4 mt-4">
                <a href="https://www.linkedin.com/in/mohammad-asif-khan-5b1a5420a/" className="text-gray-300 hover:text-white transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://x.com/Mohammad_Asif23" className="text-gray-300 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Asif Khan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;