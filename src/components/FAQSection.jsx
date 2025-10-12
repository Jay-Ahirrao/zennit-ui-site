import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import ScrollFloat from './ScrollFloat';
import ShinyText from './ShinyText';

// ---------------- FAQ Item ----------------
const FAQItem = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div className="rounded-xl border border-white/20 bg-gradient-to-r from-white/15 via-white/10 to-black backdrop-blur-lg shadow-md hover:shadow-white/10 transition-all duration-200 w-full">
      <button
        className={`flex w-full items-center justify-between p-4 text-left ${isOpen
          ? "bg-yellow-400/20 text-white"
          : "text-gray-200 hover:text-white"
          }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <span className={`mr-3 text-lg ${isOpen ? "text-yellow-400" : "text-gray-400"}`}>
            {icon}
          </span>
          <span className="font-semibold text-base">{question}</span>
        </div>
        <span
          className={`text-xl font-bold transition-transform duration-150 ease-out ${isOpen ? "text-yellow-400 rotate-180" : "text-gray-400"}`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* ✅ Smooth, fast expand/collapse using max-height instead of measuring height */}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-200 ease-in-out ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="text-gray-300 p-4 leading-relaxed text-sm">{answer}</div>
      </div>
    </div>
  );
};

// ---------------- Icons ----------------
const ShieldIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 2l8 3v7c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l8-3z" />
  </svg>
);
const LockIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <circle cx="12" cy="16" r="1" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);
const EyeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const AlertIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
  </svg>
);

// ---------------- FAQ Section ----------------
const FAQSection = () => {
  const faqs = [
    {
      question: "What is cybersecurity?",
      answer:
        "Cybersecurity protects systems, networks, and programs from digital attacks aimed at stealing or damaging information or disrupting operations.",
      icon: ShieldIcon,
    },
    {
      question: "How can I protect my business from cyber threats?",
      answer:
        "Use strong passwords, enable MFA, update software, train employees, and employ professional cybersecurity services.",
      icon: LockIcon,
    },
    {
      question: "What services do you offer?",
      answer:
        "We offer threat assessment, incident response, audits, employee training, and 24/7 monitoring.",
      icon: EyeIcon,
    },
    {
      question: "What should I do if I suspect a cyber attack?",
      answer:
        "Disconnect affected systems, report incidents, preserve evidence, and call cybersecurity experts immediately.",
      icon: AlertIcon,
    },
  ];

  return (
    <section className="mx-auto px-4 py-20 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <motion.div
        className="flex flex-col lg:flex-row lg:space-x-12 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Column */}
        <div className="mb-8 lg:mb-0 lg:w-1/3 flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: "'PP Pangaia', sans-serif" }}>
            FAQ's
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Get to know all the questions that users have for us. If you can't
            find your question here, feel free to contact us directly!
          </p>
          <button className="px-6 py-3 text-white font-semibold rounded-full hover:shadow transition-colors duration-200 border border-white mt-20 w-full flex items-center justify-center gap-2 group">
            <svg className="w-5 h-5 group-hover:animate-shake" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <ShinyText text="Contact Us" disabled={false} speed={4} />
          </button>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3 space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;
