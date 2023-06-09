import React from 'react'
import './Header.css'
import CTA from './CTA'
import imagenCV from '../../assets/imagenCV.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header className='container header_container'>
      <div className='container header_contain'>
        <h1> Noelia Modica </h1>
        <h5 className='text-light'> Fullstack Developer - Fronted - Reactjs</h5>
        <CTA />
        <HeaderSocials />
        
      <div className='me'>
        <img src={imagenCV} alt='imagenCV'/>
      </div>
      
      </div>
    </header>
  )
}

export default Header