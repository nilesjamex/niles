import React from 'react';
import styled from 'styled-components'

const Contact = () => {
    return (
        <div>
           <form name="contact" method="" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form> 
        </div>
    )
}

export default Contact;