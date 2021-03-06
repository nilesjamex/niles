import React from 'react';
import styled from 'styled-components'

const Works = ({work}) => {
    return (
        <WorkStyle>
        <div>
        <h3>
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
        </WorkStyle>
    )
}

const WorkStyle = styled.div`
width: 100%;
background-color: green;
margin: 2rem;
overflow-x: hidden;
`

export default Works;