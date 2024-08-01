import React, { useState } from 'react';
import './ProductCard.css';
import Modal from './Modal';

const ProductCard = ({ imageUrl, title, description, sellerInfo }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="button-container">
          <button className="contact-button" onClick={openModal}>Contact Seller</button>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        sellerInfo={sellerInfo}
      />
    </div>
  );
};

export default ProductCard;