const PaymentGateway = ({ bookingData }: any) => {
  const handlePayment = () => {
    alert("Payment integration goes here");
  };

  return (
    <div>
      <h3>Payment</h3>
      <button onClick={handlePayment}>Pay Now</button>
      <p>Booking Date: {bookingData.date?.toString()}</p>
      <p>Facility ID: {bookingData.facility}</p>
      <p>Time Slot: {bookingData.selectedSlot}</p>
    </div>
  );
};

export default PaymentGateway;
