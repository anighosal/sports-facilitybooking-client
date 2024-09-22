import React from "react";
import AvailabilityChecker from "../../components/AvailibilityChecker/AvailibilityChecker";

const BookingPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <AvailabilityChecker></AvailabilityChecker>
    </div>
  );
};

export default BookingPage;
