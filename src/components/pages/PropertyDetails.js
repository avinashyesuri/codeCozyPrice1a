
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { list } from '../data/Data.js';
// import './PropertyDetails.css'; // Import your CSS file

// const PropertyDetails = () => {
//   const { id } = useParams();
//   const property = list.find(item => item.id === parseInt(id));

//   if (!property) {
//     return <div>Property not found</div>;
//   }

//   const {
//     cover,
//     category,
//     location,
//     name,
//     price,
//     type,
//     adId,
//     salePrice,
//     city,
//     time,
//     added,
//     regularPrice,
//     state,
//     views,
//     description,
//   } = property;

//   return (
//     <div>
//       <img className="property-details-img" src={cover} alt={name} />

//       <table className="property-details-table">
//         <tbody>
//           <tr>
//             <td>Name:</td>
//             <td>{name}</td>
//           </tr>
//           <tr>
//             <td>Location:</td>
//             <td>{location}</td>
//           </tr>
//           <tr>
//             <td>Category:</td>
//             <td>{category}</td>
//           </tr>
//           <tr>
//             <td>Price:</td>
//             <td>{price}</td>
//           </tr>
//           <tr>
//             <td>Type:</td>
//             <td>{type}</td>
//           </tr>
//           <tr>
//             <td>Ad ID:</td>
//             <td>{adId}</td>
//           </tr>
//           <tr>
//             <td>Sale Price:</td>
//             <td>{salePrice}</td>
//           </tr>
//           <tr>
//             <td>City:</td>
//             <td>{city}</td>
//           </tr>
//           <tr>
//             <td>Time:</td>
//             <td>{time}</td>
//           </tr>
//           <tr>
//             <td>Added:</td>
//             <td>{added}</td>
//           </tr>
//           <tr>
//             <td>Regular Price:</td>
//             <td>{regularPrice}</td>
//           </tr>
//           <tr>
//             <td>State:</td>
//             <td>{state}</td>
//           </tr>
//           <tr>
//             <td>Views:</td>
//             <td>{views}</td>
//           </tr>
         
//           {/* Add more details as needed */}
//         </tbody>

//       </table>
//       <div className="description-box">
//         <h3>Description:</h3>
//         <p>{description}</p>
//       </div>
//       <div className="comments-box">
//         <h3>Comments:</h3>
//         {/* You can map through an array of comments here */}
//         {/* For simplicity, I'm using a static comment */}
//         <div className="comment">
//           <p>John Doe: This property looks amazing!</p>
//         </div>

//         {/* Add an input field for new comments */}
//         <input type="text" placeholder="Add a comment..." />
//         <button>Submit</button>
//       </div>
//     </div>
//   );
// };

// export default PropertyDetails;

import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { list } from '../data/Data.js';
import './PropertyDetails.css'; // Import your CSS file
import { FcFlashOn } from "react-icons/fc";
import { FaBookmark } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";
import { MdBorderColor, MdVerified } from "react-icons/md";
import '../home/recent/recent.css'
import RecentCard2 from '../home/recent/RecentCard2.jsx';
import {Link} from 'react-router-dom'


const PropertyDetails = () => {

  const { id } = useParams();
  const property = list.find(item => item.id === parseInt(id));

/*here it is the pop up code using CGPT*/ 
// State for phone number, OTP, and popup visibility
const [phoneNumber, setPhoneNumber] = useState('');
const [phoneNumberError, setPhoneNumberError] = useState('');
const [otp, setOtp] = useState('');
const [isContactDetailsVisible, setContactDetailsVisible] = useState(true);
const [isOtpPopupOpen, setOtpPopupOpen] = useState(false);
const [isOwnerDetailsVisible, setOwnerDetailsVisible] = useState(false);

const [chatBox,setchatBox] = useState("")
const [isChatBoxVisible, setChatBoxVisible] = useState(true);
const [isMsgPopupOpen, setMsgPopupOpen] = useState(false);
const handlePhoneNumberSubmit = () => {
  // Validate phone number
  if (phoneNumber.length !== 10) {
    setPhoneNumberError('* Please enter a valid 10-digit phone number.');
    return;
  }

  // Clear previous error message
  setPhoneNumberError('');



  // TODO: Implement OTP generation logic here
  // For simplicity, generating a random 6-digit OTP
  const generatedOtp = Math.floor(100000 + Math.random() * 900000);
  setOtp(generatedOtp.toString());

  // close the input and Open the OTP popup
  setContactDetailsVisible(false);
  setOtpPopupOpen(true);
};

const closeOtpPopup = () => {
  // Close the OTP popup and clear OTP
  setOtpPopupOpen(false);
  setContactDetailsVisible(false);
  setOtp('');
  alert('verification Done!')
  setOwnerDetailsVisible(true);
};

const closeDetailspopup =()=>{
  setOwnerDetailsVisible(false)
  setOtpPopupOpen(false);
  setOtp('');
  setContactDetailsVisible(true);

}
const handleChatbox=()=>{
  setChatBoxVisible(false)
  setMsgPopupOpen(true)
}
const handleBackBtn = ()=>{
  setMsgPopupOpen(false)
  setchatBox('')
  setChatBoxVisible(true)
}
const handleSendBtn = ()=>{
alert("Pleased with ur interest")
setMsgPopupOpen(false)
setchatBox('')
setChatBoxVisible(true)
}

  if (!property) {
    return <div>Property not found</div>;
  }

  const {
    cover,
    category,
    location,
    name,
    price,
    type,
    adId,
    salePrice,
    city,
    time,
    added,
    regularPrice,
    state,
    views,
    description,
  } = property;

  return (
    <div className='WholeContainer'>
        <div className='SubWholeContainer'>
          <div className='propertyOverSty'> 
            <div>
            <img className="property-details-img" src={cover} alt={name} />

            {/* First Table - Property Details */}
            <table className="property-details-table">
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td>Location:</td>
                  <td>{location}</td>
                </tr>
                <tr>
                  <td>Category:</td>
                  <td>{category}</td>
                </tr>
                <tr>
                  <td>Price:</td>
                  <td>{price}</td>
                </tr>
                <tr>
                  <td>Type:</td>
                  <td>{type}</td>
                </tr>
              </tbody>
            </table>

            {/* Second Table - Additional Details */}
            <table className="additional-details-table">
              <tbody>
                <tr>
                  <td>Ad ID:</td>
                  <td>{adId}</td>
                </tr>
                <tr>
                  <td>Sale Price:</td>
                  <td>{salePrice}</td>
                </tr>
                <tr>
                  <td>City:</td>
                  <td>{city}</td>
                </tr>
                <tr>
                  <td>Time:</td>
                  <td>{time}</td>
                </tr>
                <tr>
                  <td>Added:</td>
                  <td>{added}</td>
                </tr>
                <tr>
                  <td>Regular Price:</td>
                  <td>{regularPrice}</td>
                </tr>
                <tr>
                  <td>State:</td>
                  <td>{state}</td>
                </tr>
                <tr>
                  <td>Views:</td>
                  <td>{views}</td>
                </tr>
              </tbody>
            </table>

            {/* Description Section */}
            <div className="description-box">
              <h3>Description:</h3>
              <p>{description}</p>
            </div>

            {/* Comments Section */}
            <div className="comments-box">
              <h3>Comments:</h3>
              {/* You can map through an array of comments here */}
              {/* For simplicity, I'm using a static comment */}
              <div className="comment">
                <p>John Doe: This property looks amazing!</p>
              </div>

              {/* Add an input field for new comments */}
              <input type="text" placeholder="Add a comment..." />
              <button>Submit</button>
            </div>
            </div>
          </div>
          <div className='propertyOverSty1'>
              <div>
                <iframe width="100%" height="700" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=5698%20Zirak%20Road,%20NewYork+(Your%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/sport-gps/">fitness tracker</a></iframe>
              </div>
            
              <div className="mainCard">
                  <div className='card1'>
                        <p> <FcFlashOn style={{fontSize:"20px", marginBottom:"-4px"}}/> You have a fine taste. This property is great!</p>
                  </div>

                  <div>
                      <div className='card2'>
                          <p style={{marginTop:"15px"}}>{salePrice}</p>
                          <button className='subb1'>{category}</button>
                          <button  className='subb2'><FaBookmark />   Add to wishlist</button>
                      </div>
                      <hr/>
                      <div className='card3'>
                          <div className='subcard3'><FaUserSecret style={{fontSize:"40px", marginBottom:"-4px"}} /></div>
                        <div style={{margin:"14px 16px"}}>
                            <h3 className='sub'>Null verified <MdVerified /></h3>
                            <p className='subp1'>Memeber since {added} </p>
                            <p className='subp2'>See All Ads</p>         
                        </div>
                      </div>
                      <hr/>
                    
                      <div className='card4'>
                      {isContactDetailsVisible && (  
                       <div>
                        <h1 style={{fontSize:"16px"}}>Contact Details:</h1>
                        <input style={{backgroundColor:"rgb(177, 177, 180)"}} type="text" placeholder="Enter your number"
                          value={phoneNumber}
                          onChange={(e)=> setPhoneNumber(e.target.value)}
                        />                       
                         {phoneNumberError && (
                        <p style={{ color: 'red', marginBottom:"10px" }}>{phoneNumberError}</p>
                        )}   
                        <button onClick={handlePhoneNumberSubmit}>submit</button>
                        
                      </div>)}
                  

                      {isOtpPopupOpen && (
                        <div className="otp-popup">
                          <h2 style={{fontSize:"16px", marginTop:"15px"}}>Enter OTP:</h2>
                          <input type="text" placeholder="Enter OTP" value ={otp} onChange={(e) => setOtp(e.target.value)} />
                          <button onClick={closeOtpPopup}>Verify</button>
                        </div>
                      )}
                      {isOwnerDetailsVisible && (
                        <div className="Owner-popup">
                          <p>Name: <span style={{ color:"grey"}}>Avinash</span></p>
                          <p>Phone number: <span style={{ color:"grey"}}>8978422334</span></p>
                          <p>Address info: <span style={{color:"grey"}}>Bhopal, madhya pradesh, 462202</span></p>
                          <button onClick={closeDetailspopup} style={{ marginTop:"15px"}} >close</button>
                          </div>
                      )}

                      </div>
                  </div>
                  <div>
                        <div className='submainCard'>
                          <div className='card5'>
                          {isChatBoxVisible && (
                            <div>
                              <h1 style={{fontSize:"16px"}}> SEND YOUR RESPONSE</h1>
                              <button onClick={handleChatbox} style={{margin:"14px 0px"}} >CLICK HERE TO CHAT</button>
                              <Link to='/'><button>REQUEST CALLBACK</button></Link>
                              </div>
                              )}
                              {isMsgPopupOpen && (
                                <div>
                                      <label htmlFor="myTextArea">Enter your msg:</label>
                                      <textarea
                                        id="myTextArea"
                                        rows="4" // Adjust the number of rows as needed
                                        cols="25" // Adjust the number of columns as needed
                                        value={chatBox}
                                        onChange={(e)=> setchatBox(e.target.value)}
                                        placeholder="Type here..."
                                        
                                      />
                                      <button onClick={handleSendBtn}>Send</button>
                                      <button  onClick={handleBackBtn}>back</button>
                                
                                    </div>
                      )}
                         
                        </div>
                        </div>
                  </div>
              </div>
          </div>
        </div>
        




        <div style={{margin:"5px 60px"}}>
      <RecentCard2/>

        </div>


  
    </div>

  );
};

export default PropertyDetails;

