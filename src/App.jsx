import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Navber from './components/Navber/Navber'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Navber/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  )
}

export default App
