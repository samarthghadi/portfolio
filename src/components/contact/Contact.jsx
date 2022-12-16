import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'
import { useRef} from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_geixeqd', 'template_rxob6ty', form.current, 'BNEVyaj5SV1gykOqf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className='contact__options'>
          <artical className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>samarthghadi@gmail.com</h5>
            <a href='mailto:samarthghadi@gmail.com' target='_blank'>Send A Message</a>
          </artical>

          <artical className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <a href='https://ca.linkedin.com/in/samarth-ghadi-4a7106222' target='_blank'>Let's Connect</a>
          </artical>
            
      </div>
      {/*End of Contact options */}
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message'></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact