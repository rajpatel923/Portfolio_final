// Modal.js
import React from "react";

const Modal = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
