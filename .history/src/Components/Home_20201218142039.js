import React from 'react';
import cartoon2 from '../Images/cartoon2.jpg';
import styled from 'styled-components';

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
                     <i className="fas fa-envelope"></i> <span>Email Me</span> <i className="fas fa-paperclip"></i><hr />
                     </a>
                     </li>
                     <li>
                     <a href="https://twitter.com/niles_jamex">
                     <i className="fab fa-twitter"></i> <span>Twitter</span> <i className="fas fa-paperclip"></i><hr />
                     </a>
                     </li>
                     <li>
                     <a href="https://github.com/nilesjamex">
                     <i className="fab fa-github"></i> <span>Github</span> <i className="fas fa-paperclip"></i><hr />
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
@media screen and (max-width: 850px){
    display: flex;
    flex-direction: column-reverse;
}
img{
    width: 100%;
    height: 80vh;
    object-fit: cover;
    margin-left: -10rem;
    @media screen and (max-width: 850px){
        margin-left: 6rem;
        border-radius: 100%;
        width: 40%;
        height: 20vh;
    }
}
.home-body{
    margin: 0 11.6rem;
    @media screen and (max-width: 850px){
        margin: 2rem 0 0 3rem;   
    } 
}
.name{
    font-size: 2.3rem;
    @media screen and (max-width: 850px){
        font-size: 1rem;
        .main-name{
            margin-left: 4.3rem;
        }
    }
    .surname{
        margin-left: 2.1rem;
    }
}
.body{
    margin: 3rem 8rem;
    span{
        color: #262626;

    }
    @media screen and (max-width: 850px){
      margin: 1rem 0rem;  
      font-size: 1rem;
      width:90%;
     } 
}
ul{
    display: flex;
    margin: 12rem 0 0 -5rem;
    hr{
        width: 100px;
        margin-top: 2px;
    }
    @media screen and (max-width: 850px){
        margin: 0rem;
        font-size: 0.7rem;
        hr{
        width: 60px;
        margin-top: 2px;
    }
    }
    }
    li{
        margin-left: 6px;
        transition: all ease 0.7s;
    }
`

export default Home