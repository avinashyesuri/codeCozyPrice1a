// import React, {useState} from 'react'
// import '../home/price/popup.css'

// const PropPopup2 = ({ plan, onClose }) => {
//     const [mobileNumber, setMobileNumber] = useState("");
//     const [mobileNumberError, setMobileNumberError] = useState("");

//     const handleMobileNumberChange = (e) => {
//         const newMobileNumber = e.target.value;
//         setMobileNumber(newMobileNumber);
//         if (newMobileNumber.length === 10) {
//             setMobileNumberError("");
//           }
//     }
//     const handlePaymentClick = () => {
//         // Refresh the window
//         alert("Your Payment Done Successfully")
//         window.location.reload();
//       };
//   return (
//     <div className="modal-overlay">
//     <div className="modal-content">
//       <h6>Selected Plan: {plan}</h6>
//       <div>
//         <label htmlFor="mobileNumber">Mobile:</label>
//         <input
//           type="tel"
//           id="mobileNumber"
//           name="mobileNumber"
//           value={mobileNumber}
//           onChange={handleMobileNumberChange}
//         />
//         {mobileNumberError && (
//           <p className="error-message" style={{color:"red"}}>{mobileNumberError}</p>
        
//         )}
//         <button onClick={handlePaymentClick}>Click meh?</button>
//         <button onClick={onClose}>Click meh?</button>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default PropPopup2