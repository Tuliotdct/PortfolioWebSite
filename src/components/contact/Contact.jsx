import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jrixupn', 'template_ehkxtj6', form.current, '2Or8AK4iC-n_jc71b')

    e.target.reset()


  };

  return (
    <section id='contact'>
      <br></br>
      <br></br>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tuliotdct@gmail.com</h5>
            <a href='mailto:tuliotdct@gmail.com' target='blank'>Send a message</a>
          </article>


          <article className='contact__option'>
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+55 61 98350-6612</h5>
            <a href='https://api.whatsapp.com/send?phone=+5561983506612'  target='blank'>Send a message</a>
          </article>

        </div>
         {/* End of Contact Options */}
         <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="massage" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send a Message</button>
            

         </form>
      </div>

    </section>
  )
}

export default Contact