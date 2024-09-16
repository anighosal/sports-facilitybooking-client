import Calender from "../../pages/Calender";
import Faq from "../../pages/Faq";

import Process from "../../pages/Process";
import TopComments from "../../pages/TopComment";

const faqItems = [
  {
    id: 1,
    question: "What is this website about?",
    answer:
      "This website provides a range of services and information about our products. Our goal is to offer the best solutions to meet your needs and ensure customer satisfaction.",
  },
  {
    id: 2,
    question: "How can I contact support?",
    answer:
      "You can contact support via email at support@example.com or through our contact form available on the contact page of our website.",
  },
];

const BookingProcess = () => {
  return (
    <div className="booking-process max-w-7xl mx-auto px-4 py-8 border rounded-lg mb-10">
      <h2 className="text-center font-bold text-2xl text-gray-800 mb-8">
        How the Booking Process Works
      </h2>
      <div className="flex justify-center items-center gap-5">
        <Process></Process>
        <div className="w-[30%]">
          <Calender year={2024} month={9}></Calender>
          <TopComments></TopComments>
          <Faq items={faqItems}></Faq>
        </div>
      </div>
      <div className="cta-container text-center mt-10">
        <a
          href="#book"
          className="mt-6 px-6 py-3 bg-primary hover:bg-red-600 text-white font-semibold rounded-lg shadow-lg"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default BookingProcess;
