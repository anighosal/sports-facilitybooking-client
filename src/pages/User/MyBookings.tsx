import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useGetUserBookingsQuery } from "../../redux/api/baseApi";

const MyBookings: React.FC = () => {
  const { data: bookings } = useGetUserBookingsQuery();

  return (
    <div className="text-gray-700 mx-auto">
      <h2>My Bookings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookings?.data?.map((booking: any) => (
          <div
            key={booking._id}
            className="border rounded-lg shadow-lg p-4 flex flex-col items-center"
          >
            <img
              className="w-full h-32 object-cover rounded"
              src={booking?.facility?.image}
              alt={booking?.facility?.name}
            />
            <h3 className="mt-2 text-lg font-semibold">
              {booking?.facility?.name}
            </h3>
            <div className="mt-2 flex space-x-2">
              <Link to={`/user/bookings/${booking._id}`}>
                <Button className="bg-primary text-white">View Details</Button>
              </Link>
              <Button className="bg-red-600 text-white">Cancel</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
