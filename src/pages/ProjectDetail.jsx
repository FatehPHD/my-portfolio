import { useParams, Link, useNavigate } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FaArrowLeft } from 'react-icons/fa'
import { useState, useEffect } from 'react'

const ProjectDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = getProjectById(id)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-tan-50 dark:bg-brown-900">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4 text-tan-900 dark:text-brown-400">Project not found</h1>
          <Link to="/" className="text-tan-800 dark:text-brown-500 hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-tan-50 dark:bg-brown-900">
      <Header isScrolled={isScrolled} />
      <main className="flex-grow pt-20 sm:pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 mb-6 sm:mb-8 transition-colors min-h-[44px]"
          >
            <FaArrowLeft size={18} />
            <span className="text-sm sm:text-base">Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 text-tan-900 dark:text-brown-400">
              {project.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-tan-700 dark:text-brown-500 mb-3 sm:mb-4">{project.tagline}</p>
            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2.5 sm:px-3 py-1 bg-tan-200 dark:bg-transparent dark:border dark:border-brown-400 text-tan-800 dark:text-brown-500 rounded text-xs sm:text-sm hover:dark:bg-brown-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
            <span className="text-xs sm:text-sm text-tan-600 dark:text-brown-600">{project.date}</span>
          </div>

          {/* Video Section */}
          <div className="mb-8 sm:mb-12">
            <div className="aspect-video bg-tan-200 dark:bg-brown-800 flex items-center justify-center rounded-lg w-full border border-tan-300 dark:border-brown-600">
              <div className="text-center p-4 sm:p-6">
                <svg
                  className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-tan-500 dark:text-brown-400 mb-3 sm:mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm sm:text-base text-tan-600 dark:text-brown-500 font-medium">Video Coming Soon</p>
                <p className="text-xs sm:text-sm text-tan-500 dark:text-brown-600 mt-2">
                  Replace this placeholder with your project video
                </p>
              </div>
            </div>
          </div>

          {/* Project Description */}
          <div className="prose max-w-none mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-tan-800 dark:text-brown-300">About This Project</h2>
            <p className="text-sm sm:text-base md:text-lg text-tan-800 dark:text-brown-500 leading-relaxed mb-4 sm:mb-6">{project.fullDescription}</p>

            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-tan-800 dark:text-brown-300 mt-8 sm:mt-12">Key Features</h2>
            <ul className="space-y-2 sm:space-y-3">
              {project.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-tan-700 dark:text-brown-400 mr-2 sm:mr-3 mt-1">▸</span>
                  <span className="text-sm sm:text-base text-tan-800 dark:text-brown-500 leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation to other projects */}
          <div className="border-t border-tan-300 dark:border-brown-600 pt-8 sm:pt-12 mt-8 sm:mt-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-h-[44px]"
            >
              <FaArrowLeft size={18} />
              <span className="text-sm sm:text-base">View All Projects</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProjectDetail

