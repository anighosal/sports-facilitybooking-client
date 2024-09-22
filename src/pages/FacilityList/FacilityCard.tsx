import React from "react";
import { Link } from "react-router-dom";
import { TFacility } from "../../type/type";

interface FacilityCardProps {
  facility: TFacility;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  return (
    <div className="facility-card bg-white shadow-md rounded-lg p-4">
      <img
        src={facility.image}
        alt={facility.name}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />

      <h3 className="text-lg font-semibold mb-2 text-gray-700">
        {facility.name}
      </h3>

      <p className="text-gray-600 mb-4">
        Price per hour: ${facility.pricePerHour}
      </p>

      <Link
        to={`/facility/${facility._id}`}
        className="text-white bg-primary hover:bg-red-700 px-4 py-2 rounded-lg"
      >
        View Details
      </Link>
    </div>
  );
};

export default FacilityCard;
