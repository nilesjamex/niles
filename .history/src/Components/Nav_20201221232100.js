import React, { useState } from 'react';
import cartoon1 from '../Images/cartoon1.jpg'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = () => {
    const [ navOut, setNavOut ] = useState(false);

    const onClick = e =>{
        setNavOut(!navOut)
    }
    return (
        <Bar>
            <nav>
            <div>
                <Link to="/">
             <img src={cartoon1} alt="" /> 
                </Link>  
             </div> 
             <ul className={navOut ? "nav-active" : "" }>
             <li>
               <Link to="/">Home</Link> 
                </li>
                <li>
               <Link to="/works">Works</Link> 
                </li>
                <li>
               <Link>Resume</Link> 
                </li>
             </ul>
             <div className={`burger ${navOut ? `toggle` : ""}`} onClick={onClick}>
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
              </div>
              </nav>
        </Bar>
    )
}


const Bar = styled.div`
.burger div {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
  transition: all 0.5s ease;
}

nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 10vh;
  margin-top: 0;
  background-color: #DDA0DD;
  @media screen and (max-width: 850px){
    justify-content: space-between;
    width: 100%;
  }
}
img{
    height:50px;
    width: 70px;
    object-fit: contain;
}
ul{
    display: flex;
    width: 60%;
    justify-content: space-around;
    @media screen and (max-width: 850px){
        position: fixed  ;
        height: 96vh;
        width: 60%;
        right: 0;
        top: 10vh;
        background-color: #9370DB;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: transform 0.5s ease-in;
        transform: translateX(100%);
        overflow-x: hidden;

    }
}
.burger{
    display: none;
}
@media screen and (max-width: 860px){
    .burger{
        display: block;
        cursor: pointer;
    }
}
.nav-active {
  transform: translateX(0%);
}
.toggle .line1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.toggle .line2 {
  opacity: 0;
}

.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
`

export default Nav;