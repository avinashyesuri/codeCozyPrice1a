import React from "react"

const Heading = ({ title,title1, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h3>{title}</h3>
        <h2>{title1}</h2>
        <p>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
