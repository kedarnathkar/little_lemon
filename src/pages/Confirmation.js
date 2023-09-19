import React from 'react'
 import { Link } from 'react-router-dom'
 import { FaRegSmileBeam } from 'react-icons/fa';

function Confirmation() {
  return (
    <div>
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h3>A confirmation message has been sent to your email.</h3>
        <h3>Thanks for dining with us! <span><FaRegSmileBeam /></span></h3>
      </section>
     <section>
      <Link className="redirect-button" to="/Online">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
        </section>
    </div>
  )
};

export default Confirmation;