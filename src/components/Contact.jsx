import { useState } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaCheckCircle } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data in the desired format
    const subject = `Contact from ${formData.name}`
    const body = `Hi Fateh,\n\n${formData.message}\n\nPlease follow up when convenient.\n\nBest regards,\n${formData.name}\n${formData.email}\n\nYour Portfolio Contact System`
    const mailtoLink = `mailto:ShahjiFateh@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    // Open email client
    window.location.href = mailtoLink
    
    // Show success message
    setIsSubmitted(true)
    
    // Reset form after showing message
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="section-padding bg-tan-50 dark:bg-brown-900 border-b border-tan-200 dark:border-brown-700">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-8 sm:mb-12 text-tan-800 dark:text-brown-300">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-beige-50 dark:bg-transparent dark:border dark:border-brown-500 border border-tan-300 rounded-lg p-6 sm:p-8 shadow-sm">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-base border border-tan-400 dark:border-brown-600 rounded focus:outline-none focus:border-tan-700 dark:focus:border-brown-500 transition-colors bg-tan-50 dark:bg-brown-800/50 text-tan-900 dark:text-brown-400 placeholder-tan-500 dark:placeholder-brown-500"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 text-base border border-tan-400 dark:border-brown-600 rounded focus:outline-none focus:border-tan-700 dark:focus:border-brown-500 transition-colors bg-tan-50 dark:bg-brown-800/50 text-tan-900 dark:text-brown-400 placeholder-tan-500 dark:placeholder-brown-500"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full px-4 py-3 text-base border border-tan-400 dark:border-brown-600 rounded focus:outline-none focus:border-tan-700 dark:focus:border-brown-500 transition-colors resize-none bg-tan-50 dark:bg-brown-800/50 text-tan-900 dark:text-brown-400 placeholder-tan-500 dark:placeholder-brown-500"
              />
            </div>
            <button
              type="submit"
              className="w-full min-h-[44px] px-6 py-3 bg-tan-700 dark:bg-brown-800 text-white dark:text-brown-400 rounded hover:bg-tan-800 dark:hover:bg-brown-700 active:bg-tan-900 dark:active:bg-brown-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-base font-medium"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <span className="flex items-center justify-center gap-2">
                  <FaCheckCircle />
                  Opening Email Client...
                </span>
              ) : (
                'Send Message'
              )}
            </button>
            
            {isSubmitted && (
              <p className="text-xs sm:text-sm text-tan-700 dark:text-brown-500 mt-2">
                Your email client should open. If it doesn't, please email me directly at{' '}
                <a href="mailto:ShahjiFateh@gmail.com" className="text-tan-800 dark:text-brown-400 underline">
                  ShahjiFateh@gmail.com
                </a>
              </p>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-6 mt-8 md:mt-0">
            <div className="bg-beige-50 dark:bg-transparent dark:border dark:border-brown-500 border border-tan-300 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold mb-4 text-tan-900 dark:text-brown-400">Get in touch</h3>
              <div className="space-y-3 sm:space-y-4">
                <a
                  href="mailto:ShahjiFateh@gmail.com"
                  className="flex items-center gap-3 text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-h-[44px]"
                >
                  <FaEnvelope size={20} />
                  <span className="text-sm sm:text-base break-all">ShahjiFateh@gmail.com</span>
                </a>
                <a
                  href="tel:+15876641333"
                  className="flex items-center gap-3 text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-h-[44px]"
                >
                  <FaPhone size={20} />
                  <span className="text-sm sm:text-base">(587) 664-1333</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/fatehalibukhari/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-h-[44px]"
                >
                  <FaLinkedin size={20} />
                  <span className="text-sm sm:text-base">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/FatehPHD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-tan-700 dark:text-brown-500 hover:text-tan-900 dark:hover:text-brown-400 transition-colors min-h-[44px]"
                >
                  <FaGithub size={20} />
                  <span className="text-sm sm:text-base">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
