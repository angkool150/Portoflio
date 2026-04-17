import { useState } from 'react'
import NavBar from './assets/Components/NabBar/NavBar.jsx';
import Home from './assets/Components/Home/Home.jsx';
import About from './assets/Components/About/About.jsx';
import Skills from './assets/Components/Skills/Skills.jsx';
import Footer from './assets/Components/Footer/Footer'
import Pubmats from './assets/Components/Pubmats/Pubmats.jsx';
import Sublimation from './assets/Components/Sublimation/Sublimation.jsx';
import Clips from './assets/Components/Videos/Clips.jsx';
import Certificates from './assets/Components/Certificates/Certificates.jsx'




function App() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='relative min-h-screen'>
      {/* Fixed background */}
      <div className='fixed inset-0 bg-darkBG -z-10' />

      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Home isOpen={isOpen} />
      <About />
      <Skills />
      <Pubmats />
      <Sublimation />
      <Clips />
      <Certificates />
      <Footer />
    </div>
  )
}

export default App