import React from 'react';
import { GoogleLogin } from 'react-google-login';

function Googlesignup() {
    const responseGoogle = (response) => {
        console.log(response);
    
        // Check if the user successfully signed in
        if (response && response.profileObj) {
          const user = {
            googleId: response.profileObj.googleId,
            name: response.profileObj.name,
            email: response.profileObj.email,
            imageUrl: response.profileObj.imageUrl,
          };
    
          // Send the user data to your server for signup and authentication
          fetch('/your-server-endpoint', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
          })
            .then((response) => response.json())
            .then((data) => {
              // Handle the response from your server (e.g., store user token, redirect, etc.)
            })
            .catch((error) => {
              // Handle errors, e.g., display an error message to the user
            });
        }
      };
    

  return (
    <div className="App">
      <h1>Google Sign-In Demo</h1>
      <GoogleLogin
        clientId="712525820153-naetp2au8v8fpffj6sh4bvdegqolt53g.apps.googleusercontent.com" // Your Google API client ID
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle} // Optional, handles failure
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
}

export default Googlesignup;
