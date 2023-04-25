import React from 'react'
import './Experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'> 
    <h2> Mi experiencia </h2>
    <div className='container experience_container'>
      
      <div className='experience_content'> 
      <article className='experience_details'> 
      <BsFillPatchCheckFill className='experiencie_details_icon' />
      <h4> HTML </h4>
      </article>
      <article className='experience_details'> 
      <BsFillPatchCheckFill className='experiencie_details_icon' />
      <h4> CSS </h4>
      </article>
      <article className='experience_details'> 
      <BsFillPatchCheckFill className='experiencie_details_icon'/>
      <h4> JavasCript </h4>
      </article>
      <article className='experience_details'> 
      <BsFillPatchCheckFill className='experiencie_details_icon'/>
      <h4> Node </h4>
      </article>
      <article className='experience_details'> 
      <BsFillPatchCheckFill className='experiencie_details_icon'/>
      <h4> React </h4>
      </article>
      <article className='experience_details'> 
      <BsFillPatchCheckFill className='experiencie_details_icon'/>
      <h4> Python </h4>
      </article>
      <article className='experience_details'> 
      <BsFillPatchCheckFill className='experiencie_details_icon'/>
      <h4> Django </h4>
      </article>
      <article className='experience_details'> 
      <BsFillPatchCheckFill className='experiencie_details_icon'/>
      <h4> MySQL </h4>
      </article>
      </div>

    
    </div>
    </section>
  )
}

export default Experience