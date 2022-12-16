import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://ca.linkedin.com/in/samarth-ghadi-4a7106222" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/samarthghadi" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/samarth.ghadi/" target="_blank"><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials