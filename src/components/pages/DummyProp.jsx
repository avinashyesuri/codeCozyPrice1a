
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

import React from 'react';
import { useParams } from 'react-router-dom';
import { list } from '../data/Data.js';
import './PropertyDetails.css'; // Import your CSS file
import { FcFlashOn } from "react-icons/fc";
import { FaBookmark } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import '../home/recent/recent.css'
import RecentCard2 from '../home/recent/RecentCard2.jsx';
// import PropPopup2 from './PropPopup2.js';


const PropertyDetails = () => {
  // const [isPopupOpen, setPopupOpen] = useState(false);
 
  // const openPopup2 = () => {
  //   setPopupOpen(true);
  // };

  // const closePopupto = () => {
  //   setPopupOpen(false);
  // };
  const { id } = useParams();
  const property = list.find(item => item.id === parseInt(id));

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
                          <button  className='subb2'><FaBookmark />Add to wishlist</button>
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
                        <h1 style={{fontSize:"16px"}}>Contact Details:</h1>
                        <input style={{backgroundColor:"rgb(177, 177, 180)"}} type="text" placeholder="Enter ur num"/>
                        <button >submit</button>
                        {/* 
                        onClick={openPopup2}
                        
                        {isPopupOpen && (
                            <PropPopup2
                            plan={name}
                            onClose={closePopupto}
                            />
                          )} */}
                      </div>
                  </div>
                  <div>
                        <div className='submainCard'>
                          <div className='card5'>
                              <h1 style={{fontSize:"16px"}}> SEND YOUR RESPONSE</h1>
                              <button style={{margin:"14px 0px"}} >CLICK HERE TO CHAT</button>
                              <button>REQUEST CALLBACK</button>
                              {/* SEND A MESSAGE */}
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

