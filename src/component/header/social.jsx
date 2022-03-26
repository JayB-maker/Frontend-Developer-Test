import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import {IoLogoLinkedin} from 'react-icons/io'
import {AiFillInstagram} from 'react-icons/ai'
import {FaBehanceSquare} from 'react-icons/fa'

const social = () => {
  return (
    <div className='social'>
        <a href="facebook.com/abiodun.ajiboye.716" target="_blank"><AiFillFacebook /></a>
        <a href="instagram.com/abiodunjayb" target="_blank"><AiFillInstagram /></a>
        <a href="behance.net/ajiboyeabiodun" target="_blank"><FaBehanceSquare /></a>
        <a href="https://www.linkedin.com/in/ajiboye-abiodun-40726419a" target="_blank"><IoLogoLinkedin /></a>
    </div>
  )
}

export default social