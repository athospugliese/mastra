import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="mb-4">
          {children}
        </div>
        <button
          onClick={onClose}
          className="bg-primary-100 text-white px-4 py-2 rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Modal;
