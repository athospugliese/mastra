import React from "react";

export default function Logo(){
  return (
    <div className="mb-8 flex justify-center">
      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
        {/* Substitua pela sua logo personalizada */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white">
          <path fillRule="evenodd" d="M12 2a10 10 0 100 20 10 10 0 000-20zm-6 9a1 1 0 112 0 4 4 0 118 0 1 1 0 11-2 0 2 2 0 10-4 0 1 1 0 01-2 0z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};
