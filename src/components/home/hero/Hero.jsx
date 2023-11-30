import React from "react";
import Heading from "../../common/Heading";
import { Select, } from 'antd';
// import 'antd/dist/antd.css';
import "./hero.css";

const { Option } = Select;

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
        <Heading title='Search for Cozy PG Retreats' subtitle='Find a variety of comfortable and featured PG stays right in your local city.' />


          <form className="flex" id="propertySearchForm">
            <div className="box">
              <Select style={{ width: 200 }} placeholder="Select Location">
                <Option value="">Select Location</Option>
                <Option value="city">City</Option>
                <Option value="street">Street</Option>
              </Select>
            </div>
            <div className="box">
              <Select style={{ width: 200 }} placeholder="Select Property Type">
                <Option value="">Select Property Type</Option>
                <Option value="apartment">Apartment</Option>
                <Option value="house">House</Option>
                <Option value="condo">Condo</Option>
              </Select>
            </div>
            <div className="box">
              <Select style={{ width: 200 }} placeholder="Select Price Range">
                <Option value="">Select Price Range</Option>
                <Option value="0-100000">$0 - $100,000</Option>
                <Option value="100000-200000">$100,000 - $200,000</Option>
                <Option value="200000-300000">$200,000 - $300,000</Option>
              </Select>
              
            </div>
            <div className="box">
              <h4>Advance Filter</h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'>Search</i>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Hero;
