import React from 'react'
import './style/style.css'
import search from '../../../Assets/search.png'
import arrow from '../../../Assets/arrow.png'

const HeroSection = () => {
  return (
    <>
        <div className="hero container">
            <div className="subject">
                <h1>First Ever Tech Personality Award For Africans in Europe</h1>
            </div>
            <div className="search">
                <div className="search-box">
                    <input type="search" name="search" id="search" placeholder="Nominee's Name, Nominee's Category" />
                    <img src={search} alt="search" />
                </div>
                <button className="btn-primary">Search</button>
            </div>
            <a href="#">
                <h6>View all categories</h6>
                <img src={arrow} alt="arrow" />
            </a>
        </div>
    </>
  )
}

export default HeroSection