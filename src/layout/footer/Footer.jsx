import React from 'react'
import { footerDetails } from '../../data/Data'
import './style/style.css'
import logow from '../../Assets/logow.png'

const Footer = () => {
  return (
    <>
    <footer>
      <div className="container">
        <div className="grid">
          {footerDetails.map((item, key) => (
            <div className="flexone" key={key}>
              <p>{item.heading}</p>
              <div className="flex">
                {item.links.map((items, key) => (
                  <a href={items.address} key={key}>{items.placeholder}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="logo">
          <img src={logow} alt="logo" />
        </div>
        <div className="copyright">
          <p>Celebrating Techies Globally</p>
          <p> &copy; 2022 The Conected Awards - All rights reserved </p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer