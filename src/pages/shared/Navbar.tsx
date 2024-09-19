import React, { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/badminton.png";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-semibold flex items-center">
            <img className="w-10 mr-2" src={logo} alt="SportPulse logo" />
            <h4 className="text-gray-700">
              Sport<span className="text-red-600">P</span>ulse
            </h4>
          </div>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <Link to="/facility" className="hover:text-primary">
              Facility List
            </Link>
            <Link to="/booking" className="hover:text-primary">
              Booking Page
            </Link>
            <Link to="/about" className="hover:text-primary">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Contact Us
            </Link>
            <Link to="/login" className="hover:text-primary">
              Login/Register
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              {isMobileMenuOpen ? (
                <FaBeer className="text-2xl text-gray-700" />
              ) : (
                <FaBeer className="text-2xl text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden space-y-4 mt-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/facility"
              className="block text-gray-700 hover:text-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Facility List
            </Link>
            <Link
              to="/booking"
              className="block text-gray-700 hover:text-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Booking Page
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/login"
              className="block text-gray-700 hover:text-primary text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login/Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
