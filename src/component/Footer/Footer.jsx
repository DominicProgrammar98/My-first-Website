import React from 'react'
import "./Footer.css"
import {FaInstagramSquare} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Bazazpour</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#contact'>Contact</a></li>
        <li><a href='#courses'>Courses</a></li>
        <li><a href='#experience'>Experience</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://instagram.com'><FaInstagramSquare /></a>
        <a href='https://Twitter.com'><FaTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bazazpour First Website. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer