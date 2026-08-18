import { useState, useEffect } from 'react'
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

const CONTENT_LOAD_DELAY = 1400

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [contentLoading, setContentLoading] = useState(true)
  const { isLight } = useTheme()

  useEffect(() => {
    const timer = setTimeout(() => {
      setContentLoading(false)
    }, CONTENT_LOAD_DELAY)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='relative min-h-screen'>
      {/* Fixed background */}
      <div className={`fixed inset-0 ${isLight ? 'bg-lightBG' : 'bg-darkBG'}`} style={{ zIndex: -1 }} />

      <div className='relative'>
        <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <main aria-busy={contentLoading} aria-live="polite">
          <span className="sr-only">
            {contentLoading ? 'Loading portfolio sections...' : 'Portfolio sections loaded.'}
          </span>
          <Home isOpen={isOpen} loading={contentLoading} />
          <About loading={contentLoading} />
          <Skills loading={contentLoading} />
          <Pubmats loading={contentLoading} />
          <Sublimation loading={contentLoading} />
          <Clips loading={contentLoading} />
          <Certificates loading={contentLoading} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
