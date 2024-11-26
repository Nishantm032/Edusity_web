import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/Navbar/Hero/Hero"
import Program from './Components/Navbar/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
 import Fotter from './Components/Footer/Fotter'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import { useState } from 'react'



const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
   <Navbar />
     <Hero/>
     <div className="container">
      <Title subTitle='OUR PROGRAM' title='What We Offer' />
     <Program />
     <About setPlayState ={setPlayState}/>
     <Title subTitle='Gallery' title='Campus Photos' />
     <Campus/>
     <Title subTitle='TESTIMONIALS' title='What Student Says' />
     <Testimonials/>
     <Title subTitle='Contact Us' title='Get in Touch' />
     <Contact/>

<Fotter />
     </div>
    
  <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App