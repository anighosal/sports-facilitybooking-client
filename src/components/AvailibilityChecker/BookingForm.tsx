import axios from "axios";
import React, { useState } from "react";
import PaymentGateway from "./PaymentGateway";

interface BookingFormProps {
  date: Date | null;
  facility: string;
  availableSlots: string[];
}

const BookingForm: React.FC<BookingFormProps> = ({
  date,
  facility,
  availableSlots,
}) => {
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false);

  const handleBooking = async () => {
    if (!selectedSlot) {
      alert("Please select a time slot.");
      return;
    }
    const bookingData = {
      date: date?.toISOString().split("T")[0],
      facility,
      startTime: selectedSlot,
      endTime: selectedSlot,
    };
    try {
      await axios.post("/api/bookings", bookingData);
      setPaymentConfirmed(true);
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Error creating booking");
    }
  };

  return (
    <div>
      <h3>Booking Form</h3>
      <select
        value={selectedSlot}
        onChange={(e) => setSelectedSlot(e.target.value)}
      >
        <option value="">Select a time slot</option>
        {availableSlots.map((slot) => (
          <option key={slot} value={slot}>
            {slot}
          </option>
        ))}
      </select>
      <button onClick={handleBooking}>Confirm Booking</button>
      {paymentConfirmed && (
        <PaymentGateway bookingData={{ date, facility, selectedSlot }} />
      )}
    </div>
  );
};

export default BookingForm;
