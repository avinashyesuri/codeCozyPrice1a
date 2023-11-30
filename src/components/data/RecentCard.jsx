import React from "react"
// import { list } from "../../data/Data"
import { list } from '../../data/Data.js';
import { Link } from 'react-router-dom';
const RecentCard = () => {

  return (

    <>

      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          // const { cover, category, location, name, price, type } = val
          const { id, cover, category, location, name, price, type } = val;

          return (
            <Link to={`/property/${id}`} key={index}>
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fa fa-location-dot'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
                  <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                </div>
                <span>{type}</span>
              </div>
            </div>
             </Link>
          )
        })}
      </div>
    </>

  )
}

export default RecentCard
// import React, { useState } from "react";
// import { list } from "../../data/Data";

// const RecentCard = () => {
//   const [selectedItem, setSelectedItem] = useState(null);

//   const handleCardClick = (index) => {
//     setSelectedItem(index);
//     // You can add more logic here to handle the click, like opening a modal or navigating to a new page.
//   };

//   return (
//     <>
//       <div className='content grid3 mtop'>
//         {list.map((val, index) => {
//           const { cover, category, location, name, price, type } = val;
//           return (
//             <div className={`box shadow ${selectedItem === index ? 'selected' : ''}`} key={index} onClick={() => handleCardClick(index)}>
//               <div className='img'>
//                 <img src={cover} alt='' />
//               </div>
//               <div className='text'>
//                 <div className='category flex'>
//                   <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
//                   <i className='fa fa-heart'></i>
//                 </div>
//                 <h4>{name}</h4>
//                 <p>
//                   <i className='fa fa-location-dot'></i> {location}
//                 </p>
//               </div>
//               <div className='button flex'>
//                 <div>
//                   <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
//                 </div>
//                 <span>{type}</span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default RecentCard;
