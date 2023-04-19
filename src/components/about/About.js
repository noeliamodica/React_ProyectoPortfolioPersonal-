import React from 'react'
import './About.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'> 
    <h2> Acerca de mi </h2>
    <div className='about_content'>
      <div className='about_cards'>

        <article className='about_card'>
          <FaAward className='about_icon' />
        <h5> Experiencia </h5>
        </article>

        <article className='about_card'>
          <FiUsers className='about_icon' />
        <h5> Experiencia </h5>
        <small> 2 </small>
        </article>

        <article className='about_card'>
          <FiUsers className='about_icon' />
        <h5> Experiencia </h5>
        <small> 2 </small>
        </article>

        <p> Lorem ipsum  </p>

        <a href='#contact' className='btn btn-primary'> Contactarme </a>
      </div>

    </div>
    </section>
  )
}

export default About