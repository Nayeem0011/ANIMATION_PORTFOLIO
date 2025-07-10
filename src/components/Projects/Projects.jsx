import { Fragment } from 'react'
import Card from '../Card/Card'
import './Projects.css'
import va from '../../assets/va.png'
import fw from '../../assets/fw.png'
import cb from '../../assets/cb.png'
import tti from '../../assets/tti.png'
import br from '../../assets/br.png'
import ise from '../../assets/ise.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)


const Projects = () => {
  useGSAP(()=>{
    gsap.from("#para", {
      y:100,
      direction:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:"#para",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
    gsap.from(".slider", {
      y:100,
      direction:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".slider",
        scroll:"body",
        scrub:2,
        start:"top 80%",
        end:"top 30%"
      }
    })
  })

  return (
    <Fragment>
      <div id="projects">
        <h1 id='para'>1+ YEARS EXPERIENCED IN PROJECTS</h1>
        <div className="slider">
            <Card title={"VIRTUAL ASSISTANT"} image={va}/>
            <Card title={"AI POWERED FITNESS WEBSITE"} image={fw}/>
            <Card title={"AI CHATBOT"} image={cb}/>
            <Card title={"AI TEXT TO IMAGE"} image={tti}/>
            <Card title={"AI BACKGROUNS REMOBER"} image={br}/>
            <Card title={"IMAGE SEARCH ENGINE"} image={ise}/>
        </div>
      </div>
    </Fragment>
  )
}

export default Projects
