import about from "../../assets/about.jpg";

const Banner = () => {
  return (
    <div className="relative bg-opacity-5 bg-black">
      {/* Image with shadow */}
      <img
        className="w-full h-[500px] object-cover shadow-lg "
        src={about}
        alt="About Us"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0  bg-black bg-opacity-50 flex items-center justify-center text-gray-700">
        <div className="bg-white bg-opacity-70 p-6 rounded-md shadow-md max-w-lg text-center">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <p className="text-lg">
            Welcome to our platform, where we strive to provide the best sports
            facilities for everyone. Experience world-class amenities with us!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
