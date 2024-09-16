import BookingProcess from "../../components/BookingProcess/BookingProcess";
import Popular from "../../components/Popular/Popular";
import Testimonial from "../../components/Testimonial/Testimonial";

import Special from "../Special";

const Home = () => {
  return (
    <div>
      <Popular></Popular>
      <Testimonial></Testimonial>
      <BookingProcess></BookingProcess>
      <Special></Special>
    </div>
  );
};

export default Home;
