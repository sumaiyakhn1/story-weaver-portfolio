import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link 
            to="/" 
            className="font-serif text-xl text-primary hover:text-accent transition-colors duration-300"
          >
            ASIF KHAN
          </Link>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X size={24} className="transform transition-transform duration-300" />
            ) : (
              <Menu size={24} className="transform transition-transform duration-300" />
            )}
          </button>

          <div className="hidden md:flex space-x-8">
            {[
              { path: "/multimedia", label: "Multimedia Stories" },
              { path: "/documentaries", label: "Documentaries" },
              { path: "/news", label: "News & Op-Eds" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative text-secondary hover:text-accent transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left ${
                  location.pathname === item.path ? "text-accent after:scale-x-100" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen 
              ? "max-h-64 opacity-100" 
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col space-y-4 pb-4">
            {[
              { path: "/multimedia", label: "Multimedia Stories" },
              { path: "/documentaries", label: "Documentaries" },
              { path: "/news", label: "News & Op-Eds" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-secondary hover:text-accent transition-colors duration-300 ${
                  location.pathname === item.path ? "text-accent font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;