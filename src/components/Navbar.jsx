import React, { useState } from 'react'
import assets from '../../public/assets/assets'
import ThemeBtn from './themeBtn'

const Navbar = ({ theme, setTheme }) => {
  const navUrls = [
    { id: '#', title: 'Home' },
    { id: '#services', title: 'Services' },
    { id: '#our-work', title: 'Our work' },
    { id: '#constat-us', title: 'Contact Us' },
  ]

  const [sidbarOpen, setSidbarOpen] = useState(false)

  return (
    <nav
      className={`flex justify-between items-center px-4
sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20
backdrop-blur-xl font-medium border-b border-gray-100 bg-white dark:border-zinc-800/80 dark:bg-gray-900/70 transition-all duration-`}
    >
      <img
        src={theme === 'dark' ? assets.logo_dark : assets.logo}
        alt="navLogo"
        className="w-32 sm:w-40"
      />

      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${!sidbarOpen ? 'max-sm:w-0 max-sm:overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'}  max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}
      >
        <img
          src={assets.close_icon}
          alt="closeIcon"
          className="w-5 absolute top-4 right-4 sm:hidden"
          onClick={() => setSidbarOpen(false)}
        />
        {navUrls.map((link) => (
          <a
            key={link.id}
            onClick={() => setSidbarOpen(false)}
            href={link.id}
            className="hover:border-b-2 border-primary duration-75 "
          >
            {link.title}
          </a>
        ))}
      </div>

      <div className="flex justify-center items-center gap-5">
        <img
          src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon}
          alt="icon"
          className="w-8 sm:hidden"
          onClick={() => setSidbarOpen(true)}
        />
        <ThemeBtn theme={theme} setTheme={setTheme} />
        <a
          href="#constat-us"
          className="text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Contact us{' '}
          <img src={assets.arrow_icon} alt="img" width={14} />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
