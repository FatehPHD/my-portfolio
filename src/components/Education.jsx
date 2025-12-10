const Education = () => {
  const education = [
    {
      degree: 'Software Engineering',
      school: 'University of Calgary',
      schoolDetail: 'Schulich School of Engineering',
      location: 'Calgary, AB',
      period: 'Sep 2022 - Present',
      coursework: [
        'Data Structures & Algorithms',
        'Software Design & Architecture',
        'Database Systems',
        'Web Development',
        'Object-Oriented Programming',
        'Software Engineering Principles',
      ],
      achievements: [
        // Add your achievements here, for example:
        // 'Dean\'s List - Fall 2023',
        // 'Hackathon Winner - 2024',
        // 'Outstanding Academic Performance',
      ],
    },
  ]

  return (
    <section id="education" className="section-padding bg-tan-50 dark:bg-brown-900 border-b border-tan-200 dark:border-brown-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-tan-800 dark:text-brown-300">Education</h2>

        <div className="space-y-8 sm:space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="bg-beige-50 dark:bg-transparent dark:border dark:border-brown-500 border border-tan-300 rounded-lg p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 sm:mb-6">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-tan-900 dark:text-brown-400 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-base sm:text-lg text-tan-800 dark:text-brown-500 mb-1">{edu.school}</p>
                  <p className="text-sm sm:text-base text-tan-700 dark:text-brown-500 mb-1">{edu.schoolDetail}</p>
                  <p className="text-sm text-tan-600 dark:text-brown-500">{edu.location}</p>
                </div>
                <div className="mt-2 md:mt-0 text-left md:text-right">
                  <span className="text-tan-600 dark:text-brown-600 text-xs sm:text-sm block">{edu.period}</span>
                </div>
              </div>

              {/* Relevant Coursework */}
              {edu.coursework && edu.coursework.length > 0 && (
                <div className="mt-6 sm:mt-8">
                  <h4 className="text-sm sm:text-base font-semibold text-tan-800 dark:text-brown-500 mb-3 sm:mb-4 uppercase tracking-wide">
                    Relevant Coursework
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, courseIndex) => (
                      <span
                        key={courseIndex}
                        className="px-3 py-1.5 bg-tan-50 dark:bg-transparent dark:border dark:border-brown-400 text-tan-800 dark:text-brown-500 rounded text-xs sm:text-sm border border-tan-300 hover:dark:bg-brown-700 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Achievements */}
              {edu.achievements && edu.achievements.length > 0 && (
                <div className="mt-6 sm:mt-8">
                  <h4 className="text-sm sm:text-base font-semibold text-tan-800 dark:text-brown-500 mb-3 sm:mb-4 uppercase tracking-wide">
                    Achievements
                  </h4>
                  <ul className="space-y-2">
                    {edu.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-sm sm:text-base text-tan-800 dark:text-brown-500">
                        <span className="text-tan-700 dark:text-brown-500 mr-2 mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

