import React from "react";
import "./AlertModal.css";

const AlertModal = ({ message, onClose }) => {
  return (
    <div className="alert-modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default AlertModal;
