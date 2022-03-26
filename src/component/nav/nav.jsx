import React from 'react'
import './style/nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import {RiGalleryLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'

const nav = () => {
  return (
    <nav className='containersp'>
        <a href="#"><AiOutlineHome /></a>
        <a href="#about"><BsPerson /></a>
        <a href="#services"><RiServiceLine /></a>
        <a href="#portfolio"><RiGalleryLine /></a>
        <a href="#contact"><AiOutlineMessage /></a>
    </nav>
  )
}

export default nav