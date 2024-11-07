import React, { useState } from "react";

const AccordionItem = ({ question, answer, isOpen, handleToggle }) => (
  <div className={`${isOpen ? "bg-gray-100" : ""}`}>
    <div
      className="flex justify-between items-center p-4 cursor-pointer"
      onClick={handleToggle}
    >
      <span className="text-lg font-semibold">{question}</span>
      <button className="ms-5 text-white text-xl bg-green-900 px-3 py-1 rounded">
        {isOpen ? "-" : "+"}
      </button>
    </div>
    {isOpen && <div className="p-4 text-gray-700">{answer}</div>}
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      question: "What types of caregiver services do you offer?",
      answer:
        "We offer a variety of services including personal care, companionship, and respite care.",
    },
    {
      question: "How do I find and hire a caregiver through your platform?",
      answer:
        "You can browse caregivers by location and specialties, and reach out directly to those who suit your needs.",
    },
    {
      question: "Are your caregivers trained and certified?",
      answer:
        "Yes, all our caregivers go through a rigorous training process and are certified.",
    },
    {
      question:
        "What should I expect during the initial consultation with a caregiver?",
      answer:
        "During the consultation, you'll discuss your specific needs and preferences to match with the right caregiver.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container py-10 mb-10 w-[1000px] mx-auto">
      <h2 className="text-2xl mt-10 font-bold mb-4 text-center">
        Your Questions Answered
      </h2>
      <p className="text-center mb-6 mb-10">
        Check out our Q & A section for quick answers to common questions about
        our caregiver services and how to get started.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {data.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg">
            <AccordionItem
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              handleToggle={() => handleToggle(index)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
