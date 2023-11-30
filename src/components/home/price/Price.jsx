import React from "react"
import Heading from "../../common/Heading"
import "./price.css"
import PriceCard from "./PriceCard"

// import PriceCardSub from "./PriceCardSub"

const Price = () => {
  return (
    <>
      <section className='price padding'>
        <div className='container'>
          <Heading title1='Select Your Package' subtitle='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores' />
          <PriceCard />
          {/* <PriceCardSub/> */}
          
        </div>
      </section>
    </>
  )
}

export default Price
