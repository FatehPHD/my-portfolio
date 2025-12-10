const Footer = () => {
  return (
    <footer className="border-t border-tan-200 dark:border-brown-700 py-8 bg-tan-50 dark:bg-brown-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-tan-600 dark:text-brown-600 text-sm">
          © {new Date().getFullYear()} Fateh Ali Bukhari. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

