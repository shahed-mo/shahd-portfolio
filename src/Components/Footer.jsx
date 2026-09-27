import React from "react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: "code",
      href: "https://github.com/shahed-mo",
    },
    {
      name: "LinkedIn",
      icon: "link",
      href: "https://www.linkedin.com/in/shahd-al-thawy-b190aa2b6",
    },
    {
      name: "WhatsApp",
      icon: "chat",
      href: "https://wa.me/201125123795",
    },
    {
      name: "Email",
      icon: "mail",
      href: "mailto:shahedmohamedsayed123@gmail.com",
    },
  ];

  return (
    <footer
      className="
        relative mt-20
        border-t border-neutral-200 dark:border-neutral-800
        bg-white/60 dark:bg-neutral-950/60
        backdrop-blur-md
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col items-center text-center gap-6">

          {/* Logo / Name */}
          <div>
            <h2 className="text-2xl font-black text-gray-900 dark:text-white">
              Shahd
              <span className="text-red-500">.</span>
            </h2>

            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Front-End Developer building modern web experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target={social.name !== "Email" ? "_blank" : undefined}
                rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={social.name}
                className="
                  w-10 h-10
                  rounded-full
                  flex items-center justify-center
                  bg-neutral-100 dark:bg-neutral-900
                  border border-neutral-200 dark:border-neutral-800
                  text-gray-600 dark:text-gray-400
                  hover:text-white
                  hover:bg-red-600
                  hover:border-red-600
                  hover:scale-110
                  transition-all duration-300
                "
              >
                <span className="material-symbols-outlined text-[19px]">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xl h-px bg-neutral-200 dark:bg-neutral-800" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-1 text-xs text-gray-500 dark:text-gray-500">
            <span>
              © {new Date().getFullYear()} Shahd Mohamed.
            </span>

            <span className="hidden sm:block">•</span>

            <span>All rights reserved.</span>
          </div>

        </div>
      </div>

      {/* Red Glow */}
      <div
        className="
          absolute left-1/2 bottom-0
          -translate-x-1/2
          w-40 h-1
          bg-red-600
          blur-md
          opacity-60
        "
      />
    </footer>
  );
};

export default Footer;