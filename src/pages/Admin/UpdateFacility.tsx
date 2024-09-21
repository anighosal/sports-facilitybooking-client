import { Button, Input, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetFacilitiesQuery,
  useUpdateFacilityMutation,
} from "../../redux/api/baseApi";
import { TFacility } from "../../type/type";

const UpdateFacility: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetFacilitiesQuery();
  const [updateFacility] = useUpdateFacilityMutation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Partial<TFacility>>({
    name: "",
    image: "",
    description: "",
    pricePerHour: 0,
    location: "",
    isDeleted: false,
  });

  useEffect(() => {
    if (data && Array.isArray(data.data)) {
      // Assuming data.data contains the facilities array
      const facility = data.data.find((f: TFacility) => f._id === id);
      if (facility) {
        setFormData(facility);
      } else {
        console.error("Facility not found.");
      }
    }
  }, [data, id]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "pricePerHour" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await updateFacility({ id, data: formData }).unwrap();
      message.success("Facility updated successfully!");
      navigate("/admin/facility"); // Navigate back to the facilities list
    } catch (error) {
      console.error("Error updating facility:", error);
      message.error("Failed to update facility. Please try again.");
    }
  };

  if (isLoading) return <div>Loading facility...</div>;
  if (error) return <div>Failed to load facility.</div>;

  return (
    <div className="w-full mx-auto p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Update Facility
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block mb-1">
            Name:
          </label>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <div className="form-group">
          <label htmlFor="image" className="block mb-1">
            Image URL:
          </label>
          <Input
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description" className="block mb-1">
            Description:
          </label>
          <Input.TextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full"
            rows={4}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pricePerHour" className="block mb-1">
            Price Per Hour:
          </label>
          <Input
            type="number"
            name="pricePerHour"
            value={formData.pricePerHour}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <div className="form-group">
          <label htmlFor="location" className="block mb-1">
            Location:
          </label>
          <Input
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="w-full"
          />
        </div>

        <Button
          htmlType="submit"
          className="w-full bg-primary text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Update Facility
        </Button>
      </form>
    </div>
  );
};

export default UpdateFacility;
