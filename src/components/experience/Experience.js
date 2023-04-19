import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'> 
    <h2> Mi experiencia </h2>
    <div className='container experience_container'>
      <h3> Aptitudes </h3>
      <div className='experience_content'> 
      <article className='experience_details'> 
      <BsFillPatchCheckFill />
      <h4> HTML </h4>
      </article>
      <article className='experience_details'> 
      <BsFillPatchCheckFill />
      <h4> CSS </h4>
      </article>
      <article className='experience_details'> 
      <BsFillPatchCheckFill />
      <h4> JavasCript </h4>
      </article>
      </div>

    
    </div>
    </section>
  )
}

export default Experience