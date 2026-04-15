import { useState } from 'react'
import NavBar from './assets/Components/NabBar/NavBar.jsx';
import Home from './assets/Components/Home/Home.jsx';
import About from './assets/Components/About/About.jsx';
import Skills from './assets/Components/Skills/Skills.jsx';
import Footer from './assets/Components/Footer/Footer.jsx';



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
      <Footer />
    </div>
  )
}

export default App