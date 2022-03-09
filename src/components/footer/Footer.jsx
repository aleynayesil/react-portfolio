import React from 'react'
import './footer.css'
import {FiTwitter,FiFacebook} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>EGATOR</a>
      <ul className='permalinks'>
        <li><a href="#" >Home</a></li>
        <li><a href="#About" >About</a></li>
        <li><a href="#Experience" >Experience</a></li>
        <li><a href="#Services" >Services</a></li>
        <li><a href="#Portfolio" >Portfolio</a></li>
        <li><a href="#Testimonials" >Testimonials</a></li>
        <li><a href="#Contact" >Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FiFacebook/></a>
        <a href="https://instagram.com"><FaInstagram/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer