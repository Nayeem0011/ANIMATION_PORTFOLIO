import React, { Fragment } from 'react'
import "./About.css"
import Card from '../Card/Card'
import mern from '../../assets/mernss.png'
import java from '../../assets/javas.png'
import dsa from '../../assets/dsa.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const About = () => {

  useGSAP(()=> {
    gsap.from(".circle", {
      x:-100,
      direction:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })

    gsap.from(".line", {
      x:-100,
      direction:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".line",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 50%"
      }
    })

    gsap.from(".aboutdetails h1", {
      x:-100,
      direction:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })

    gsap.from(".aboutdetails ul", {
      y:100,
      direction:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails ul",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 50%"
      }
    })
    
    gsap.from(".rightabout", {
      x:100,
      direction:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".rightabout",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
  })

  return (
    <Fragment>
      <div id='about'>

        <div className="leftabout">
          <div className="circle-line">
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
            <div className="line"></div>
            <div className="circle"></div>
          </div>

          <div className="aboutdetails">
            <div className="personalinfo">
              <h1>Personal Info</h1>
              <ul>
                <li><span>NAME</span> : NAYEEM ISLAM</li>
                <li><span>AGE</span> : 21</li>
                <li><span>GENDER</span> : MALE</li>
                <li><span>LANGUAGE</span> : BANGLA,HINDI,ENGLISH</li>
              </ul>
            </div>

            <div className="education">
              <h1>Education</h1>
              <ul>
                <li><span>DEGREE</span> : HSC</li>
                <li><span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING</li>
                <li><span>GPA</span> : 4.17</li>
              </ul>
            </div>

            <div className="skills">
              <h1>Skills</h1>
              <ul>
                <li>FRONTEND DEVELOPER</li>
                <li>JAVASCRIPT</li>
                <li>DSA</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rightabout">
          <Card title="FRONTEND DEVELOPER" image={mern}/>
          <Card title="JAVASCRIPT" image={java}/>
          <Card title="DSA" image={dsa}/>
        </div>

      </div>
    </Fragment>
  )
}

export default About
