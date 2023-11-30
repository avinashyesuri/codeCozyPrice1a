
import { Flex } from 'antd';
import React from 'react';
 
const Card = ({ title, content, imageSrc, price, onClick }) => (

  <div style={{ border: '1px solid #ccc', padding: '16px', margin: '16px 30px', borderRadius: '8px', textAlign: 'center' }}>

    <h2>{title}</h2>

    <img src={imageSrc} alt={`${title} Image`} style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'cover', marginBottom: '10px' }} />

    {/* <p>{content}</p> */}

    {/* <p>Price: ${price}</p> */}

    {/* <bu onClick={onClick} */}

  </div>

);
 
const CardList = () => {

  const cardsData = [

    { id: 1, title: 'Card 1', content: 'Content for Card 1', imageSrc: 'https://cdn.pixabay.com/photo/2014/07/10/17/18/large-home-389271_640.jpg', },

    { id: 2, title: 'Card 2', content: 'Content for Card 2', imageSrc: 'https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_1280.jpg', },

    { id: 3, title: 'Card 3', content: 'Content for Card 3', imageSrc: 'https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_640.jpg',  },

    { id: 4, title: 'Card 4', content: 'Content for Card 3', imageSrc: 'https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_1280.jpg',  },

    { id: 5, title: 'Card 5', content: 'Content for Card 3', imageSrc: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D',  },


  ];
 
  return (

    <div style={{display: "flex", flexDirection: "row", width: "100%", justifyContent: "center"}}>

      {cardsData.map((card) => (

        <Card

          key={card.id}

          title={card.title}

          content={card.content}

          imageSrc={card.imageSrc}

          price={card.price}

          onClick={() => alert(`Button clicked on ${card.title}`)}

        />

      ))}

    </div>

  );

};
 
export default CardList;
