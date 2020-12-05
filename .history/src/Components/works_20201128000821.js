import React from 'react'

const Works = ({work}) => {
    return (
        <div>
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
        </div>
    )
}

export default Works;