import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'> Contact 
    <h2> Contactame </h2>
    <div className='container contact_container'>
      <div className='contact_options'> 
      <article className='contact_option'>
        <MdOutlineEmail />
        <h4> Email </h4>
        <h5> noeliamodica@gmail.com </h5>
        <a href='mailto:noeliamodica@gmail.com'> Enviame un mail </a>
      </article>
      <article className='contact_option'>
        <BsWhatsapp />
        <h4> Whatsapp </h4>
        <h5> +543875733755 </h5>
        <a href='https:/api.whatsapp.com/send?phone=+543875733755'> Enviame un Whatsapp </a>
      </article>
      
      </div> 

    </div>

    </section>
  )
}

export default Contact