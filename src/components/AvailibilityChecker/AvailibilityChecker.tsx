import React, { useState } from "react";
import { useGetFacilitiesQuery } from "../../redux/api/baseApi";

const AvailabilityChecker: React.FC = () => {
  const [selectedFacility, setSelectedFacility] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<string>("");

  const { data, isLoading, error } = useGetFacilitiesQuery();

  const facilities = Array.isArray(data) ? data : [];

  const handleCheckAvailability = () => {
    if (selectedDate && selectedFacility) {
      console.log("Checking availability for:", {
        date: selectedDate,
        facility: selectedFacility,
      });
    } else {
      console.error("Please select a date and facility.");
    }
  };

  return (
    <div className="availability-checker">
      <h3>Check Availability</h3>

      <div className="mb-4">
        <label className="block mb-2">Select Facility:</label>
        {isLoading ? (
          <p>Loading facilities...</p>
        ) : error ? (
          <p>Failed to load facilities</p>
        ) : (
          <select
            value={selectedFacility}
            onChange={(e) => setSelectedFacility(e.target.value)}
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="">-- Select Facility --</option>
            {facilities.map((facility: any) => (
              <option key={facility.id} value={facility.id}>
                {facility.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>

      <button
        onClick={handleCheckAvailability}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Check Availability
      </button>
    </div>
  );
};

export default AvailabilityChecker;
