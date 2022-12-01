import React from 'react'
import "./Contact.css"
import {MdMarkEmailRead} from "react-icons/md"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react'
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oma6x02', 'template_ewuxima', form.current, 'OcSr4NIxWXSEvgvoD')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="contact__container">
        <div className="contact__options">
          <article className='contact__option'>
             <MdMarkEmailRead className='contact__option-icon' />
             <h4>Email</h4>
             <h5>bazazpoor98@gmail.com</h5>
             <a href='mailto:bazazpoor98@gmail.com' target={'_blank'}>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section> 
  )
}

export default Contact