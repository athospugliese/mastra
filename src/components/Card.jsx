import React from "react";

export default function Card({ children }) {
  return (
    <div className="max-w-md p-8 bg-white rounded-lg shadow-lg">
      {children}
    </div>
  );
}
