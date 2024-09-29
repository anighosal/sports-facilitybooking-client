import { Button, message } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import {
  useCancelBookingMutation,
  useGetUserBookingsQuery,
} from "../../redux/api/baseApi";

const MyBookings: React.FC = () => {
  const { data: bookings } = useGetUserBookingsQuery();
  const [cancelBooking] = useCancelBookingMutation();

  const handleCancel = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await cancelBooking(id).unwrap();
        message.success("Booking cancelled successfully");
      } catch (error) {
        console.error("Error while cancelling booking:", error);
        message.error("Failed to cancel booking");
      }
    }
  };

  const bookingList = Array.isArray(bookings?.data) ? bookings?.data : [];

  return (
    <div className="text-gray-700 mx-auto">
      <h2>My Bookings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {bookingList.length > 0 ? (
          bookingList.map((booking: any) => (
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
                  <Button className="bg-primary text-white">
                    View Details
                  </Button>
                </Link>
                <Button
                  onClick={() => handleCancel(booking._id)}
                  className="bg-red-600 text-white"
                >
                  Cancel
                </Button>
              </div>
            </div>
          ))
        ) : (
          <p>No bookings found.</p>
        )}
      </div>
    </div>
  );
};

export default MyBookings;
