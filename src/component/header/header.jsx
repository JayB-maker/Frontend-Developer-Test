import React from 'react'
import './style/header.css'
import CV from '../../Assets/Jayb Resume.pdf'
import ME from '../../Assets/nj 2.jpg'
import SOCIAL from './social'

const header = () => {
  return (
    <header>
      <div className="container">
      <section>
        <small>Hello I'm</small>
        <h1>Abiodun JayB</h1>
        <small>Frontend Developer</small>

        <div className="cta">
          <ul>
            <li><a href={CV} download className="cv">Download CV</a></li>
            <li><a href="#contact" className="contact">Let's Talk</a></li>
          </ul>
        </div>

        <SOCIAL />
        <a href="#contact" className='scroll_down'>Scroll Down</a>

        <div className="me">
        <img src={ME} alt="me" />
        </div>
        
      </section>
    </div>
    </header>
    
  )
}

export default header