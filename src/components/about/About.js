import React from 'react'
import './About.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaPython } from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'


const About = () => {

  const responsive = {
    superLargeDesktop: {
       // the naming can be any, depends on you.
       breakpoint: { max: 4000, min: 3000 },
       items: 5,
    },
    desktop: {
       breakpoint: { max: 3000, min: 1024 },
       items: 3,
    },
    tablet: {
       breakpoint: { max: 1024, min: 464 },
       items: 2,
    },
    mobile: {
       breakpoint: { max: 464, min: 0 },
       items: 1,
    },
 };

  return (
    <section id='about'> 
    <h2> Acerca de mi </h2>
    <div className='container-about'>
    <div className="row">
               <div className="col-12">
                  <div className="contain-about">
                     <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                          <SiJavascript className='item-icon'/>
                          <h3> Programadora Full Stack </h3>
                           <h5> Digital House</h5>
                        </div>
                        <div className="item">
                          <FaPython className='item-icon'/>
                        <h3> Python  </h3>
                           <h5> Coderhouse </h5>
                        </div>
                        <div className="item">
                         
                        <h3> Data analytics </h3>
                           <h5> Coderhouse </h5>
                        </div>
                        <div className="item">
                           
                        <h3> Esp en Tributacion Internacional </h3>
                           <h5> Universidad Complutense de Madrid - UBA</h5>
                        </div>
                        
                        <div className="item">
                           
                           <h3> Especialista en Tributacion</h3>
                              <h5> Universidad Nacional de Salta </h5>
                           </div>
                        
                        <div className="item">
                           
                           <h3> Contadora Publica </h3>
                          <h5> Universidad Catolica de Salta </h5>
                        </div>

                        <div className="item">
                           
                        <h3> Lic. en Administracion de Empresas </h3>
                           <h5>  Universidad Catolica de Salta</h5>
                        </div>

                     </Carousel>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default About



            