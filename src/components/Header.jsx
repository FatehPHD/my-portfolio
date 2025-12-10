import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const Header = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const { isDark, toggleTheme } = useTheme()

  const navItems = [
    { name: 'Projects', href: isHomePage ? '#projects' : '/#projects' },
    { name: 'Experience', href: isHomePage ? '#experience' : '/#experience' },
    { name: 'Education', href: isHomePage ? '#education' : '/#education' },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact' },
  ]

  const handleNavClick = (href) => {
    setIsMenuOpen(false)
    if (href.startsWith('#')) {
      // For hash links, scroll to section
      if (location.pathname !== '/') {
        window.location.href = href
      } else {
        const element = document.querySelector(href)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-tan-50/95 dark:bg-brown-900/95 backdrop-blur-sm border-b border-tan-200 dark:border-brown-700'
          : 'bg-transparent border-b border-tan-200/50 dark:border-brown-700/50'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="text-xl font-semibold text-tan-800 dark:text-brown-300 hover:text-tan-900 dark:hover:text-brown-400 transition-colors"
          >
            FA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <div key={item.name} className="flex items-center">
                {index > 0 && (
                  <span className="w-px h-4 bg-tan-400 dark:bg-brown-600 mr-6"></span>
                )}
                <a
                  href={item.href}
                  onClick={(e) => {
                    if (item.href.startsWith('#')) {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }
                  }}
                  className="text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 font-normal transition-colors"
                >
                  {item.name}
                </a>
              </div>
            ))}
            <span className="w-px h-4 bg-tan-400 dark:bg-brown-600 mx-2"></span>
            <button
              onClick={toggleTheme}
              className="text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle dark mode"
            >
              {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-tan-200 dark:border-brown-700">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault()
                    handleNavClick(item.href)
                  } else {
                    setIsMenuOpen(false)
                  }
                }}
                className="block py-3 min-h-[44px] text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 font-normal transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header

