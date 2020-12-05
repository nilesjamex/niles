import React from 'react';
import styled from 'styled-components'

const Contact = () => {
    return (
        <Contacts>
           <form name="contact" method="" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" required size="76" /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" required size="76" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message" rows="25" col="50"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form> 
        </Contacts>
    )
}

const Contacts = styled.div`
margin: auto;
`

export default Contact;