import React from "react";

export default function ButtonMS({ children, onClick }) {
  return (
    <button
      className="w-full px-4 py-2 text-white bg-primary-100 rounded-lg hover:bg-primary-90 focus:outline-none focus:ring-2 focus:ring-primary-100"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
