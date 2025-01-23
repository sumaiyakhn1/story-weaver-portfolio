import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-serif text-xl text-primary">
            ASIF KHAN
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/multimedia" className="text-secondary hover:text-accent transition-colors">
              Multimedia Stories
            </Link>
            <Link to="/documentaries" className="text-secondary hover:text-accent transition-colors">
              Documentaries
            </Link>
            <Link to="/news" className="text-secondary hover:text-accent transition-colors">
              News & Op-Eds
            </Link>
            <Link to="/contact" className="text-secondary hover:text-accent transition-colors">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-4">
            <Link 
              to="/multimedia" 
              className="text-secondary hover:text-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Multimedia Stories
            </Link>
            <Link 
              to="/documentaries" 
              className="text-secondary hover:text-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Documentaries
            </Link>
            <Link 
              to="/news" 
              className="text-secondary hover:text-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              News & Op-Eds
            </Link>
            <Link 
              to="/contact" 
              className="text-secondary hover:text-accent transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;