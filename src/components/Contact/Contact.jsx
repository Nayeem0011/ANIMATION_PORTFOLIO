import React, { Fragment } from 'react'
import con from '../../assets/contact.png'
import './Contact.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  useGSAP(()=>{
    gsap.from(".leftcontact img", {
      x:-100,
      direction:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftcontact img",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
    
    gsap.from("form", {
      x:100,
      direction:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".leftcontact img",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
  })

  return (
    <Fragment>
      <div id="contact">
        <div className="leftcontact">
            <img src={con} alt="" />
        </div>

        <div className="rightcontact">
            <form action="https://formspree.io/f/xanjggqq" method='POST'>
                <input type="text" name="Username" id="Username" placeholder='Name' />
                <input type="email" name="Email" id="Email" placeholder='Email' />
                <textarea name="message" id="textarea" placeholder='Message Me'></textarea>
                <input type="submit" id='btn' value={"Submit"} />
            </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact
