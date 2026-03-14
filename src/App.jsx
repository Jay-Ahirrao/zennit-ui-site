
import './App.css'
import { useState, useEffect } from 'react'
import LandingPageTemp from './components/LandingPageTemp'
import AboutSection from './sections/AboutSection'
import Testimonials from './sections/Testimonials'
import FAQSection from './components/FAQSection'
import Footer from './sections/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-white"></div>
      </div>
    )
  }

  return (
    <>
      <LandingPageTemp />
      <div id="about">
        <AboutSection />
      </div>
      <div id="faqs">
        <FAQSection />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}

export default App
