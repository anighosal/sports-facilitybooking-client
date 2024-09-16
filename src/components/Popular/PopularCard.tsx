import React from "react";

interface Facility {
  id: number;
  name: string;
  image: string;
  description: string;
}

interface PopularCardProps {
  facility: Facility;
}

const PopularCard: React.FC<PopularCardProps> = ({ facility }) => {
  return (
    <div className=" shadow-lg rounded-lg overflow-hidden ">
      <img
        src={facility.image}
        alt={facility.name}
        className="w-full h-[300px] object-cover p-5"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
        <p className="text-gray-600">{facility.description}</p>
      </div>
    </div>
  );
};

export default PopularCard;
