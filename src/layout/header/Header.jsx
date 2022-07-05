import React from 'react'
import logo from "../../Assets/logo.png"
import "./style/style.css"
import mobilemenu from "../../Assets/mobile-menu.png"
import mobileexit from "../../Assets/mobile-exit.png"
import { useState } from 'react'

const Header = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <>
    <header>
    <div className='container'>
      <div className="logo">
        <a href="/"><img src={logo} alt="logo" /></a>
        <img className="mobile" onClick={() => setClicked(!clicked)} src={ clicked ? mobileexit : mobilemenu} alt="logo" />
      </div>
      <nav className={ clicked? "show" : "hide"}>
      <ul>
        <li><a href="/login">Categories</a></li>
        <li><a href="/signup">Past editors</a></li>
        <li><a href="#">Future editors</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Make a donation</a></li>
      </ul>
      <div className="cta">
        <button className="btn-secondary">Log In</button>
        <button className="btn-primary">Create Account</button>
      </div>
      </nav>
      </div>
    </header>
    </>
  )
}

export default Header