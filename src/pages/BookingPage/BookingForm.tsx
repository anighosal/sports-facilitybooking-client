// import { Button, Form, Input, notification } from "antd";
// import React from "react";
// import { useCreateBookingMutation } from "../../redux/api/baseApi";

// interface BookingFormProps {
//   facilityId: string;
//   availableSlot: { startTime: string; endTime: string };
// }

// const BookingForm: React.FC<BookingFormProps> = ({
//   facilityId,
//   availableSlot,
// }) => {
//   const [createBooking, { isLoading }] = useCreateBookingMutation();
//   const [form] = Form.useForm();

//   const handleSubmit = async (values: any) => {
//     try {
//       await createBooking({
//         date: values.date,
//         startTime: availableSlot.startTime,
//         endTime: availableSlot.endTime,
//         facility: facilityId,
//         payableAmount: 100,
//       }).unwrap();
//       notification.success({ message: "Booking successful!" });
//     } catch (error) {
//       notification.error({ message: "Booking failed!" });
//     }
//   };

//   return (
//     <Form form={form} onFinish={handleSubmit}>
//       <Form.Item
//         name="date"
//         label="Date"
//         initialValue={availableSlot.startTime}
//       >
//         <Input readOnly />
//       </Form.Item>
//       <Form.Item>
//         <Button type="primary" htmlType="submit" loading={isLoading}>
//           Confirm Booking
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default BookingForm;
