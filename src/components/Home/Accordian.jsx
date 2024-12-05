import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

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
    {
      question: "What happens if the caregiver is unavailable?",
      answer:
        "We ensure continuity of care by providing a qualified substitute caregiver if your assigned caregiver is unavailable.",
    },
    {
      question: "Can I adjust or cancel services after booking?",
      answer:
        "Yes, you can adjust or cancel services with prior notice as per our terms and conditions.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container p-5 md:py-[64px] mb-20 lg:w-[1000px] mx-auto">
      <h2 className="header-text mt-10 font-bold mb-4 text-center">
        Your Questions Answered
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <div>
          <div
            className={`${
              openIndex === 0 ? "bg-gray-100" : ""
            } shadow-md rounded-lg mb-10 min-h-[100px] flex flex-col items-center justify-center`}
          >
            <div
              className="flex justify-between w-full items-center py-4 px-10 cursor-pointer"
              onClick={() => handleToggle(0)}
            >
              <span className="text-lg font-semibold">{data[0].question}</span>
              <button className="ms-5 text-white bg-green-900 px-3 py-2 rounded">
                {openIndex === 0 ? <FaMinus size={10} /> : <FaPlus size={10} />}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-1000 mt-3 ${
                openIndex === 0 ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                transitionProperty: "max-height",
                overflow: "hidden",
              }}
            >
              <div className="py-4 px-10 text-gray-700">{data[0].answer}</div>
            </div>
          </div>

          {/* ____________________________________________ */}
          <div
            className={`${
              openIndex === 1 ? "bg-gray-100" : ""
            } shadow-md rounded-lg mb-10 min-h-[100px] flex flex-col items-center justify-center`}
          >
            <div
              className="flex w-full justify-between items-center py-4 px-10 cursor-pointer"
              onClick={() => handleToggle(1)}
            >
              <span className="text-lg font-semibold">{data[1].question}</span>
              <button className="ms-5 text-white bg-green-900 px-3 py-2 rounded">
                {openIndex === 1 ? <FaMinus size={10} /> : <FaPlus size={10} />}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-1000 mt-3 ${
                openIndex === 1 ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                transitionProperty: "max-height",
                overflow: "hidden",
              }}
            >
              <div className="py-4 px-10 text-gray-700">{data[1].answer}</div>
            </div>
          </div>
          <div
            className={`${
              openIndex === 4 ? "bg-gray-100" : ""
            } shadow-md rounded-lg mb-10 min-h-[100px] flex flex-col items-center justify-center`}
          >
            <div
              className="flex w-full justify-between items-center py-4 px-10 cursor-pointer"
              onClick={() => handleToggle(4)}
            >
              <span className="text-lg font-semibold">{data[4].question}</span>
              <button className="ms-5 text-white bg-green-900 px-3 py-2 rounded">
                {openIndex === 4 ? <FaMinus size={10} /> : <FaPlus size={10} />}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-1000 mt-3 ${
                openIndex === 4 ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                transitionProperty: "max-height",
                overflow: "hidden",
              }}
            >
              <div className="py-4 px-10 text-gray-700">{data[4].answer}</div>
            </div>
          </div>
        </div>
        {/* _____________________________________________________________________________________ */}
        <div>
          <div
            className={`${
              openIndex === 2 ? "bg-gray-100" : ""
            } shadow-md rounded-lg mb-10 min-h-[100px] flex flex-col items-center justify-center`}
          >
            <div
              className="flex w-full justify-between items-center py-4 px-10 cursor-pointer"
              onClick={() => handleToggle(2)}
            >
              <span className="text-lg font-semibold">{data[2].question}</span>
              <button className="ms-5 text-white bg-green-900 px-3 py-2 rounded">
                {openIndex === 2 ? <FaMinus size={10} /> : <FaPlus size={10} />}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-1000 mt-3 ${
                openIndex === 2 ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                transitionProperty: "max-height",
                overflow: "hidden",
              }}
            >
              <div className="py-4 px-10 text-gray-700">{data[2].answer}</div>
            </div>
          </div>
          <div
            className={`${
              openIndex === 3 ? "bg-gray-100" : ""
            } shadow-md rounded-lg mb-10 min-h-[100px] flex flex-col items-center justify-center`}
          >
            <div
              className="flex w-full justify-between items-center py-4 px-10 cursor-pointer"
              onClick={() => handleToggle(3)}
            >
              <span className="text-lg font-semibold">{data[3].question}</span>
              <button className="ms-5 text-white bg-green-900 px-3 py-2 rounded">
                {openIndex === 2 ? <FaMinus size={10} /> : <FaPlus size={10} />}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-1000 mt-3 ${
                openIndex === 3 ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                transitionProperty: "max-height",
                overflow: "hidden",
              }}
            >
              <div className="py-4 px-10 text-gray-700">{data[3].answer}</div>
            </div>
          </div>

          <div
            className={`${
              openIndex === 5 ? "bg-gray-100" : ""
            } shadow-md rounded-lg mb-10 min-h-[100px] flex flex-col items-center justify-center`}
          >
            <div
              className="flex w-full justify-between items-center py-4 px-10 cursor-pointer"
              onClick={() => handleToggle(5)}
            >
              <span className="text-lg font-semibold">{data[5].question}</span>
              <button className="ms-5 text-white bg-green-900 px-3 py-2 rounded">
                {openIndex === 5 ? <FaMinus size={10} /> : <FaPlus size={10} />}
              </button>
            </div>
            <div
              className={`overflow-hidden transition-all duration-1000 mt-3 ${
                openIndex === 5 ? "max-h-screen" : "max-h-0"
              }`}
              style={{
                transitionProperty: "max-height",
                overflow: "hidden",
              }}
            >
              <div className="py-4 px-10 text-gray-700">{data[5].answer}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
