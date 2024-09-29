import { useParams } from "react-router-dom";
import { useGetUserBookingsByIdQuery } from "../../redux/api/baseApi";

const BookingDetails: React.FC = () => {
  const { id }: any = useParams<{ id: string }>();
  const { data }: any = useGetUserBookingsByIdQuery(id);
  console.log(data);

  return (
    <div className="flex justify-center items-center w-full bg-gray-100 ">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        {data?.data?.facility ? (
          <div>
            <img
              className="w-full h-48 object-cover"
              src={data?.data?.facility?.image}
              alt={data?.data?.facility?.name}
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold  text-gray-700">
                Name:{" "}
                <span className="text-primary">
                  {data?.data?.facility?.name}
                </span>
              </h3>
              <p className="text-lg font-semibold text-gray-700">
                Location:{" "}
                <span className="text-primary">
                  {data?.data?.facility?.location}
                </span>
              </p>

              <p className="text-lg font-semibold text-gray-700">
                Description:{" "}
                <span className="text-primary">
                  {data?.data?.facility?.description}
                </span>
              </p>
              <p className="text-lg font-semibold text-red-500">
                Price: ${data?.data?.facility?.pricePerHour}
              </p>
              <p className="text-gray-700 text-lg mt-2">
                Date: {data?.data?.date}
              </p>
              <p className="text-green-700 ">
                Start Time: {data?.data?.startTime}
              </p>
              <p className="text-green-700 ">End Time: {data?.data?.endTime}</p>
            </div>
          </div>
        ) : (
          <div className="p-6 text-gray-600">No facility found.</div>
        )}
      </div>
    </div>
  );
};

export default BookingDetails;
