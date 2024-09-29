import React from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

const Faq: React.FC<FAQProps> = ({ items }) => {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      {items.map((item) => (
        <div
          className="bg-white shadow-lg"
          key={item.id}
          style={{
            marginBottom: "20px",
            padding: "10px",
            borderBottom: "1px solid #ddd",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "10px" }}>
            {item.question}
          </div>
          <p style={{ margin: 0 }}>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Faq;
