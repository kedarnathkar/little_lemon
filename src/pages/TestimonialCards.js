import React from 'react'
import { WiStars } from "react-icons/wi";
import "../CSS/Testimonial.css"

function TestimonialCard (props) {
  return (
    <div className='Testimonial-cards'>
        <h3><WiStars /></h3>
        <h5>{props.name}</h5>
         <p>{props.description}</p>
    </div>
  )
}

export default TestimonialCard;