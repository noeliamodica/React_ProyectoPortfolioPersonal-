import React from 'react'
import './Header.css'
import CTA from './CTA'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h1> Noelia Modica </h1>
        <h5 className='text-light'> Fullstack Developer - Fronted - Reactjs</h5>
        <CTA />
      </div>
    </header>
  )
}

export default Header