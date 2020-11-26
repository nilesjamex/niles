import React from 'react';
import cartoon1 from '../Images/cartoon1.jpg'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Nav = () => {
    return (
        <Bar>
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
             <div class="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
              </div>
        </Bar>
    )
}


const Bar = styled.nav`
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
}
img{
    height:10px;
    width: 10px;
}
`

export default Nav;