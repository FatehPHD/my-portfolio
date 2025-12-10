import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'

const About = () => {
  return (
    <section id="about" className="section-padding bg-tan-50 dark:bg-brown-900 pt-20 sm:pt-24 border-b border-tan-200 dark:border-brown-700">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4 sm:space-y-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-normal text-tan-900 dark:text-brown-400 leading-tight">
            Hey, I'm <span className="font-semibold text-tan-800 dark:text-brown-300">Fateh Ali Bukhari</span>. Here, you can check out what I'm working on.
          </h1>
          
          {/* Profile Photo */}
          <div className="flex justify-center py-4 sm:py-6">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-tan-300 dark:border-brown-600 shadow-lg">
              <img
                src="/profile.jpg"
                alt="Fateh Ali Bukhari"
                className="w-full h-full object-cover scale-125"
              />
            </div>
          </div>
          
          <p className="text-base sm:text-lg text-tan-700 dark:text-brown-500 leading-relaxed">
            I try my best to create things with passion
          </p>
          
          {/* Social Links */}
          <div className="flex flex-wrap gap-3 sm:gap-4 pt-4 justify-center">
            <a
              href="/resume/Fateh_Ali_Bukhari_Resume.pdf"
              download="Fateh_Ali_Bukhari_Resume.pdf"
              className="flex items-center gap-2 text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-h-[44px] px-3 py-2"
            >
              <FaDownload size={20} />
              <span className="text-sm sm:text-base">Download Resume</span>
            </a>
            <a
              href="https://www.linkedin.com/in/fatehalibukhari/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-h-[44px] px-3 py-2"
            >
              <FaLinkedin size={20} />
              <span className="text-sm sm:text-base">LinkedIn</span>
            </a>
            <a
              href="https://github.com/FatehPHD"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-h-[44px] px-3 py-2"
            >
              <FaGithub size={20} />
              <span className="text-sm sm:text-base">GitHub</span>
            </a>
            <a
              href="mailto:ShahjiFateh@gmail.com"
              className="flex items-center gap-2 text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-h-[44px] px-3 py-2"
            >
              <FaEnvelope size={20} />
              <span className="text-sm sm:text-base">Email</span>
            </a>
            <a
              href="tel:+15876641333"
              className="flex items-center gap-2 text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-h-[44px] px-3 py-2"
            >
              <FaPhone size={20} />
              <span className="text-sm sm:text-base">(587) 664-1333</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

