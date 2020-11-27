import React from 'react';
import cartoon2 from '../Images/cartoon2.jpg'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <About>
          <div className="home-body">
             <div className="name">
                <h1 className="main-name">JAMES</h1>
                <h1 className="surname">EGBAIDOMEH</h1>     
             </div> 
             <div className="body">
                 <p><span>HI!</span> I'm <span>Niles</span>, I am a <span>Frontend Developer</span>.
                 I basically spend a good amount of my time writing code and learning how to become better
                 at coding, if I am not doing that I'm either playing Football Manager,
                 Watching football or listening to music.
                  </p>
             </div>
             <div>
                 <ul>
                     <li>
                     <a href="mailto:egbaidomehjamez@gmail.com">
                     <i class="fas fa-envelope"></i> <span>Email Me</span> <i class="fas fa-paperclip"></i><hr />
                     </a>
                     </li>
                     <li>
                     <a href="https://twitter.com/niles_jamex">
                     <i class="fab fa-twitter"></i> <span>Twitter</span> <i class="fas fa-paperclip"></i><hr />
                     </a>
                     </li>
                     <li>
                     <a href="https://github.com/nilesjamex">
                     <i class="fab fa-github"></i> <span>Github</span> <i class="fas fa-paperclip"></i><hr />
                     </a>
                     </li>
                 </ul>
             </div>
          </div>
          <div>
            <img src={cartoon2} alt="" />
          </div>
        </About>  
       
    )
}

const About = styled.div`
display: flex;
margin-top: 3rem;
img{
    width: 60%;
    height: 80vh;
    object-fit: cover;
}
.home-body{
    margin: 0 11.6rem;
}
.name{
    font-size: 2.3rem;
    .surname{
        margin-left: 2.1rem;
    }
}
.body{
    margin: 3rem 8rem;
    span{
        color: #000000;

    }
}
ul{
    display: flex;
    margin: 12rem -5rem;
    hr{
        width: 100px;
        margin-top: 2px;
    }
}
li{
        margin: 6px;
        transition: all ease 0.7s;
        &:hover{
            margin-bottom: 10px;
            color:green;
        }
    }
`

export default Home