import React from 'react'
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download > Descargar CV</a>
        <a href='#contact'> Contactarme </a>

    </div>
  )
}

export default CTA