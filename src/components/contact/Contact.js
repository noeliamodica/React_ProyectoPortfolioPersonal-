import React, { useRef } from 'react';
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iaxp3oh', 'template_o1fc3et', form.current, 'k1BZ8a9tHeE3_v6pegi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };
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

      <form ref={form} onSubmit={sendEmail}>
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