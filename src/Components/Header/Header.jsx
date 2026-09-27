import React from 'react'

const Header = () => {
  return (
    <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center 
    justify-between " data-purpose="top-navigation">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 dark:border-neutral-700/60 flex items-center justify-center shadow-lg shadow-red-950/20">
            {/* Brain Logo */}
            <svg className="w-6 h-6 text-red-500" fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            >
                <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
                <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
                <path d="M12 5v13" />
                <path d="M16 8h2a2 2 0 0 1 2 2v1" />
                <path d="M8 8H6a2 2 0 0 0-2 2v1" />
                <path d="M16 16h2a2 2 0 0 0 2-2v-1" />
                <path d="M8 16H6a2 2 0 0 1-2-2v-1" />
                </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">SHAHD
                <span className="text-red-500">.dev</span>
            </span>

        </div>
        <a
  className="
    hidden sm:inline-flex
    items-center gap-2
    px-4 py-2
    text-sm font-medium
    rounded-full
    bg-neutral-200 dark:bg-neutral-800
    text-gray-800 dark:text-gray-200
    hover:text-red-500 dark:hover:text-red-400
    transition-colors
    border border-neutral-300 dark:border-neutral-700
  "
  href="https://wa.me/201125123795"
  target="_blank"
  rel="noopener noreferrer"
>
  <span>Get in Touch</span>

  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      d="M14 5l7 7m0 0l-7 7m7-7H3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
</a>
    </header>
  )
}

export default Header