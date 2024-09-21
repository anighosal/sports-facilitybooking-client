import { Button, Input, message } from "antd";
import React, { useState } from "react";
import {
  useAddFacilityMutation,
  useGetFacilitiesQuery,
} from "../../redux/api/baseApi";
import { TFacility } from "../../type/type";

const AddFacility: React.FC = () => {
  const { data: facilities, refetch } = useGetFacilitiesQuery();
  const [addFacility] = useAddFacilityMutation();

  const [formData, setFormData] = useState<Partial<TFacility>>({
    name: "",
    image: "",
    description: "",
    pricePerHour: 0,
    location: "",
    isDeleted: false,
  });

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
      await addFacility(formData).unwrap();
      message.success("Facility added successfully!");
      setFormData({
        name: "",
        image: "",
        description: "",
        pricePerHour: 0,
        location: "",
        isDeleted: false,
      });

      refetch();
    } catch (error) {
      message.error("Failed to add facility. Please try again.");
    }
  };

  return (
    <div className="w-full mx-auto p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Add Facility</h2>

      {/* Facility Add Form */}
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
          Add Facility
        </Button>
      </form>

      {/* Facility List */}
      {/* <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center mb-6">Facilities</h2>
        {facilities && facilities.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="text-left py-2 px-4">Name</th>
                <th className="text-left py-2 px-4">Location</th>
                <th className="text-left py-2 px-4">Price Per Hour</th>
                <th className="text-left py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {facilities.map((facility) => (
                <tr key={facility.name}>
                  <td className="border px-4 py-2">{facility.name}</td>
                  <td className="border px-4 py-2">{facility.location}</td>
                  <td className="border px-4 py-2">${facility.pricePerHour}</td>
                  <td className="border px-4 py-2">
                    <Button className="mr-2" type="primary">
                      Edit
                    </Button>
                    <Button danger>Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No facilities available.</p>
        )}
      </div> */}
    </div>
  );
};

export default AddFacility;
