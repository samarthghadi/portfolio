import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {ImLocation2} from 'react-icons/im'
import {CgWebsite} from 'react-icons/cg'
import {GoDatabase} from 'react-icons/go'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <ImLocation2 className='about__icon'/>
              <h5>Cambridge, Ontario</h5>
                <small>Canada</small>
            </article>
            
            <article className='about__card'>
              <CgWebsite className='about__icon'/>
              <h5>FrontEnd Development</h5>
                <small>UI/UX</small>
            </article>

            <article className='about__card'>
              <GoDatabase className='about__icon'/>
              <h5>BackEnd Development</h5>
                <small>Database</small>
            </article>
          </div>

          <p>
          I'm a software Engineer focusing on learning and exploring technologies and frameworks that catch my interest! If you're looking for a developer to add to your team, I'd love to hear from you!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About