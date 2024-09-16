import bgImage from "../../assets/about1.jpeg"; // Make sure to add your image in the assets folder

const ContactInfo = () => {
  return (
    <section
      className="relative flex justify-center items-center h-[400px] bg-cover bg-center mb-10"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contact Information */}
      <div className="relative z-10 text-center text-gray-700 p-8 rounded-lg shadow-lg bg-opacity-70 bg-white">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-2">
          📍 Office Address: 1234 Sports Avenue, Cityville, ST 12345
        </p>
        <p className="text-lg mb-2">📞 Phone: (123) 456-7890</p>
        <p className="text-lg mb-2">✉️ Email: contact@sportspulse.com</p>
      </div>
    </section>
  );
};

export default ContactInfo;
