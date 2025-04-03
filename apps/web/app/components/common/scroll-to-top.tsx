"use client";
import React from "react";

const ScrollToTop = ({show}: {show: boolean}) => {
  return (
    <div>
      {/* Scroll to Top Button */}
      {show && (
        <button
          className="fixed bottom-8 right-8 bg-surface/70 text-foreground p-3 rounded-full shadow-lg hover:bg-opacity-90 transition-opacity"
          onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
          aria-label="Scroll to top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
