import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>SAMARTH GHADI</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/samarth.ghadi/" target="_blank"><BsInstagram /></a>
        <a href="https://ca.linkedin.com/in/samarth-ghadi-4a7106222" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/samarthghadi" target="_blank"><FaGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Samarth Ghadi.  All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer