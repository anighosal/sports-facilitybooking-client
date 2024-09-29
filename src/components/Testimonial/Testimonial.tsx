import React, { useEffect, useState } from "react";

interface Testimonial {
  name: string;
  image: string;
  rating: number;
  description: string;
}

const Testimonial: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setTestimonials(data.testimonials));
  }, []);

  return (
    <div className="mb-10">
      <h2 className="text-center font-bold text-2xl text-gray-700">
        What Our Client Say
      </h2>
      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white  rounded-lg p-6 text-center max-w-sm pt-16 border border-gray-300"
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                className="w-24 h-24 rounded-full object-cover border-4 border-primary"
                src={testimonial.image}
                alt={testimonial.name}
              />
            </div>

            <h3 className="text-lg font-semibold mt-12">{testimonial.name}</h3>
            <p className="text-yellow-500 mt-2">
              {"⭐".repeat(testimonial.rating)}
            </p>
            <p className="mt-4 text-gray-600">{testimonial.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
