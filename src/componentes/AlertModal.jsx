import React from "react";
import "./AlertModal.css";

const AlertModal = ({ message, onClose }) => {
  return (
    <div className="fixed w-3/4 top-3/4 left-1/2 rounded -translate-x-1/2 -translate-y-1/2 bg-morado-900 p-4 border border-morado-700 shadow-xl animate-in fade-in duration-500 slide-in-from-bottom">
      <div className="flex justify-between mx-9 my-auto items-center gap-6 text-center text-morado-300">
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default AlertModal;
