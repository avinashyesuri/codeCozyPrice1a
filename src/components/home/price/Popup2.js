import React, { useEffect, useState } from "react";
import "./popup.css"
import { FaRupeeSign } from "react-icons/fa";
const Modal1 = ({ plan, onClose,priceInfo }) => {
    const handlePaymentClick = () => {
        // Refresh the window
        alert("Your Payment Done Successfully")
        window.location.reload();
      };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
      <h2>Payment Gateway</h2>
        <p>You are about to make a payment for the {plan} plan.</p>
        <p>
          Total Amount: <FaRupeeSign /> {priceInfo}
        </p>
        <button onClick={handlePaymentClick}>Make Payment</button> &nbsp;&nbsp;
        <button onClick={onClose}>Close</button>
        
      </div>
      
    </div>
  );
};

export default Modal1;
