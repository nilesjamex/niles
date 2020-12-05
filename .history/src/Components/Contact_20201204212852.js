import React from 'react';
import styled from 'styled-components'

const Contact = () => {
    return (
        <Contacts>
           <form name="contact" method="" data-netlify="true">
  <p>
    <label>Your Name: <input type="text" name="name" required  /></label>   
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" required  /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"  ></textarea></label>
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
form{
align-items: center;
}
p{
    margin: 12px;
}
textarea{
    margin-left: 4px;
    width: 70%;
    height: 50vh;
}
input{
    width: 70%;

}
button{
    height: 20px;
    width: 50%;
    border-radius: 70px;
    outline-style: none;
    margin-left: 30%;
}
`

export default Contact;