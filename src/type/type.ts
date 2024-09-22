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
  role: "admin" | "user";
}

export interface TAdmin {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
}
