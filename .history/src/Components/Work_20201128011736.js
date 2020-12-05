import React from 'react';
import Works from './Works'

const Work = ({works}) => {
    return (
        <div>
        {works.map((work) => (<Works 
        work={work}
        key={work}
        />))} 
        </div>
    )
}

export default Work