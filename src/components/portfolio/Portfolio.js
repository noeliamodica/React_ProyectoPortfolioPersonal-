import React from 'react'
import './Portfolio.css'


const Portfolio = () => {
  return (
    <section id='portfolio'> Portfolio 
    <h2> Mis proyectos </h2>
    <div className='container portfolio_container'>
      <article className='portfolio_item'>
      <div className='portfolio_item-image'> </div>
      <h3> Este es un portfolio item titulo </h3>
      <a href='www.github.com' className='btn' > Github </a>
      <a href='www.github.com' className='btn btn-primary' > Live demo </a>
      </article>

    </div>

    </section>
  )
}

export default Portfolio

