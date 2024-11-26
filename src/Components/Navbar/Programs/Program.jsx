import React from 'react'
import './Programs.css'
//import program_1 from '../assests/program_1.png'
//import program_1 from '../assests/program_1.png'
//import program_1 from '../assests/program_1.png'
const Program = () => {
  return (
    <div className='programs ' id='program'>
      <div  className='program'> 
      <img src=".\images\program-1.png" alt=""  />
      <div className="caption">
        <img src=".\images\program-icon-1.png" alt='' />
        <p>Graduation Degree</p>
      </div>
      </div>
      <div  className='program'> 
      <img src=".\images\program-2.png" alt=""  />
      <div className="caption">
        <img src=".\images\program-icon-2.png" alt='' />
        <p>Masteres Degree</p>
      </div>
      </div>
      <div  className='program'> 
      <img src=".\images\program-3.png" alt=""  />
      <div className="caption">
        <img src=".\images\program-icon-3.png" alt='' />
        <p>Post Graduation Degree</p>
      </div>
      </div>
    
      
    </div>
  )
}

export default Program