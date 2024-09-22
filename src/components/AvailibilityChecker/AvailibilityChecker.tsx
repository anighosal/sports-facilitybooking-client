import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BookingForm from "./BookingForm";

const AvailabilityChecker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [facility, setFacility] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  const checkAvailability = async () => {
    if (!selectedDate || !facility) {
      alert("Please select a date and facility.");
      return;
    }
    const formattedDate = selectedDate.toISOString().split("T")[0];
    try {
      const response = await axios.get(
        `/api/check-availability?date=${formattedDate}&facility=${facility}`
      );
      setAvailableSlots(response.data.availableSlots);
      setShowForm(true);
    } catch (error) {
      console.error("Error checking availability:", error);
      alert("Error checking availability");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Check Facility Availability</h2>
      <div className="mb-4">
        <label className="block mb-2">Select Date:</label>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="yyyy-MM-dd"
          className="border border-gray-300 p-2 rounded w-full"
          placeholderText="Select a date"
          popperClassName="z-50"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Facility ID:</label>
        <input
          type="text"
          placeholder="Enter Facility ID"
          value={facility}
          onChange={(e) => setFacility(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
        />
      </div>
      <button
        onClick={checkAvailability}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Check Availability
      </button>
      {availableSlots.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold">Available Time Slots</h3>
          <ul className="list-disc pl-5">
            {availableSlots.map((slot) => (
              <li key={slot}>{slot}</li>
            ))}
          </ul>
          {showForm && (
            <BookingForm
              date={selectedDate}
              facility={facility}
              availableSlots={availableSlots}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AvailabilityChecker;
