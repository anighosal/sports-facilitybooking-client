import { useGetFacilitiesQuery } from "../../redux/api/baseApi";
import FacilityCard from "./FacilityCard";

const FacilityList = () => {
  const { data, isLoading, error } = useGetFacilitiesQuery();

  if (isLoading) return <div>Loading facilities...</div>;
  if (error) return <div>Failed to load facilities.</div>;

  const facilities = data?.data || [];

  return (
    <div className="mt-10">
      <h2 className="text-gray-700 text-2xl font-bold text-center">
        Here All Facility
      </h2>
      <div className="facility-list-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {facilities.map((facility) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default FacilityList;
