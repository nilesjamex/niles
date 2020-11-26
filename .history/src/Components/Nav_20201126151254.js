import React from 'react';
import cartoon1 from '../Images/cartoon1.jpg'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = () => {
    return (
        <Bar>
            <nav>
            <div>
             <img src={cartoon1} alt="" />   
             </div> 
             <ul className="nav-links">
             <li>
               <Link>Home</Link> 
                </li>
                <li>
               <Link>Works</Link> 
                </li>
                <li>
               <Link>Resume</Link> 
                </li>
             </ul>
             <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
              </div>
              </nav>
        </Bar>
    )
}


const Bar = styled.nav`
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
  margin-top: 
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
}
.burger{
    display: none;
}
`

export default Nav;