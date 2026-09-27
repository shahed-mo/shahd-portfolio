import React from 'react'

const TextDetails = () => {
     const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shahd-al-thawy-b190aa2b6",
    icon: "link",
  },
  {
    name: "GitHub",
    href: "https://github.com/shahed-mo",
    icon: "code",
  },
  {
  name: "Email",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=shahedmohamedsayed123@gmail.com",
  icon: "mail",
},
  {
    name: "WhatsApp",
    href: "https://wa.me/201125123795",
    icon: "chat",
  },
];

  return (
    <div className="lg:col-span-7 space-y-6">

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/30 border border-red-800/30 text-red-500 text-xs uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span>ABOUT ME</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
            Turning Ideas Into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-500">
              Digital Reality
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
            I'm a passionate Frontend Developer dedicated to creating
            exceptional digital experiences. With a keen eye for design and a
            love for clean code, I transform complex problems into elegant,
            user-friendly solutions.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel={
                  social.name !== "Email"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="w-11 h-11 rounded-full
                bg-neutral-200 dark:bg-neutral-900
                border border-neutral-300 dark:border-neutral-800
                flex items-center justify-center
                text-gray-600 dark:text-gray-300
                hover:text-red-500 dark:hover:text-red-400
                hover:border-red-500
                transition-all hover:scale-110"
              >
                <span className="material-symbols-outlined">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
            href="https://wa.me/201125123795"
            className="inline-flex items-center gap-3 px-8 py-3 rounded-full
            bg-gradient-to-r from-red-600 to-rose-600
            hover:from-red-500 hover:to-rose-500
            text-white font-semibold text-sm
            shadow-xl shadow-red-600/30
            transition-all hover:scale-105"
            >
                <span>Let's Talk</span>
           <span className="material-symbols-outlined text-[10px]">arrow_forward</span>
           </a>
        </div>

        </div>
  )
}

export default TextDetails