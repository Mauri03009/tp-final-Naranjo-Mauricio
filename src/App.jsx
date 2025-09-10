import './App.css'
import AboutUs from './components/AboutUs'
import Comunidad from './components/Comunidad'
import Donate from './components/Donate'
import Footer from './components/Footer'
import Hero from './components/Hero'
import OurTeam from './components/OurTeam'
import Stats from './components/Stats'

import Testimonials from './components/Testimonials'



function App() {
  

  return (
    <>
    <section id="home">
      <Hero />  
    </section>
    <Stats/>
    <section id="comunidad">
      <Comunidad />
    </section>
    <section id="about-us">
      <AboutUs />
    </section>
    <section id="team">
      <OurTeam />
    </section>
    <Testimonials />     
    <section id="donate">
      <Donate />
    </section>
    <Footer />
    </>
    
  )
}

export default App
