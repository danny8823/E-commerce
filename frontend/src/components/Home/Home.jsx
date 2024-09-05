import React from 'react'
import './Home.css'
import HeroImg from '../../assets/Home-Hero-Img.avif'
import HeroImg2 from '../../assets/golf-clubs-img.avif'

const Home = () => {
  return (
    <div>
      <div>
        <p id = 'home-title'>Don't Shank Golf Shop</p>
      </div>
      <div className = 'home-img-container'>
        <img className = 'home-img' src = {HeroImg} alt = 'golfball on grass'/>
      </div>
      <div>
        <p className = 'home-desc'>Your one stop premier golf shop.</p>
      </div>
      <div className = 'home-img-container'>
        <img className = 'home-img' src = {HeroImg2} alt = 'golf clubs and balls'/>
      </div>
      <div>
        <p className = 'home-desc'>Come check us out. You will not be disappointed.</p>
      </div>
    </div>
  )
}

export default Home