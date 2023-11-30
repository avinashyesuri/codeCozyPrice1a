import React from "react";
import "./Signup.css";
import Googlesignup from "./Googlesign";

const Signup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2 className="hsign">Sign Up</h2>
        <div className="mobile-number-input">
          <input type="text" placeholder="Mobile Number" />
        </div>
        <div className="or-divider">
          <span>OR</span>
        </div>
        <Googlesignup/>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Signup;
