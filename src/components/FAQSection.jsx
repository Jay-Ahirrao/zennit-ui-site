import React, { useState, useRef, useEffect } from "react";
import ShinyText from './ShinyText';

// ---------------- FAQ Item ----------------
const FAQItem = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="rounded-xl border border-yellow-400/30 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm shadow-md hover:shadow-yellow-400/10 transition-all duration-300 w-full">
      <button
        className={`flex w-full items-center justify-between p-4 text-left transition-all duration-300 ${isOpen
          ? "bg-gradient-to-r from-yellow-400/20 to-orange-400/20 text-white"
          : "bg-gray-800/50 hover:bg-gray-700/50 text-gray-200 hover:text-white"
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className={`mr-3 text-lg transition-colors duration-300 ${isOpen ? "text-yellow-400" : "text-gray-400 group-hover:text-yellow-400"
            }`}>
            {icon}
          </span>
          <span className="font-semibold text-base">{question}</span>
        </div>
        <span className={`text-xl font-bold transition-all duration-300 ${isOpen ? "text-yellow-400 rotate-180" : "text-gray-400"
          }`}>
          {isOpen ? "−" : "+"}
        </span>
      </button>

      <div
        ref={contentRef}
        style={{
          height: height,
          transition: "height 300ms ease",
        }}
        className="overflow-hidden bg-gradient-to-r from-gray-900/30 to-black/30"
      >
        <div className="text-gray-300 p-4 leading-relaxed text-sm overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

// ---------------- Icons (inline SVGs) ----------------
const BookIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
    <path d="M4 4.5A2.5 2.5 0 016.5 7H20v13H6.5A2.5 2.5 0 014 17.5v-13z" />
  </svg>
);

const BrickWallIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <rect x="3" y="3" width="18" height="6" rx="1" />
    <rect x="3" y="9" width="9" height="6" rx="1" />
    <rect x="12" y="9" width="9" height="6" rx="1" />
    <rect x="3" y="15" width="18" height="6" rx="1" />
  </svg>
);

const TruckIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d="M3 7h13v10H3z" />
    <path d="M16 7h5l1 5v5h-6z" />
    <circle cx="7.5" cy="17.5" r="1.5" />
    <circle cx="17.5" cy="17.5" r="1.5" />
  </svg>
);

const ChildIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx="12" cy="7" r="4" />
    <path d="M5 21v-2a7 7 0 0114 0v2" />
  </svg>
);

// ---------------- FAQ Section ----------------
const FAQSection = () => {
  const faqs = [
    {
      question: "Is this suitable for my child's age group?",
      answer:
        "Absolutely! This book is meant for every child to easily pick up and learn from. The information given in this book is easy for kids to understand and colourful visuals to pair with it!",
      icon: BookIcon,
    },
    {
      question: "Where does the money go?",
      answer:
        "All of the money we earn with the sale of these books goes to the ManRay Foundation, an NGO dedicated to providing knowledge and learning to underprivileged children from under-resourced backgrounds.",
      icon: BrickWallIcon,
    },
    {
      question: "When will I get my copy?",
      answer:
        "We will dispatch your copy as soon as the order is placed. We promise a quick delivery service with our magazine so that your kid can get started with reading as soon as possible!",
      icon: TruckIcon,
    },
    {
      question: "Can my child be featured in the next issue?",
      answer:
        "Yes! We love featuring our young readers. Submit your child's artwork or story through our website for consideration in future issues.",
      icon: ChildIcon,
    },
  ];

  return (
    <section className="mx-auto max-w px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-700 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,215,0,0.1),transparent_50%)] bg-[radial-gradient(circle_at_80%_20%,rgba(255,69,0,0.1),transparent_50%)]"></div>

      <div className="flex flex-col lg:flex-row lg:space-x-12 relative z-10">
        {/* Left Column */}
        <div className="mb-8 lg:mb-0 lg:w-1/3 flex flex-col justify-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent mb-6">

            <ShinyText
              text="FAQs"
              disabled={false}
              speed={4}
              className='custom-class'
            />
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Get to know all the questions that users have for us. If you can't
            find your question here, feel free to contact us directly!
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3 space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              icon={faq.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
