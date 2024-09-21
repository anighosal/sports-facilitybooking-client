import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/badminton.png"; // Replace with your logo

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check authentication and user role (from API or localStorage)
    const token = localStorage.getItem("authToken");
    const role = localStorage.getItem("userRole");

    if (token) {
      setIsLoggedIn(true);
      setUserRole(role || "");
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");
    setIsLoggedIn(false);
    setUserRole("");
    navigate("/login");
  };

  const handleDashboardClick = () => {
    if (userRole === "admin") {
      navigate("/admin");
    } else if (userRole === "user") {
      navigate("/user-dashboard");
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-semibold flex items-center">
            <img className="w-10 mr-2" src={logo} alt="SportPulse logo" />
            <h4 className="text-gray-700">
              Sport<span className="text-red-600">P</span>ulse
            </h4>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            {/* Show Dashboard and Logout if logged in */}
            {isLoggedIn ? (
              <>
                <button
                  onClick={handleDashboardClick}
                  className="hover:text-primary"
                >
                  Dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="text-red-600 hover:text-red-800"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
                  Login
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu} className="focus:outline-none">
              <FaUserCircle className="text-2xl text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Links */}
        {isMobileMenuOpen && (
          <div className="md:hidden space-y-4 mt-4">
            {!isLoggedIn ? (
              <>
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
                  Login
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    handleDashboardClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-gray-700 hover:text-primary text-center"
                >
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsMobileMenuOpen(false);
                  }}
                  className="block text-red-600 mx-auto hover:text-red-800 text-center"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
