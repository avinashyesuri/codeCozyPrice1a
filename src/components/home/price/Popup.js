import React, { useEffect, useState } from "react";
import "./popup.css";
import { FaRupeeSign } from "react-icons/fa";
import Modal1 from "./Popup2";

const Modal = ({ plan, onClose, priceInfo }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [finalPrice, setFinalPrice] = useState();
  const [mobileNumberError, setMobileNumberError] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [isModalOpen1, setModalOpen1] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  
  useEffect(() => {
    // Calculate final price when priceInfo.price changes
    setFinalPrice(priceInfo.price * 0.18);
  }, [priceInfo.price]);

  const fprice= Math.floor(priceInfo.price+finalPrice);
  const handleMobileNumberChange = (e) => {
    const newMobileNumber = e.target.value;
    setMobileNumber(newMobileNumber);
  
    // Clear the error message when the length becomes 10
    if (newMobileNumber.length === 10) {
      setMobileNumberError("");
    }
  };
  const openModal = () => {
    // Validate mobile number
    if (mobileNumber.length === 0 || mobileNumber.length < 10) {
      setMobileNumberError("* Please enter a valid mobile number.");
    } else {
      setMobileNumberError("");
      setModalOpen(true);
      setModalOpen1(false);
    }
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setModalOpen(false);
    window.location.reload();
  };

  return (
    <>
      {isModalOpen1 && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h6>Selected Plan: {plan}</h6>
            <p>
              Price: <FaRupeeSign /> {priceInfo.price}
            </p>
            <p>Final Price: ${fprice}</p>

            <div>
              <label htmlFor="mobileNumber">Mobile:</label>
              <input
                type="tel"
                id="mobileNumber"
                name="mobileNumber"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
              />
              {mobileNumberError && (
                <p className="error-message" style={{color:"red"}}>{mobileNumberError}</p>
              )}
            </div>
            <p>
              Total Price (including 18% GST): <FaRupeeSign /> {fprice}
            </p>
            <br />
            <button onClick={openModal} disabled={mobileNumberError}>
              Pay Now
            </button>{" "}
            &nbsp;&nbsp;
            <button onClick={onClose} style={{ backgroundColor: "white" }}>
              Close
            </button>
          </div>
        </div>
      )}
      {isModalOpen && (
        <Modal1
          plan={plan}
          priceInfo={fprice}
          onClose={closeModal}
          // Add other necessary props like price and phone number
        />
      )}
    </>
  );
};

export default Modal;
