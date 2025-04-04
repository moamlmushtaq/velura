"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <motion.button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-6 right-6 bg-gradient-to-br from-purple-600 to-purple-800 text-white p-3 rounded-full shadow-xl transition-all duration-300 z-[1000] backdrop-blur-md border border-purple-500/40 hover:shadow-purple-700/40 ${
        isVisible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.75 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="الرجوع إلى الأعلى"
    >
      {/* SVG أيقونة السهم للأعلى */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </motion.button>
  );
}
