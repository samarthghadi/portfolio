import React from 'react'
import Samarth_Resume from '../../assets/Samarth_Resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Samarth_Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA