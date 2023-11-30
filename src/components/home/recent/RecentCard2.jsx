import React from "react"
import { useState } from 'react';
import { list } from "../../data/Data"
import './recent.css'
// import { MdShelves } from "react-icons/md";
import { MdShelves } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { MdAssistantDirection } from "react-icons/md";
import { Link } from "react-router-dom"
const RecentCard2 = () => {
       // State to manage selected filter values
   const [location,setlocation] = useState('');
   const [propertyType, setPropertyType] = useState('');
   const [bedrooms, setBedrooms] = useState('');
   const [bathrooms, setBathrooms] = useState('');
   const [furniture, setfurniture] = useState('');
   const [Cunstruction,setCunstruction] =useState('');
   const [lists,setlists] = useState('');
   // Add more filters as needed
 
   // Function to handle filter changes
   const handleFilterChange = (filter, value) => {
     switch (filter) {
      case 'location':  
        setlocation(value);
        break;
       case 'propertyType':
         setPropertyType(value);
         break;
       case 'bedrooms':
         setBedrooms(value);
         break;
       case 'bathrooms':
         setBathrooms(value);
         break;
         case 'Furniture':
          setfurniture(value);
          break;
          case 'Cunstruction':
            setCunstruction(value);
            break;
            case 'lists':
              setlists(value);
              break;
       // Handle additional filters
       default:
         break;
     }
   };
 
   // Example filter options (replace with your own)
   const locationoptions =['Maharastra','Andhra Pradesh','Tamil Nadu','Kerala','Utter Pradesh','Punjab','Telangana']
   const propertyTypeOptions = ['For Rent :House & Apartment', 'For Sale :House & Apartment', 'Lands & Plots','PG & Guest Houses'];
   const bedroomsOptions = ['1+Bedroom', '2+Bedrooms', '3+Bedrooms', '4+Bedrooms'];
   const bathroomsOptions = ['1+Bathroom','2+Bathroom','3+Bathrooms','4+Bathrooms'];
   const Furnitureoptions =['Furnished ','Unfurnished ','Semi-Furnished'];
   const Cunstructionoptions =['Under Construction ','Ready to Move','New Launch'];
   const Listsoptions =['Owner','Dealer','Builder'];
   // Add more filter options as needed
  return (
    <>
    <div className="total-filter">
      <div className="card-container">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type,id } = val
          return (
            <div className='card-descript' key={index} style={{margin:"10px"}}>
                <div  className='img-1' >
                    <img src={cover} alt='Realestate'/>
                </div>
                <div>
                    <div className='text-1'>
                        <div className='card-subdescript1'>
                           <div className='card-subdescript1a'>                        
                               <h4 className="card-head">{name}</h4>
                               <span style={{ background: category === "Available" ? "#25b5791a" : "#ff98001a", color: category === "Available" ? "#25b579" : "#ff9800",padding:"8px",borderRadius:"16px" }}>{category}</span>

                           </div>
                               <i className='fa fa-heart ' style={{marginTop:'10px'}}></i>
                        </div>
                        <p style={{fontSize:"10px",marginBottom:"2px"}}>
                            <i className='fa fa-location-dot'></i> {location}               
                        </p>
                        <p style={{fontSize:"10px",marginBottom:"4px"}}>
                 <MdAssistantDirection />         only 50mts away
                        </p> {/*{location}*/}
               
                        {/* <div className='category flex '>
                           <div className="icon-sty" style={{fontSize:"10px",marginBottom:"15px"}}>
                           <i class="fa fa-male" aria-hidden="true"></i> <span style={{fontSize:"12px"}}>Unisex</span>                     
                              <span style={{marginRight:"15px"}}>|</span>
                               <i className="fa fa-bed"></i><span style={{fontSize:"12px"}}>Double</span>  
                           </div>  
                                 <i className='fa fa-heart'></i>     
                        </div> */}
                  
                        <div className="amenties-styling" >
                        <div>
                        <h3 style={{fontSize:"12px",marginBottom:"5px"}}>Amenties</h3>
                            <div className="butt-align1">
                                <div className="buttn-sty buttn-sty1"><i className="fa fa-bath" aria-hidden="true"></i>Attached washroom</div>
                                <div className="buttn-sty buttn-sty1"><MdShelves/>Spacious Cupboards</div>
                                <div className="buttn-sty buttn-sty1"><MdShelves/>Floor Gym</div>
                                <div className="buttn-sty buttn-sty1"><MdShelves/>Parking Area</div>
                            </div>
                        </div>
                        <div className="butt-align2">
                            <div  className="butt-align3">
                                <div className="buttn-sty-g">GENTS</div>
                                <div className="buttn-sty-l">LADIES</div>
                                <div className="buttn-sty-c">CO-LIVE</div>
                            </div>
                            <div>
                                {/* <p style={{fontSize:"15px"}}>
                                         <MdAssistantDirection style={{width:"25px"}}/>   you are 50mts away              
                                </p> */}
                            </div>
                        </div>
   
                      
                  
                       
                        </div>

                

                        <div className='card-subdescript2'>
                            <div>
                                <h5>Starts From</h5>
                                <i class="fa fa-inr" aria-hidden="true"></i><span style={{marginLeft:"5px"}}>{price}/sqft</span>
                            </div>
                            <div>
                                {/* <span>{type}</span> */}
                                <button className=" buttn-sty2">Request Callback</button>
                                <Link to={`/property/${id}`}>
                                <button className=" buttn-sty2">Explore <FaArrowRight/></button></Link>
                            </div>
                        </div> 
                    </div>
                    {/* <div className='button flex'>
                        <div>
                        <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label>
                        </div>
                        <span>{type}</span>
                    </div> */}
                </div>
      
            </div>
          )
        })}
      </div>

      <div className='Filter-container'>
  <h2>PG Accommodations For Rent</h2>
  <h4>CATEGORIES</h4>

  {/* Location Filter */}
  <label style={{ color: "linear-gradient(90deg, rgba(74,25,219,1) 0%, rgba(138,68,250,1) 100%);" }}>City</label>
  <select
    value={location}
    onChange={(e) => handleFilterChange('location', e.target.value)}
  >
    <option value="">Select City</option>
    {locationoptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>

  {/* PG Type Filter */}
  <label style={{ color: "linear-gradient(90deg, rgba(74,25,219,1) 0%, rgba(138,68,250,1) 100%);" }}>Accommodation Type:</label>
  <select
    value={propertyType}
    onChange={(e) => handleFilterChange('propertyType', e.target.value)}
  >
    <option value="">Choose from below options</option>
    {propertyTypeOptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>

  {/* Bedrooms Filter */}
  <label style={{ color: "linear-gradient(90deg, rgba(74,25,219,1) 0%, rgba(138,68,250,1) 100%);" }}>Bedrooms:</label>
  <select
    value={bedrooms}
    onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
  >
    <option value="">Choose from below options</option>
    {bedroomsOptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>

  {/* Bathrooms Filter */}
  <label style={{ color: "linear-gradient(90deg, rgba(74,25,219,1) 0%, rgba(138,68,250,1) 100%);" }}>Bathrooms:</label>
  <select
    value={bathrooms}
    onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
  >
    <option value="">Choose from below options</option>
    {bathroomsOptions.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>

  {/* Furnishing Filter */}
  <label className='filter-Fur-la'>FURNISHING</label>
  <div className='furnish-fur'>
    {Furnitureoptions.map((value) => (
      <div key={value}>
        <input
          type="checkbox"
          id={value}
          value={value}
          checked={furniture.includes(value)}
          onChange={(e) => handleFilterChange('furniture', e.target.value)}
        />
        <label htmlFor={value}>{value}</label>
      </div>
    ))}
  </div>

  {/* Construction Status Filter */}
  <label className='filter-con-la'>CONSTRUCTION STATUS</label>
  <div className='Constr-filtr'>
    {Cunstructionoptions.map((value) => (
      <div key={value}>
        <input
          type="checkbox"
          id={value}
          value={value}
          checked={Cunstruction.includes(value)}
          onChange={(e) => handleFilterChange('Cunstruction', e.target.value)}
        />
        <label htmlFor={value}>{value}</label>
      </div>
    ))}
  </div>

  {/* Listed By Filter */}
  <label className='filter-lis'>LISTED BY</label>
  <div className='list-filtre'>
    {Listsoptions.map((value) => (
      <div key={value}>
        <input
          type="checkbox"
          id={value}
          value={value}
          checked={lists.includes(value)}
          onChange={(e) => handleFilterChange('lists', e.target.value)}
        />
        <label htmlFor={value}>{value}</label>
      </div>
    ))}
  </div>

  {/* Add more filters as needed */}
</div>

      </div>
    </>
  )
}

export default RecentCard2
