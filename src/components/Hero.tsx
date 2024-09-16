import React from "react";
import { Link } from "react-router-dom"; // If using react-router for navigation

// Import your background image from the assets folder
import backgroundImage from "../assets/badminton (1).png";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Optional overlay for text readability */}
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to Our Sports Facility Booking
        </h1>
        <p className="text-xl mb-6">
          Discover top-notch sports facilities and book your next game with
          ease.
        </p>
        <Link
          to="/book"
          className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
        >
          Book Now
        </Link>
      </div>
      {/* Banner will be positioned below this */}
    </section>
  );
};

export default Hero;
