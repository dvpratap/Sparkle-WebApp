import React from 'react'
import './SearchBar.css';
import { useLocation } from 'react-router-dom';
import ring_image from "./ring_image.png"

const Details = () => {
    const location = useLocation();
  return (
    <div className='details-div'>
        <div className='form-control'>
            <div className='div-child'>
                <img className='img-style' src={ring_image} alt="react logo" />
                <h4 className='details-element'>id: {location.state}</h4>
            </div>
            <div className='div-child'>
                <h4> Gold Ring</h4>
                <h4> Price: 1000$</h4>
                <h4> In Stock: 12</h4>
                <h4> Discount: 15%</h4>
            </div>
        </div>
    </div>
  )
}

export default Details