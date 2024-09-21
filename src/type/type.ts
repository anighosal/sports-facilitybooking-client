export type TFacility = {
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
