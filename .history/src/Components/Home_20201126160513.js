import React from 'react';
import cartoon2 from '../Images/cartoon2.jpg'

const Home = () => {
    return (
        <About>
          <div>
             <div>
                <h1>EGBAIDOMEH</h1>
                <h1>JAMES</h1>     
             </div> 
             <div>
                 <p>hi! I'm <span>Niles</span>, I am a <span>Frontend Developer</span>.
                 I basically spend a good amount of my time writing code and learning how to become better
                 at coding, if I am not doing that I'm either playing Football Manager,
                 Watching football or listening to music.
                  </p>
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
`

export default Home