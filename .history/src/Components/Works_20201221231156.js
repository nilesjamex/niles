import React from 'react';
import styled from 'styled-components'

const Works = ({work}) => {
    return (
        <WorkStyle>
        <div className="work-info">
        <div className="text-info">
        <h3 className="name-info">
        {work.name}    
        </h3> 
        {work.languages}   
        </div> 
        <div>
        <p className="brief">
        {work.brief}    
        </p>    
        <p className="sites">
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
background-color: #9370DB;
margin: 2rem 0 0 8rem;
@media screen and (max-width: 850px){
     margin-left: 3rem;   
    }
.work-info{
    margin: 1.5rem;
    .text-info{
        margin: 1.3rem 0;
        .name-info{
            margin-top:1rem;
        }
    }
    .brief{
        margin-bottom: 1rem;
    }
    .sites{
        a{
            margin-right: 0.5rem;
        }
    }
}
`

export default Works;