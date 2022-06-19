import React from 'react'
import { talentDetails } from '../../../data/Data'
import './style/style.css'

const Talent = () => {
  return (
    <>
    <div className="talent container">
        {talentDetails.map((item, key) => (
            <div className="list" key={key}>
                <div className="img-container">
                <img src={item.iconSRC} alt={item.subject} />
                </div>
                <h4>{item.subject}</h4>
                <p>{item.details}</p>
            </div>
        ))}
    </div>
    </>
  )
}

export default Talent