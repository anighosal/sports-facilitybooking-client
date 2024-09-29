import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/badminton.png";
import Line from "./Line";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-white py-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-start mb-6">
            <img src={logo} alt="Logo" className="w-32 mb-4" />
            <p className="text-gray-400">
              Your go-to platform for booking top-notch sports facilities.
              Connect with us to explore more!
            </p>
          </div>

          <div className="flex flex-col mb-6">
            <Link to="/about" className="hover:text-primary">
              About Us
            </Link>
            <Link to="/contact" className="hover:text-primary">
              Contact Us
            </Link>
            <ul className="space-y-2 text-gray-400">
              <li>📍 123 Sports Lane, Cityville, ST 12345</li>
              <li>📞 (123) 456-7890</li>
              <li>✉️ contact@yourdomain.com</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-col mb-6">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="flex flex-col mb-6">
            <h3 className="text-lg font-semibold mb-4">
              Subscribe to Our Newsletter
            </h3>
            <form
              action="https://your-subscription-endpoint.com/subscribe" // Replace with your subscription endpoint
              method="post"
              className="flex flex-col space-y-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="p-2 rounded bg-gray-800 text-white border border-gray-700"
              />
              <button
                type="submit"
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-primary transition duration-300"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
        <Line></Line>
        <div className="text-center text-gray-400 mt-8">
          <p>
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
