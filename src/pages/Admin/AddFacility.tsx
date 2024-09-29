import { Button, Input, message } from "antd";
import React, { useState } from "react";
import { useAddFacilityMutation } from "../../redux/api/baseApi";
import { useAppDispatch } from "../../redux/hooks";
import { TFacility } from "../../type/type";

const AddFacility: React.FC = () => {
  const [addFacility] = useAddFacilityMutation();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState<Partial<TFacility>>({
    name: "",
    image: "",
    description: "",
    pricePerHour: 0,
    location: "",
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

    console.log("Sending facility data:", formData);

    try {
      const response = await addFacility(formData).unwrap();
      console.log("Response from backend:", response);
      message.success("Facility added successfully!");
      setFormData({
        name: "",
        image: "",
        description: "",
        pricePerHour: 0,
        location: "",
      });
    } catch (error) {
      console.error("Failed to add facility:", error);
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
    </div>
  );
};

export default AddFacility;
