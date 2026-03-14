import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from './ShinyText';

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

// ---------------- FAQ Item ----------------
const FAQItem = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0a0a] transition-all duration-300 w-full overflow-hidden">
      <button
        className={`flex w-full items-center justify-between p-5 text-left transition-colors ${
          isOpen ? "bg-yellow-400/5 text-white" : "text-gray-300 hover:bg-white/5"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <span className={`transition-colors duration-300 ${isOpen ? "text-yellow-400 scale-110" : "text-gray-500"}`}>
            {icon}
          </span>
          <span className="font-semibold text-base tracking-tight">{question}</span>
        </div>
        
        {/* Animated Chevron */}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0, color: isOpen ? "#facc15" : "#6b7280" }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="text-xl"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>

      {/* Smooth Content Expansion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 pb-6 pt-2 text-gray-400 leading-relaxed text-[15px] border-t border-white/5 mx-5">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ---------------- FAQ Section ----------------
const FAQSection = () => {
  const faqs = [
    {
      question: "What is cybersecurity?",
      answer: "Cybersecurity protects systems, networks, and programs from digital attacks aimed at stealing or damaging information or disrupting operations.",
      icon: ShieldIcon,
    },
    {
      question: "How can I protect my business from cyber threats?",
      answer: "Use strong passwords, enable MFA, update software, train employees, and employ professional cybersecurity services.",
      icon: LockIcon,
    },
    {
      question: "What services do you offer?",
      answer: "We offer threat assessment, incident response, audits, employee training, and 24/7 monitoring.",
      icon: EyeIcon,
    },
    {
      question: "What should I do if I suspect a cyber attack?",
      answer: "Disconnect affected systems, report incidents, preserve evidence, and call cybersecurity experts immediately.",
      icon: AlertIcon,
    },
  ];

  return (
    <section className="mx-auto px-4 py-24 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background Gradients for depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 blur-[120px] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Left Column */}
        <div className="mb-12 lg:mb-0 lg:w-1/3 flex flex-col justify-start pt-4">
          <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: "'PP Pangaia', sans-serif" }}>
            FAQ's
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-10">
            Get to know all the questions that users have for us. If you can't
            find your question here, feel free to contact us directly!
          </p>
          
          <button className="px-8 py-4 text-white font-medium rounded-full transition-all duration-300 border border-white/20 hover:border-white hover:bg-white/5 flex items-center justify-center gap-3 group w-fit">
            <svg className="w-5 h-5 group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <ShinyText text="Talk to an Expert" disabled={false} speed={3} />
          </button>
        </div>

        {/* Right Column */}
        <div className="lg:w-2/3 space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQSection;