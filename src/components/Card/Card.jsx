import React from 'react';
import './Card.css'

const Card = (props) => {
    console.log(props)
    const {name, img, price,action} =props
    return (
        <div>
            <img className='w-96' src={img}alt="" />
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{action}</p>
            
        </div>
    );
};

export default Card;