import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-green-700 transition duration-300"
          onClick={scrollToTop}
        >
          <FaArrowUp size={24} />
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
