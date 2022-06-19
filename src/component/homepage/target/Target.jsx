import React from 'react'
import './style/style.css'
import { targetDetails } from '../../../data/Data'

const Target = () => {
  return (
    <>
        <div className="target">
            <div className="container">
                <h2>Our Target</h2>
                <div className="features">
                    {targetDetails.map((item, key) => (
                        <div className="lists" key={key}>
                            <img src={item.iconSRC} alt={item.details} />
                            <h5>{item.details}</h5>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}

export default Target