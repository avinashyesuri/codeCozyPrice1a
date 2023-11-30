import React from "react"
import Heading from "../../common/Heading"
import { location } from "../../data/Data"
import "./style.css"
import { Carousel } from "antd"; // Import Carousel component

const Location = () => {
  const locationsChunked = [location.slice(0, 6), location.slice(6)];

  return (
    <>
      <section className='location padding'>
        <div className='container'>
        <Heading
  title1='Discover PGs By Location'
  subtitle='Explore a variety of PG accommodations in different locations. Find your ideal living space.'
/>

          <div className='content grid3 mtop'>
            {location.map((item, index) => (
              <div className='box' key={index}>
                <img src={item.cover} alt='' />
                <div className='overlay'>
                  <h5>{item.name}</h5>
                  <p>
                    <label>{item.Villas}</label>
                    <label>{item.Offices}</label>
                    <label>{item.PGs}</label>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Location
