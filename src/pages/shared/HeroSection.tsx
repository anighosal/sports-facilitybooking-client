import { useEffect, useState } from "react";

import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel";

const imagesWithText = [
  {
    src: banner1,
    text: "Welcome to Our Event!\nDiscover new adventures with us.\nJoin us for an unforgettable experience.",
  },
  {
    src: banner2,
    text: "Explore Our Offers!\nFind your next adventure.\nExciting times await you.",
  },
  {
    src: banner3,
    text: "Amazing Experiences!\nMake new memories.\nBook your adventure now.",
  },
  {
    src: banner4,
    text: "Reserve Your Spot!\nDon’t miss out on the fun.\nGet ready for an exciting event.",
  },
  {
    src: banner5,
    text: "Join the Fun!\nSecure your place today.\nEnjoy an incredible experience.",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = imagesWithText.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div className="relative w-full h-[600px] overflow-hidden mb-10">
      <Carousel className="w-full h-full">
        <CarouselContent
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imagesWithText.map((item, index) => (
            <CarouselItem
              key={index}
              className="relative w-full flex-shrink-0 h-full"
            >
              <img
                src={item.src}
                alt={`Banner ${index + 1}`}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center p-6">
                <div className="text-white ">
                  <h1 className="text-6xl font-bold mb-2">
                    {item.text.split("\n")[0]}
                  </h1>
                  <h2 className="text-xl mb-1">{item.text.split("\n")[1]}</h2>
                  <h2 className="text-xl">{item.text.split("\n")[2]}</h2>
                </div>
                <a
                  href="#book"
                  className="mt-6 px-6 py-3 bg-primary hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg"
                >
                  Book Now
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-4 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-4 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
};

export default HeroSection;
