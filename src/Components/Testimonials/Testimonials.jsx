import React from 'react'
import './Testimonials.css'
import {useRef} from 'react'

const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

 const slideForward= () =>{
   if(tx > -50){
    tx -= 25;
   }

   slider.current.style.transform = `translateX(${tx}%)`;
 }

 const slideBackward= () =>{
    if(tx < 0){
        tx += 25;
       }
    
       slider.current.style.transform = `translateX(${tx}%)`;
 }

  return (
    <div className='Testimonials' id='testomonials'>
  <img src=".\images\next-icon.png" alt=''  className='next-btn'  onClick={slideForward}/>
  <img src=".\images\back-icon.png"  alt= '' className='back-btn' onClick={slideBackward} />

  <div className="slider">
    <ul ref ={slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src=".\images\user-2.png" alt="" />
                    <div>
                        <h3>Nishant Mishra</h3>
                        <span>Edusity, INDIA</span>
                    </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was on of the 
                    best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment 
                    to academic excellence have truly exceeded my expectations.
                </p>
            </div>
        </li>

        <li>
            <div className="slide">
                <div className="user-info">
                    <img src=".\images\user-1.png" alt="" />
                    <div>
                        <h3>Sakshi Mishra</h3>
                        <span>Edusity, INDIA</span>
                    </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was on of the 
                    best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment 
                    to academic excellence have truly exceeded my expectations.
                </p>
            </div>
        </li>

        <li>
            <div className="slide">
                <div className="user-info">
                    <img src=".\images\user-3.png" alt="" />
                    <div>
                        <h3>Shalini </h3>
                        <span>Edusity, INDIA</span>
                    </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was on of the 
                    best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment 
                    to academic excellence have truly exceeded my expectations.
                </p>
            </div>
        </li>

        <li>
            <div className="slide">
                <div className="user-info">
                    <img src=".\images\user-4.png" alt="" />
                    <div>
                        <h3>Varun Singh</h3>
                        <span>Edusity, INDIA</span>
                    </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was on of the 
                    best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment 
                    to academic excellence have truly exceeded my expectations.
                </p>
            </div>
        </li>
    </ul>
  </div>
    </div>
  )
}

export default Testimonials