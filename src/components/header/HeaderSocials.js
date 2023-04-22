import React from 'react'
import './Header.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://www.linkedin.com/in/noelia-modica-303399177/'><BsLinkedin className='header_socials-icon'/> </a>
        <a href='https://github.com/noeliamodica'><FaGithub className='header_socials-icon' /> </a>
    </div>
  )
}

export default HeaderSocials