import React, { Fragment, useRef } from 'react'
import "./Navber.css"
import { Link } from 'react-scroll'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navber = () => {
  let menu = useRef()
  let mobile = useRef()

  useGSAP(()=>{
    let tl = gsap.timeline()
    tl.from("nav h1", {
      y:-100,
      duration:1,
      opacity:0
    })
    tl.from("nav ul li", {
      y:-100,
      duration:0.5,
      opacity:0,
      stagger:1
    })
  })

  return (
    <Fragment>
      
      <nav>
        <h1>PORTFOLIO</h1>
        <ul className='desktopmenu'>
            <li><Link to='home' activeClass='active' smooth={true} spy={true} duration={500}>HOME</Link></li>
            <li><Link to='about' activeClass='active' smooth={true} spy={true} duration={500}>ABOUT</Link></li>
            <li><Link to='projects' activeClass='active' smooth={true} spy={true} duration={500}>PROJECTS</Link></li>
            <li><Link to='contact' activeClass='active' smooth={true} spy={true} duration={500}>CONTACT</Link></li>
        </ul>

        <div className='hamburger' ref={menu}
        onClick={()=>{
          mobile.current.classList.toggle("activemobile")
          menu.current.classList.toggle("activeham")
        }}>
          <div className="ham"></div>
          <div className="ham"></div>
          <div className="ham"></div>
        </div>

        <ul className='mobilemenu' ref={mobile}>
            <Link to='home' activeClass='active' smooth={true} spy={true} duration={500}><li>HOME</li></Link>
            <Link to='about' activeClass='active' smooth={true} spy={true} duration={500}><li>ABOUT</li></Link>
            <Link to='projects' activeClass='active' smooth={true} spy={true} duration={500}><li>PROJECTS</li></Link>
            <Link to='contact' activeClass='active' smooth={true} spy={true} duration={500}><li>CONTACT</li></Link>
        </ul>
      </nav>
      
    </Fragment>
  )
}

export default Navber
