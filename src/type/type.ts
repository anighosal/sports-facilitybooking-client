export type TFacility = {
  _id: string;
  name: string;
  image: string;
  description: string;
  pricePerHour: number;
  location: string;
  isDeleted: boolean;
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
