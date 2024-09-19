import Banner from "./Banner";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const ContactUs = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="flex">
        <ContactForm></ContactForm>
        <ContactMap></ContactMap>
      </div>
    </div>
  );
};

export default ContactUs;
