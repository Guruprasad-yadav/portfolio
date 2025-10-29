import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Education from './Components/Education/Education'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Services from './Components/Services/Services'

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
