import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularCard from "./PopularCard";

const Popular: React.FC = () => {
  const [facilities, setFacilities] = useState<any[]>([]);

  useEffect(() => {
    const fetchFacilities = async () => {
      const response = await fetch("/popular.json");
      const data = await response.json();
      setFacilities(data);
    };

    fetchFacilities();
  }, []);

  return (
    <div className="popular-section mb-10">
      <h2 className="text-center text-2xl font-bold mb-8 text-gray-700">
        Popular Facilities
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
      >
        {facilities.map((facility) => (
          <SwiperSlide key={facility.id}>
            <PopularCard facility={facility} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Popular;
