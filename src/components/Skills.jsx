const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['Java', 'Python', 'C/C++', 'SQL', 'JavaScript', 'HTML/CSS'],
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Node.js', 'Flask', 'Spring Boot'],
    },
    {
      title: 'Developer Tools',
      skills: ['Git', 'Docker', 'Jira', 'Power BI', 'VS Code', 'PyCharm', 'Eclipse'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL'],
    },
    {
      title: 'Libraries',
      skills: ['pandas', 'NumPy', 'Matplotlib'],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-tan-50 dark:bg-brown-900 border-b border-tan-200 dark:border-brown-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-tan-800 dark:text-brown-300">Technical Skills</h2>

        <div className="space-y-5 sm:space-y-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-beige-50 dark:bg-transparent dark:border dark:border-brown-500 border border-tan-300 rounded-lg p-4 sm:p-5">
              <h3 className="text-xs sm:text-sm font-semibold text-tan-600 dark:text-brown-500 mb-2 sm:mb-3 uppercase tracking-wide">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 sm:px-3 py-1.5 sm:py-1 bg-tan-50 dark:bg-transparent dark:border dark:border-brown-400 text-tan-800 dark:text-brown-500 rounded text-xs sm:text-sm border border-tan-300 hover:dark:bg-brown-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

