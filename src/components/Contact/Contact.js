import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nmlokwp', 'template_0drtaiq', form.current, {
      publicKey: 'LbaRJpJtaBO2ropPD',
    })
      .then(() => {
        setDone(true);
        setTimeout(() => {
          setDone(false);
          form.current.reset(); // Reset the form after the message disappears
        }, 3000); // Adjust the timeout as needed
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
      });
  };

  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{ color: darkMode? 'white':'' 
     }}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur c-blur" style={{ background:"#abf1ff94" }}></div>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder='Name'required/>
                <input type="email" name="user_email" className="user" placeholder='Email' required/>

                <textarea name="message" className="user" placeholder='message'required/>
                <input type="submit" value="Send" className='button' style={{  zIndex:'1'}}/>
                <span style={{ display: done ? 'block' : 'none' }}>Thanks for contacting me!</span>
                <div className="blur c-blur1" style={{ background:"var(--purple)" }}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
