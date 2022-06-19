import React from 'react'

const Information = (props) => {
    const {subject, details} = props
  return (
    <>
        <div className="information">
            <h4>{subject}</h4>
            <div className="line"></div>
            <p>{details}</p>
        </div>
    </>
  )
}

export default Information