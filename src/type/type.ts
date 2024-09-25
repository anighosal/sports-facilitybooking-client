export type TFacility = {
  _id: string;
  name: string;
  image: string;
  description: string;
  pricePerHour: number;
  location: string;
  isDeleted: boolean;
};

export type TBooking = {
  _id: string | undefined;
  date: string;
  data: string;
  startTime: string;
  endTime: string;
  user: string;
  facility: string;
  payableAmount: number;
  isBooked: "confirmed" | "unconfirmed" | "canceled";
};

export interface User {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: "admin" | "user";
}

export type TAdmin = {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
};
