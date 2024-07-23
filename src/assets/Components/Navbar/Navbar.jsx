import React from 'react'
import "../Navbar/Navbar.css"
import Nike from "../images/brand_logo.png"
const Navbar = () => {
  return (
    <div>
    <nav>
        <div>
            <img src={Nike}></img>
        </div>

        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>

        <button>Login</button>
    </nav>
    
    </div>
  )
}

export default Navbar