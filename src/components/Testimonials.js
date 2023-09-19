import React from 'react'
import TestimonialCard from '../pages/TestimonialCards';
import { Carousel } from 'react-responsive-carousel';

function Testimonials() {
    return (
        <section className="testimonials">
            <article className="testimonials-topbar">
                    <h1>Testimonials</h1>
            </article>
            
            <section className="testimonials-cards">
                <TestimonialCard name="Micheal Caldwell" description="This is the best Mediterranean food that I've ever had!"/>
                <TestimonialCard name="Alan Chen" description="My Shiba Inu, Mugi, really loved the cozy vibes and 
                delicious food here."/>
                <TestimonialCard name="Casey Lau" description="I've had some great Mediterranean food before, but none of them beats
                   Little Lemon in flavor and texture."/>
                <TestimonialCard name="John Rosenblum" description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."/>
                <TestimonialCard name="Jim Reynor" description="The food here really refreshed me after a late night shift
                at the local supply depot."/>
                <TestimonialCard name="Brian Dean" description="I came to Little Lemon after a 5 hour flight from the East Coast.
                 The food here tasted."/>

            <section className="testimonials-carousel">
                <Carousel />
            </section>
            </section>
         </section>
    )
}

export default Testimonials;