import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/services-1.jpg'
import IMG2 from '../../assets/services-2.jpg'
import IMG3 from '../../assets/services-3.jpg'
import IMG4 from '../../assets/services-4.jpg'
import IMG5 from '../../assets/services-5.jpg'
import IMG6 from '../../assets/sevices-6.jpg'
const data =[
  {
    id:1,
    image:IMG1,
    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:2,
    image:IMG2,
    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:3,
    image:IMG3,
    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:4,
    image:IMG4,
    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:5,
    image:IMG5,
    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  },
  {
    id:6,
    image:IMG6,
    title:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    github:'https://github.com',
    demo:'https://dribbble.com'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>  
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image}  />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target="_blank">Github</a>
                <a href={demo} className='btn btn-primary' target="_blank">Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio