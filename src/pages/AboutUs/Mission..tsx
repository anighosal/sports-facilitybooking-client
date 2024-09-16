import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Example icon

const Mission: React.FC = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-20 text-center text-gray-700">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Our Mission</h2>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          At{" "}
          <span className="text-xl font-bold">
            {" "}
            Sport<span className="text-red-600">P</span>ulse
          </span>
          , our mission is to make booking sports facilities seamless,
          accessible, and efficient, fostering a community of active and
          passionate individuals.
        </p>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="flex flex-col items-center text-gray-700">
            <FaCheckCircle className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
            <p className="text-gray-700 text-base">
              We strive to make sports facilities accessible to everyone,
              simplifying the booking process for all users.
            </p>
          </div>

          {/* Value 2 */}
          <div className="flex flex-col items-center text-gray-700">
            <FaCheckCircle className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="text-gray-600 text-base">
              Building a thriving community by connecting sports enthusiasts
              with world-class facilities.
            </p>
          </div>

          {/* Value 3 */}
          <div className="flex flex-col items-center text-gray-700">
            <FaCheckCircle className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-600 text-base">
              We continuously innovate to enhance the user experience, making
              facility booking a breeze.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
