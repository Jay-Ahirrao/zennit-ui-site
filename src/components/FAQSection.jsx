import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from './ShinyText';

const FAQItem = ({ question, answer, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-xl border border-white/10 bg-[#0a0a0a] shadow-md transition-all duration-300 w-full overflow-hidden">
      <button
        className={`flex w-full items-center justify-between p-5 text-left transition-colors ${
          isOpen ? "bg-white/5 text-yellow-400" : "text-gray-200 hover:bg-white/5"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-4">
          <span className={`transition-colors ${isOpen ? "text-yellow-400" : "text-gray-500"}`}>
            {icon}
          </span>
          <span className="font-medium text-base tracking-tight">{question}</span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="text-gray-500"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="px-5 pb-5 pt-0 text-gray-400 leading-relaxed text-sm border-t border-white/5 mt-2">
              <div className="pt-4">{answer}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default FAQSection; 