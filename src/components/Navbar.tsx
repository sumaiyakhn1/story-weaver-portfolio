import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="font-serif text-xl text-primary hover:text-accent transition-colors duration-300"
          >
            John Doe
          </Link>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="text-primary animate-in fade-in duration-200" />
            ) : (
              <Menu size={24} className="text-primary animate-in fade-in duration-200" />
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/multimedia">Multimedia Stories</NavLink>
            <NavLink to="/documentaries">Documentaries</NavLink>
            <NavLink to="/news">News & Op-Eds</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transform transition-all duration-300 ease-in-out ${
            isOpen 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <div className="flex flex-col space-y-4 pb-6">
            <MobileNavLink to="/multimedia" onClick={() => setIsOpen(false)}>
              Multimedia Stories
            </MobileNavLink>
            <MobileNavLink to="/documentaries" onClick={() => setIsOpen(false)}>
              Documentaries
            </MobileNavLink>
            <MobileNavLink to="/news" onClick={() => setIsOpen(false)}>
              News & Op-Eds
            </MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Desktop NavLink component
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link
    to={to}
    className="text-secondary hover:text-accent transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
  >
    {children}
  </Link>
);

// Mobile NavLink component
const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-secondary hover:text-accent transition-colors duration-300 py-2 px-4 hover:bg-muted rounded-md"
  >
    {children}
  </Link>
);

export default Navbar;