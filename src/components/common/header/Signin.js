// Signin.js
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import "./Signin.css";

const Signin = ({  onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = () => {
    // Implement your signin logic here
      console.log("Signing in with:", email, password);
    // Close the signin popup
    // if (username.trim() !== "") {
    
    onClose();

    alert("Invalid credentials. Please try again.");
     
  };

  const handleSignupClick = (e) => {
    // Close the signin popup and stop the event propagation
    onClose();
    e.stopPropagation();
  };
  return (
    <div className="signin-container">
      <div className="signin-content">
        <h2>Sign In</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSignin}>Sign In</button>
        {/* <p>Don't have an account? <span onClick={onClose}>Sign up here</span></p> */}
        {/* Don't have an account? <Link to="/signup"  onClick={onClose}>Sign up here</Link> */}
        <p>
          Don't have an account?{" "}
          <Link to="/signup" onClick={handleSignupClick}>
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;



