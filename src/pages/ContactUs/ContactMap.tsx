const ContactMap = () => {
  return (
    <div className="w-[50%] mt-8">
      <div className="mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093744!2d144.95592831570855!3d-37.81720974201396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d480d4e4790b!2s123+Main+St%2C+Melbourne+VIC+3000%2C+Australia!5e0!3m2!1sen!2sau!4v1614147943242!5m2!1sen!2sau"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          className="border-0"
          title="Office Location"
        ></iframe>
      </div>
      <div className="mb-8 border-2 rounded-lg p-4 text-gray-700">
        <h3 className="text-xl font-bold mb-2">Contact Details</h3>
        <p>
          <strong>Phone:</strong> (123) 456-7890
        </p>
        <p>
          <strong>Email:</strong> contact@example.com
        </p>
        <p>
          <strong>Address:</strong> 123 Main Street, City, Country
        </p>
      </div>
    </div>
  );
};

export default ContactMap;
