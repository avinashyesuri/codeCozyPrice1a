import React, { useState } from "react"
import { price } from "../../data/Data"
import Popup from "./Popup"
import Modal from "./Popup";
import { FaRupeeSign } from "react-icons/fa";
const PriceCard = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setModalOpen(false);
  };
  return (
    <>
      <div className='content flex mtop'>
        {price.map((item, index) => (
          <div className='box shadow' key={index}>
            <div className='topbtn'>
              <button className='btn3'>{item.best}</button>
            </div>
            <h3>{item.plan}</h3>
            <h1>
              <span><FaRupeeSign/> </span>
              {item.price}
            </h1>
            <p>{item.ptext}</p>

            <ul>
              {item.list.map((val) => {
                const { icon, text, change } = val
                return (
                  <li>
                    <label
                      style={{
                        background: change === "color" ? "#dc35451f" : "#61A3BA1f",
                        color: change === "color" ? "#dc3848" : "#61A3BA",
                      }}
                    >
                      {icon}
                    </label>
                    <p>{text}</p>
                  </li>
                )
              })}
            </ul>
            <button onClick={() => openModal(item.plan)}
              className='btn5'
              style={{
                color: item.plan === "Standard" ? "Black" : "Black",
              }}
            >
              Start {item.plan}
            </button>
          </div>
        ))}
        
      </div>
      {isModalOpen && (
        <Modal
          plan={selectedPlan}
          priceInfo={price.find((item) => item.plan === selectedPlan)}
          onClose={closeModal}
          // Add other necessary props like price and phone number
        />
      )}
    </>
  )
}

export default PriceCard




