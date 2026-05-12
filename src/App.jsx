import React, { useState } from 'react'
// components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Services from './components/Services'
import OurWork from './components/OurWork'
import Teams from './components/Teams'
import ContactUs from './components/ContactUs'
import {Toaster} from 'react-hot-toast'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light")

  return (
    <div className="min-h-dvh w-full bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 transition-all duration-300">
      <Navbar theme={theme} setTheme={setTheme} />
      <Toaster/>
      <Hero />
      <TrustedBy/>
      <Services/>
      <OurWork/>
      <Teams/>
      <ContactUs/>
    </div>
  )
}

export default App