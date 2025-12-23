"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";

interface FAQAccordionProps {
  question: string;
  answer: string;
  theme?: "light" | "dark" | "female";
}

export default function FAQAccordion({ question, answer, theme = "light" }: FAQAccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const themeStyles = {
    light: {
      container: "bg-white rounded-xl shadow-sm",
      button: "hover:bg-gray-50",
      question: "text-secondary",
      icon: "text-primary",
      answer: "text-gray-600",
    },
    dark: {
      container: "bg-slate-900 border border-slate-700 rounded-lg",
      button: "hover:bg-slate-800",
      question: "text-white",
      icon: "text-male-accent",
      answer: "text-gray-400",
    },
    female: {
      container: "bg-white rounded-xl shadow-sm border border-pink-100",
      button: "hover:bg-pink-50",
      question: "text-gray-800",
      icon: "text-female-pink",
      answer: "text-gray-600",
    },
  };

  const styles = themeStyles[theme];

  return (
    <div className={`${styles.container} overflow-hidden`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors ${styles.button}`}
      >
        <span className={`font-medium pr-4 ${styles.question}`}>{question}</span>
        <HiChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${styles.icon} ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className={`px-6 pb-5 leading-relaxed ${styles.answer}`}>
          {answer}
        </div>
      </div>
    </div>
  );
}
