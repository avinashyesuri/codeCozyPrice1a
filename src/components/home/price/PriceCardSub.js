import React from "react"
import {useState} from 'react'
import "./PriceCardSub.css"
const PriceCardSub = ()=>{
    const [data,subData]=useState({name:"", email:"",phoneNumber:"" });
   
   const handleChange = (e)=>{
            const name = e.target.name; 
            const value = e.target.value;
            subData({...data,[name]:value})
   }
   const handleSubmit =(e)=>{
         e.preventDefault()
         alert(data)       
   }
    return(

        <form method='post'  onSubmit = {handleSubmit} className="subCardContainer">
        <h2 style={{paddingTop:"20px"}}><span>{/*  {item.plan} */}</span>Package </h2>      
            <input type="text" name="name" id="" onChange={handleChange}  value={data.name}   placeholder="Enter name" />
            <input type="text" name="email" id="" onChange={handleChange}  value={data.email}   placeholder="example@gmail.com"/>
            <input type="text" name="phoneNumber" id="" onChange={handleChange}  value={data.phoneNumber}    placeholder="91" />
            <button type="submit">submit</button>
  
        </form>
    )
}
export default PriceCardSub

