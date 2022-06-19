import React from 'react'
import { connectedAwardDetails } from '../../../data/Data'
import Information from '../../../reuseableComponents/information/Information'
import './style/style.css'
import arc from '../../../Assets/arc.png'

const ConnectedAward = () => {
  return (
    <>
    <div className="connected-award">
        <div className="container">
        {connectedAwardDetails.map((item, key) => (
           <>
            <img src={item.imageSRC} alt={item.subject} key={key} />
            <Information {...item} />
           </>
        ))}
        </div>
        <img className="arc" src={arc} alt="arc" />
    </div>
    </>
  )
}

export default ConnectedAward