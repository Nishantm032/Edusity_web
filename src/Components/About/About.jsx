import React from 'react'
import './About.css'

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about us'>
        <div className="about-left">
        <img src=".\images\about.png" alt=''  className='about-img'/>
        <img src=".\images\play-icon.png" alt=''  className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nuturing Tomorrow's Leaders Today</h2>
            <p>Embark on a rransformation educational journey with our university's
                comprehensive education programs. Our cutting-edge curriculum is designed 
                to empower students with the knowledge, skills, and experience needed to 
                excel in the dynamic field of education.
            </p>
            <p>With a focusn on innovation hand-on learning, ad personalized mentorship, our Programs prepare 
                aspiring educators to  make a meaningful impact in classrooms, schools, and communities.
            </p>
            <p>Whether  you aspire to become a teacher, adminitrator, 
                counselor, or educational leader, our diverse range of programs
                offers the prefect pathway to achieve your goals and unlock your full potential 
                in shaping the future of education.
            </p>
        </div>
    </div>
  )
}

export default About