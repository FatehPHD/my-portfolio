import { Link } from 'react-router-dom'
import { projects, getFeaturedProjects } from '../data/projects'

const Projects = () => {
  const featuredProjects = getFeaturedProjects()
  const allProjects = projects

  return (
    <section id="projects" className="section-padding bg-tan-50 dark:bg-brown-900 border-b border-tan-200 dark:border-brown-700">
      <div className="max-w-6xl mx-auto">
        {/* Featured Work */}
        <div className="mb-12 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-tan-800 dark:text-brown-300">Featured Work</h2>
          <div className="space-y-8 sm:space-y-12">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="block border-b border-tan-300 dark:border-brown-600 pb-8 sm:pb-12 last:border-0 active:opacity-70 transition-all hover:shadow-md dark:hover:shadow-brown-lg -mx-4 px-4 py-4 rounded-lg"
              >
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-start">
                  {/* Video Placeholder */}
                  <div className="aspect-video bg-tan-200 dark:bg-brown-800 flex items-center justify-center rounded w-full border border-tan-300 dark:border-brown-600">
                    <div className="text-center p-4">
                      <svg
                        className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-tan-500 mb-2"
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
                      <p className="text-xs sm:text-sm text-tan-600">Video Coming Soon</p>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-tan-900 dark:text-brown-400">{project.title}</h3>
                    <p className="text-sm sm:text-base text-tan-700 dark:text-brown-500 mb-3 sm:mb-4">{project.tagline}</p>
                    <p className="text-sm sm:text-base text-tan-800 dark:text-brown-500 mb-3 sm:mb-4 leading-relaxed">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-tan-200 dark:bg-transparent dark:border dark:border-brown-400 text-tan-800 dark:text-brown-500 rounded text-xs hover:dark:bg-brown-800 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm text-tan-600 dark:text-brown-600">{project.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-8 text-tan-800 dark:text-brown-300">My Projects</h2>
          <p className="text-sm sm:text-base text-tan-700 dark:text-brown-500 mb-8 sm:mb-12">
            I love to create things, and I'm always working on something new! You can view some of my favorite projects below.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {allProjects.map((project) => (
              <Link
                key={project.id}
                to={`/project/${project.id}`}
                className="group block active:opacity-70 bg-beige-50 dark:bg-transparent dark:border dark:border-brown-500 border border-tan-300 rounded-lg p-4 hover:shadow-md dark:hover:shadow-brown-md transition-all"
              >
                {/* Video Placeholder */}
                <div className="aspect-video bg-tan-200 dark:bg-brown-800 flex items-center justify-center rounded mb-3 sm:mb-4 group-active:bg-tan-300 dark:group-active:bg-brown-700 transition-colors border border-tan-300 dark:border-brown-600">
                  <div className="text-center p-4">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-tan-500 mb-2"
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
                    <p className="text-xs text-tan-600">Video Coming Soon</p>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-semibold mb-1 text-tan-900 dark:text-brown-400 group-active:text-tan-700 dark:group-active:text-brown-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-tan-700 dark:text-brown-500 mb-2">{project.tagline}</p>
                <p className="text-xs sm:text-sm text-tan-800 dark:text-brown-500 mb-2 sm:mb-3 line-clamp-3">{project.shortDescription}</p>
                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-0.5 bg-tan-200 dark:bg-transparent dark:border dark:border-brown-400 text-tan-700 dark:text-brown-500 rounded text-xs hover:dark:bg-brown-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-0.5 text-tan-600 dark:text-brown-600 text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <span className="text-xs text-tan-600 dark:text-brown-600">{project.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
