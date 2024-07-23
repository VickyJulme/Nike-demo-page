import React from 'react'
import brandlogo from "../images/shops.png"
import shoe from "../images/shoe_image.png"
import "../Hero-page/Hero.css"

const Hero = () => {
  return (
   <div className='hero'>
   <div className='hero-content'>
        <h1 className='words'>YOUR FEET DESERVE THE BEST</h1>

        <p>
        Nike has acquired and sold several apparel and footwear companies<br></br> over the course of its history. Its first acquisition was the upscale <br></br>footwear company Cole Haan in 1988.
        </p>

        <div className='hero-btn'>
      <button>Shop Now</button>
      <button> Category</button>
        </div>

        <div className='shopping'>
            <p> Also Avialabe On</p>

            <div className='brand-icon'>

            <img src={brandlogo} alt='logo'></img>

            </div>
 
        </div>
  

    </div>
    <div>
    <img src={shoe} alt='shoe'></img>
</div>
    </div>
  )
}

export default Hero