import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  // Dark-first: load dark unless the visitor previously chose light.
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === 'undefined') return true
    return localStorage.getItem('theme') !== 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', darkMode)
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((v) => !v)

  return (
    <div className="min-h-screen bg-paper text-ink transition-colors duration-300 dark:bg-ink dark:text-paper">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
