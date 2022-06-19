import React from 'react'
import { celebratedTechiesDetails } from '../../../data/Data'
import Information from '../../../reuseableComponents/information/Information'
import './style/style.css'
import arc from '../../../Assets/arc.png'

const imageSRC = [
    "Assets/man1.png",
    "Assets/lady1.png",
    "Assets/man2.png",
    "Assets/lady2.png",
]

const CelebratedTechies = () => {
    
  return (
    <>
        <div className="celebrated-techies">
            <div className="container">
                {celebratedTechiesDetails.map((item, key) => (
                    <div className="info">
                        <Information {...item} key={key} />
                    </div>
                ))}
                <div className="img-gallery">
                    {imageSRC.map((item, key) => (
                        <img src={item} alt="images" key={key} />
                    ))}
                </div>
            </div>
            <img className='arc' src={arc} alt="arc" />
        </div>
    </>
  )
}

export default CelebratedTechies