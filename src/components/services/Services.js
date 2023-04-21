import React from 'react'
  // core version + navigation, pagination modules:
  import { Swiper, SwiperSlide } from 'swiper/react';
  // import Swiper and modules styles
  import 'swiper/css';
  
  import 'swiper/css/pagination';

  


const Services = () => {
  return (
    <section id='services'> Services 

<Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>

    </section>
  )
}

export default Services 