import React from 'react';
import styled from 'styled-components'

const Works = ({work}) => {
    return (
        <WorkStyle>
        <div className="work-info">
        <div>
        <h3 >
        {work.name}    
        </h3> 
        {work.languages}   
        </div> 
        <div>
        <p>
        {work.brief}    
        </p>    
        <p>
        <a href={work.live}><i class="far fa-eye"></i> Live</a>
        <a href={work.github}><i class="fas fa-code"></i> Code</a>
        </p>
        </div>
        </div>
        </WorkStyle>
    )
}

const WorkStyle = styled.div`
width: 74%;
height: 20vh;
background-color: green;
margin: 2rem 0 0 8rem;
.work-info{
    margin: 1.5rem;
}
`

export default Works;