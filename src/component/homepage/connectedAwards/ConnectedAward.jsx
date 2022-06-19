import React from 'react'
import { connectedAwardDetails } from '../../../data/Data'
import Information from './Information'
import './style/style.css'

const ConnectedAward = () => {
  return (
    <>
    <div className="connected-award container">
        {connectedAwardDetails.map((item, key) => (
           <>
            <img src={item.imageSRC} alt={item.subject} key={key} />
            <Information {...item} />
           </>
        ))}
    </div>
    </>
  )
}

export default ConnectedAward