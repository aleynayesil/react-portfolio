import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar-1.jpg'
import AVTR2 from '../../assets/avatar-2.jpg'
import AVTR3 from '../../assets/avatar-3.jpg'
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data =[
  {
    avatar:AVTR1,
    name:'Tina Snow',
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque natus tempore sunt quasi dolorem obcaecati omnis quas adipisci fugiat animi ab laboriosam dicta aperiam aut reprehenderit iste tenetur, incidunt soluta?'
  },
  {
    avatar:AVTR2,
    name:'Shatte Wale',
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque natus tempore sunt quasi dolorem obcaecati omnis quas adipisci fugiat animi ab laboriosam dicta aperiam aut reprehenderit iste tenetur, incidunt soluta?'
  },
  {
    avatar:AVTR3,
    name:'Kwame Despite',
    review:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque natus tempore sunt quasi dolorem obcaecati omnis quas adipisci fugiat animi ab laboriosam dicta aperiam aut reprehenderit iste tenetur, incidunt soluta?'
  }
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>  
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     >
        {
          data.map(({avatar,name,review},index)=>{
            return(
            <SwiperSlide key={index} className='testimonials'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>
              {review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials