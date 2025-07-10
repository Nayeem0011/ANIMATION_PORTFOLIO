import React, { Fragment } from 'react'
import "./Home.css"
import man from '../../assets/man.png'
import { Typewriter } from 'react-simple-typewriter';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  useGSAP(()=>{
    let tl1 = gsap.timeline()
    tl1.from(".line1", {
      y:80,
      duration:1,
      opacity:0
    })
    tl1.from(".line2", {
      y:80,
      duration:1,
      opacity:0
    })
    tl1.from(".line3", {
      y:80,
      duration:1,
      opacity:0
    })
    gsap.from(".righthome img", {
      x:200,
      duration:1,
      opacity:0
    })
  })

  return (
    <Fragment>
      <div id='home'>

        <div className="lefthome">
          <div className="homedetails">
            <div className="line1">I'M</div>
            <div className="line2">NAYEEM ISLAM</div>
            <div className="line3">
              <Typewriter
              words={['HELLO', 'I AM NAYEEM', 'FRONTEND DEVELOPER', 'WEB DEVELOPER']}
              loop={true}
              speed={70}
              eraseSpeed={50}
              eraseDelay={1000}
              typingDelay={500}
              cursor
              cursorStyle="|"
              />
            </div>
            <button>HIRE ME</button>
          </div>
        </div>

        <div className="righthome">
          <img src={man} alt="" />
        </div>

      </div>
    </Fragment>
  )
}

export default Home
