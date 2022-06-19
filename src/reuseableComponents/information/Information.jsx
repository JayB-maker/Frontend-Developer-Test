import React from 'react'
import './style/style.css'

const Information = (props) => {
    const {subject, details, buttonText} = props
  return (
    <>
        <div className="information">
            <h4>{subject}</h4>
            <div className="line"></div>
            <p>{details}</p>
            <button className="btn-primary">{buttonText}</button>
        </div>
    </>
  )
}

export default Information