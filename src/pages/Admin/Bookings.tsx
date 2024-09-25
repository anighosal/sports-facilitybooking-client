import { useGetBookingsQuery } from "../../redux/api/baseApi";
import { useAppDispatch } from "../../redux/hooks";

const Bookings: React.FC = () => {
  const { data, error, isLoading } = useGetBookingsQuery();
  const dispatch = useAppDispatch();

  const bookings = data?.data || [];

  if (isLoading) return <p>Loading bookings...</p>;
  if (error) return <p>Error loading bookings</p>;

  const getStatusLabel = (status: string | undefined) => {
    switch (status) {
      case "confirmed":
        return "Confirmed";
      case "canceled":
        return "Canceled";
      default:
        return "Pending";
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4 text-gray-700">All Bookings</h2>

      {bookings.length > 0 ? (
        <table className="min-w-full table-auto bg-white text-gray-700">
          <thead>
            <tr className="">
              <th className="px-4 py-2">User</th>
              <th className="px-4 py-2">Facility</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking: any) => (
              <tr key={booking._id} className="border-t">
                <td className="px-4 py-2">{booking.user?.name || "N/A"}</td>
                <td className="px-4 py-2">{booking.facility?.name || "N/A"}</td>
                <td className="px-4 py-2">
                  {new Date(booking.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2">{getStatusLabel(booking.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No bookings found.</p>
      )}
    </div>
  );
};

export default Bookings;
