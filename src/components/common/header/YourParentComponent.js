// YourParentComponent.js
import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const YourParentComponent = () => {
  const [isSigninOpen, setSigninOpen] = useState(false);
  const [isSignupOpen, setSignupOpen] = useState(false);

  const handleSigninClose = () => {
    setSigninOpen(false);
  };

  const handleSignupClose = () => {
    setSignupOpen(false);
  };

  const handleSignupClick = () => {
    setSigninOpen(false);
    setSignupOpen(true);
  };

  return (
    <div>
      {/* Your other components */}
      <Signin onClose={handleSigninClose} onSignupClick={handleSignupClick} />
      <Signup onClose={handleSignupClose} />
    </div>
  );
};

export default YourParentComponent;
