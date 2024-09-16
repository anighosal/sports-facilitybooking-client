import img1 from "../assets/img1.jpg";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img from "../assets/pc.png";

const Process = () => {
  return (
    <div className="steps-container space-y-10">
      {/* Step 1 */}
      <div className="step flex flex-col md:flex-row items-center  md:items-center gap-6">
        <img
          src={img}
          alt="Explore Facilities"
          className="step-image w-48 h-48 rounded-lg shadow-md"
        />

        <div className="step-content">
          <h3 className="text-xl font-semibold text-gray-800">
            Step 1: Explore Facilities
          </h3>
          <p className="text-gray-600 mt-2">
            Browse a wide range of sports facilities available on the
            <br />
            platform. View details such as location, amenities, and pricing.
          </p>
        </div>
      </div>

      {/* Step 2 */}
      <div className="step flex flex-col md:flex-row items-center  md:items-center gap-6">
        <img
          src={img1}
          alt="Select Facility"
          className="step-image w-48 h-48 rounded-lg "
        />
        <div className="step-content">
          <h3 className="text-xl font-semibold text-gray-800">
            Step 2: Select a Facility
          </h3>
          <p className="text-gray-600 mt-2">
            Choose your desired facility based on your preferences. <br /> Click
            on the facility to proceed with booking.
          </p>
        </div>
      </div>

      {/* Step 3 */}
      <div className="step flex flex-col md:flex-row items-center  md:items-start gap-6">
        <img
          src={img4}
          alt="Choose Time Slot"
          className="step-image w-48 h-48  rounded-lg shadow-md"
        />
        <div className="step-content">
          <h3 className="text-xl font-semibold text-gray-800">
            Step 3: Choose a Time Slot
          </h3>
          <p className="text-gray-600 mt-2">
            Select an available time slot that works best for you. <br /> Our
            real-time calendar will help you find the perfect slot.
          </p>
        </div>
      </div>

      {/* Step 4 */}
      <div className="step flex flex-col md:flex-row items-center  md:items-start gap-6">
        <img
          src={img5}
          alt="Review Booking"
          className="step-image w-48 h-48 rounded-lg shadow-md"
        />
        <div className="step-content">
          <h3 className="text-xl font-semibold text-gray-800">
            Step 4: Review Your Booking
          </h3>
          <p className="text-gray-600 mt-2">
            Before proceeding, review your selected time slot, <br /> facility,
            and pricing details to make sure everything is correct.
          </p>
        </div>
      </div>

      {/* Step 5 */}
      <div className="step flex flex-col md:flex-row items-center  md:items-start gap-6">
        <img
          src={img6}
          alt="Make Payment"
          className="step-imagew-48 h-48 rounded-lg shadow-md"
        />
        <div className="step-content">
          <h3 className="text-xl font-semibold text-gray-800">
            Step 5: Make Payment
          </h3>
          <p className="text-gray-600 mt-2">
            Proceed to our secure payment gateway to complete <br /> the
            booking. We accept all major payment methods.
          </p>
        </div>
      </div>

      {/* Step 6 */}
      <div className="step flex flex-col md:flex-row items-center  md:items-start gap-6">
        <img
          src={img7}
          alt="Confirm Booking"
          className="step-imagew-48 h-48 rounded-lg shadow-md"
        />
        <div className="step-content">
          <h3 className="text-xl font-semibold text-gray-800">
            Step 6: Confirm Booking
          </h3>
          <p className="text-gray-600 mt-2">
            After successful payment, you’ll receive a confirmation <br /> with
            the booking details and instructions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process;
