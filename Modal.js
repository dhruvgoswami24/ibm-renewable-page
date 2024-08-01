import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, sellerInfo }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>Contact Seller</h2>
        <p><strong>Name:</strong> {sellerInfo.name}</p>
        <p><strong>Email:</strong> {sellerInfo.email}</p>
        <p><strong>Phone:</strong> {sellerInfo.phone}</p>
      </div>
    </div>
  );
};

export default Modal;