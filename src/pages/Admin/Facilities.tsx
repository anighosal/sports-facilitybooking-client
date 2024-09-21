import { Button, Card, message } from "antd";
import { AiOutlineDelete, AiOutlinePlusCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  useDeleteFacilityMutation,
  useGetFacilitiesQuery,
} from "../../redux/api/baseApi";

const Facilities = () => {
  const { data, isLoading, error } = useGetFacilitiesQuery();
  const [deleteFacility] = useDeleteFacilityMutation();
  const navigate = useNavigate();

  if (isLoading) return <div>Loading facilities...</div>;
  if (error) return <div>Failed to load facilities.</div>;

  const facilities = data?.data || [];
  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this facility?")) {
      try {
        await deleteFacility(id).unwrap();
        message.success("Facility deleted successfully!");
      } catch (error) {
        console.error("Error deleting facility:", error);
        message.error("Failed to delete facility. Please try again.");
      }
    }
  };

  return (
    <div>
      <Button
        onClick={() => navigate("/admin/facility")}
        className="mb-5 bg-primary"
        style={{ marginTop: 16 }}
      >
        <AiOutlinePlusCircle></AiOutlinePlusCircle>
      </Button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {facilities.map((facility) => (
          <Card key={facility._id} title={facility.name} hoverable>
            <img
              className="w-full h-40 object-cover rounded-t-lg mb-4"
              src={facility.image}
              alt=""
            />
            <p>Location: {facility.location}</p>
            <p>Capacity: {facility.capacity}</p>
            <p>Capacity: {facility.pricePerHour}</p>
            <div className="flex justify-between mt-4">
              <Button
                onClick={() => navigate(`/admin/edit/${facility._id}`)}
                className="bg-primary text-white"
              >
                Edit
              </Button>
              <Button
                onClick={() => handleDelete(facility._id)}
                className="text-red-500 hover:text-red-700"
              >
                <AiOutlineDelete />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
