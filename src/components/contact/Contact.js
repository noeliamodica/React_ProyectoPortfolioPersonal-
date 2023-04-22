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
        <MdOutlineEmail  className='contact_option-icon'/>
        <h4> Email </h4>
        <h5> noeliamodica@gmail.com </h5>
        <a href='mailto:noeliamodica@gmail.com'> Enviame un mail </a>
      </article>
      <article className='contact_option'>
        <BsWhatsapp className='contact_option-icon' />
        <h4> Whatsapp </h4>
        <a href='https:/api.whatsapp.com/send?phone=+543875733755'> Enviame un Whatsapp </a>
      </article>
      </div> 

      <form action=''>
        <input type='text' name='name' placeholder='Ingrese su nombre' required/>  
        <input type='email' name='email' placeholder='Ingrese su email' required />
        <textarea name='message' rows='7'placeholder='Deje su mensaje' required> </textarea>
        <button type='submit' className='btn btn-primary'> Enviar mensaje </button>
      </form>

    </div>

    </section>
  )
}

export default Contact