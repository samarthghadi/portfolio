import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
  <div className='header'>
   <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Samarth Ghadi</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <HeaderSocials />
        
        <div className='me'>
          <img src={ME} alt='me' />
        </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
    </div>
  )
}

export default Header