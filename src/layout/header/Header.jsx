import React from 'react'
import logo from "../../Assets/logo.png"
import "./style/style.css"

const Header = () => {
  return (
    <>
    <header className='container'>
      <div className="logo">
        <a href="#"><img src={logo} alt="logo" /></a>
      </div>
      <ul>
        <li><a href="#">Categories</a></li>
        <li><a href="#">Past editors</a></li>
        <li><a href="#">Future editors</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Make a donation</a></li>
      </ul>
      <div className="cta">
        <button className="btn-secondary">Log In</button>
        <button className="btn-primary">Create Account</button>
      </div>
    </header>
    </>
  )
}

export default Header