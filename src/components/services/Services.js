import React from 'react'
  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // init Swiper:
  const swiper = new Swiper('.swiper', {
    
    modules: [Navigation, Pagination],
  
  });


const Services = () => {
  return (
    <section id='services'> Services </section>
  )
}

export default Services 