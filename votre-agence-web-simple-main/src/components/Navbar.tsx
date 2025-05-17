
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/28d626a5-11b6-43aa-bcd1-9dee228db905.png" 
                alt="DigiGabonis Logo" 
                className="w-10 h-10"
              />
            </div>
            <div className="ml-2 text-2xl font-bold">
              <span className="text-digigabonis-green">Digi</span>
              <span className="text-digigabonis-lightgreen">Gabonis</span>
            </div>
          </div>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-digigabonis-green font-medium">Accueil</Link>
          <Link to="/portfolio" className="text-gray-700 hover:text-digigabonis-green font-medium">Portfolio</Link>
          <a href="#services" className="text-gray-700 hover:text-digigabonis-green font-medium">Services</a>
          <a href="#pricing" className="text-gray-700 hover:text-digigabonis-green font-medium">Tarifs</a>
          <a href="#contact" className="bg-digigabonis-green text-white px-4 py-2 rounded-md hover:bg-digigabonis-lightgreen transition-colors font-medium">Demander un devis</a>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t mt-2">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <Link to="/" className="block text-gray-700 hover:text-digigabonis-green font-medium">Accueil</Link>
            <Link to="/portfolio" className="block text-gray-700 hover:text-digigabonis-green font-medium">Portfolio</Link>
            <a href="#services" className="block text-gray-700 hover:text-digigabonis-green font-medium">Services</a>
            <a href="#pricing" className="block text-gray-700 hover:text-digigabonis-green font-medium">Tarifs</a>
            <a href="#contact" className="block bg-digigabonis-green text-white px-4 py-2 rounded-md hover:bg-digigabonis-lightgreen transition-colors font-medium text-center">Demander un devis</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
