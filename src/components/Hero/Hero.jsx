import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='main container'>
        <div className='hero-text'>
            <h1>We Ensure better education for a better world</h1>
            <p>Welcome to Educity, where academic excellence meets personal growth. Our dedicated faculty and diverse programs empower students to thrive in a dynamic world. Join us to embark on a transformative educational journey that prepares you for a successful future!</p>
            <button className='btn'>Explore more <img src={dark_arrow} alt=""/></button>
        </div>
      
    </div>
  )
}

export default Hero
