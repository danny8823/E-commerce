import React from 'react'
import aboutImg from '../../assets/about-us-img.avif'
import './About.css'

const About = () => {
  return (
    <div className = 'about-us-container'>
      <h1>About us!</h1>
      <p>We had humble beginnings, starting to work out of our garage. It took a lot of work for us to be at the level we are now and it's all thanks to people like you. We are dedicated to bring the people the best golf products for the best price. We work hard so you can get on the golf field.</p>
      <img src = {aboutImg} alt = 'group of employees'/>
    </div>
  )
}

export default About