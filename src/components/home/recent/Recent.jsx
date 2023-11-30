import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
// import RecentCard from "./RecentCard"
import RecentCard2 from "./RecentCard2"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
        <Heading title1='Discover Latest PG Listings' subtitle='Explore the most recent PG properties listed, with detailed information to help you find your ideal accommodation.' />
          {/* <RecentCard /> */}
          <RecentCard2/>
        </div>
      </section>
    </>
  )
}

export default Recent
