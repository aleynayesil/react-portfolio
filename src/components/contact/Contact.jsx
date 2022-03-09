import React from 'react'
import './contact.css'
//import MdOutlineMessage from 'react-icons/md'
import {RiMessage3Line,RiMessengerLine,RiWhatsappLine} from 'react-icons/ri'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
             <RiMessage3Line className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>support@email.com</h5>
            <a href="mailto:email@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>support@email.com</h5>
            <a href="https://m.me/username" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <RiWhatsappLine className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>123-4567-890</h5>
            <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank">Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea rows="7" name='message' placeholder='Your message' required />
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact