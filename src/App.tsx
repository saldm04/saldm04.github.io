import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { About } from './components/sections/About'
import { BeyondTech } from './components/sections/BeyondTech'
import { Community } from './components/sections/Community'
import { Contact } from './components/sections/Contact'
import { Education } from './components/sections/Education'
import { Hero } from './components/sections/Hero'
import { Languages } from './components/sections/Languages'
import { Projects } from './components/sections/Projects'
import { Skills } from './components/sections/Skills'

function App() {
  return (
    <>
      <a className="skip-link" href="#contenuto">
        Vai al contenuto
      </a>
      <Navbar />
      <main id="contenuto">
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Community />
        <BeyondTech />
        <Languages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
