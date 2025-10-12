
import './App.css'
import LandingPageTemp from './components/LandingPageTemp'
import AboutSection from './sections/AboutSection'
import Testimonials from './sections/Testimonials'
import ContactSection from './components/FAQSection'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <LandingPageTemp />
      <div id="about">
        <AboutSection />
      </div>
      <div id="faqs">
        <ContactSection />
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
