
import React, { useState } from "react";
import './Login.css'
// import SocialMediaIcons from "./SocialMediaIcons";
const Login = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleLogin = () => {
    
    if (username.trim() !== "") {
      onLogin(); // Call the onLogin prop to update the login status in the Header
      onClose(); // Close the login popup
    } else {
      // Handle authentication failure (optional)
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-popup">
      <div className="login-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        
      </div>
    </div>
    
  );
};

  

export default Login;
