import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'


const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light")

  return (
    <div className="min-h-dvh w-full bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-all duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <TrustedBy/>
      <Services/>
      <OurWork/>
    </div>
  )
}

export default App