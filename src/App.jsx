import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useTheme } from './assets/Components/context/ThemeContext.jsx'
import NavBar from './assets/Components/NabBar/NavBar.jsx';
import Home from './assets/Components/Home/Home.jsx';
import About from './assets/Components/About/About.jsx';
import Skills from './assets/Components/Skills/Skills.jsx';
import Footer from './assets/Components/Footer/Footer'
import Pubmats from './assets/Components/Pubmats/Pubmats.jsx';
import Sublimation from './assets/Components/Sublimation/Sublimation.jsx';
import Clips from './assets/Components/Videos/Clips.jsx';
import Certificates from './assets/Components/Certificates/Certificates.jsx'
import LoadingScreen from './assets/Components/Loading/LoadingScreen.jsx'




function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const { isLight } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <div className='relative min-h-screen'>
          {/* Fixed background */}
          <div className={`fixed inset-0 -z-10 ${isLight ? 'bg-lightBG' : 'bg-darkBG'}`} />

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
      )}
    </>
  )
}

export default App
