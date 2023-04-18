import React from 'react'
import './Header.css'
import CTA from './CTA'
import imagenCV from '../../assets/imagenCV.png'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h1> Noelia Modica </h1>
        <h5 className='text-light'> Fullstack Developer - Fronted - Reactjs</h5>
        <CTA />
      </div>
      <div className='me'>
        <img src={imagenCV} alt='imagenCV'/>
      </div>
      
      <a href='#contact' className='scroll__down'> Bajar </a>
    </header>
  )
}

export default Header