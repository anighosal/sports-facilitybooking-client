import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetFacilityDetailsQuery } from "../../redux/api/baseApi";

const FacilityDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data }: any = id ? useGetFacilityDetailsQuery(id) : { data: null };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        {data?.data ? (
          <div>
            <img
              className="w-full h-48 object-cover"
              src={data.data.image}
              alt={data.data.name}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">
                {data.data.name}
              </h3>
              <p className="text-gray-800 mt-1">
                Location: {data.data.location}
              </p>
              <p className="text-lg font-semibold text-gray-700 mt-4">
                Price: ${data.data.pricePerHour}
              </p>
              <p className="text-gray-700 mt-2">{data.data.description}</p>

              <button
                onClick={() => navigate("/booking")}
                className="mt-4 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition"
              >
                Book Now
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 text-gray-600">No facility found.</div>
        )}
      </div>
    </div>
  );
};

export default FacilityDetails;
