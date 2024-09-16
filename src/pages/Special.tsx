// LifetimeBenefitsSection.tsx
import React from "react";

const Special: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-16 px-8 rounded-lg shadow-lg"
      style={{ backgroundImage: "url('/src/assets/img9.jpg')" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-4xl mx-auto text-center  text-white">
        <h2 className="text-4xl font-bold mb-6">
          Pay Once, Enjoy Lifetime Benefits!
        </h2>
        <p className="text-xl mb-8">
          Unlock free lifetime updates, premium plugins, and unlimited access to
          all facilities. Make one payment and enjoy the ultimate experience.
        </p>

        <ul className="grid grid-cols-2 gap-4 text-lg text-gray-700">
          <li className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center">
            🎉 Free Lifetime Updates
          </li>
          <li className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center">
            🔌 Access to Premium Plugins
          </li>
          <li className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center">
            📚 Exclusive Sports Content
          </li>
          <li className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center">
            🛠️ Priority Customer Support
          </li>
          <li className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center">
            💸 No Hidden Fees
          </li>
          <li className="bg-white shadow-lg rounded-lg p-4 flex items-center justify-center">
            🏅 Unlimited Access to Facilities
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Special;
