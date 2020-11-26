import React from 'react';
import cartoon1 from '../Images/cartoon1.jpg'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <Nav>
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
        </Nav>
    )
}


const Nav = styled.nav`
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 8vh;
}
`

export default Nav;