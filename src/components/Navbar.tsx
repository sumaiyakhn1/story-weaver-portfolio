import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-serif text-xl text-primary">
            John Doe
          </Link>
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
      </div>
    </nav>
  );
};

export default Navbar;