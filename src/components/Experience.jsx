const Experience = () => {
  const experiences = [
    {
      title: 'Warehouse Team Lead',
      company: 'Spud.ca',
      location: 'Calgary, AB',
      period: 'Apr 2020 - Present',
      achievements: [
        'Implemented Microsoft Dynamics during a digital inventory shift across 100+ categories',
        'Streamlined onboarding with Jira, reducing setup time and improving workflows',
        'Built Power BI dashboards to analyze key performance metrics and inform decisions',
        'Improved inventory reconciliation accuracy, reducing errors by 30%',
      ],
    },
    {
      title: 'Cashier',
      company: 'Massooms Bakers',
      location: 'Pakistan',
      period: 'Apr 2017 - Oct 2018',
      achievements: [
        'Processed 50-80 daily transactions with 100% accuracy, ensuring customer satisfaction',
        'Balanced cash drawer managing $1,500+ daily flow with zero discrepancies',
        'Assisted customers with product selection, boosting promoted item sales by 15%',
        'Collaborated with 5 teammates to maintain store cleanliness and smooth operations',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-tan-50 dark:bg-brown-900 border-b border-tan-200 dark:border-brown-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-tan-800 dark:text-brown-300">Experience</h2>

        <div className="space-y-8 sm:space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-beige-50 dark:bg-transparent dark:border dark:border-brown-500 border border-tan-300 rounded-lg p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-2 md:mb-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-tan-900 dark:text-brown-400 mb-1">{exp.title}</h3>
                  <p className="text-sm sm:text-base text-tan-700 dark:text-brown-500">{exp.company} • {exp.location}</p>
                </div>
                <span className="text-tan-600 dark:text-brown-600 text-xs sm:text-sm mt-1 md:mt-0">{exp.period}</span>
              </div>

              <ul className="space-y-2 sm:space-y-2.5 mt-4">
                {exp.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className="text-sm sm:text-base text-tan-800 dark:text-brown-500 leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

