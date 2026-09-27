import React, { useEffect, useState } from "react";

const Nav = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", section: "home", icon: "home" },
    { name: "About", section: "about", icon: "person" },
    { name: "Skills", section: "skills", icon: "code" },
    { name: "Projects", section: "projects", icon: "inventory_2" },
    { name: "Contact", section: "contact", icon: "mail" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="
        fixed
        bottom-3 sm:bottom-5
        left-1/2
        -translate-x-1/2
        z-50
        w-[calc(100%-2rem)]
        max-w-md sm:max-w-xl md:max-w-2xl
        box-border
      "
      data-purpose="floating-navbar"
    >
      <div
        className="
          w-full
          px-2 sm:px-4
          py-2 sm:py-2.5
          rounded-2xl sm:rounded-full
          bg-gradient-to-r
          from-red-700
          via-red-600
          to-red-800
          text-white
          shadow-2xl
          shadow-red-950/70
          border border-red-500/40
          backdrop-blur-md
        "
      >
        <div
          className="
            flex
            items-center
            justify-around
            w-full
            gap-1 sm:gap-2
          "
        >
          {navItems.map((item) => (
            <a
              key={item.section}
              href={`#${item.section}`}
              className={`
                flex
                flex-1
                min-w-0
                flex-col
                items-center
                justify-center
                gap-0.5
                py-1.5 px-1 sm:px-3
                rounded-xl
                transition-all
                duration-300

                ${
                  activeSection === item.section
                    ? "opacity-100 scale-100 bg-white/20 text-white shadow-md"
                    : "opacity-75 hover:opacity-100 hover:scale-105"
                }
              `}
            >
              <span
                className="
                  material-symbols-outlined
                  text-[18px]
                  sm:text-[22px]
                  shrink-0
                "
              >
                {item.icon}
              </span>

              <span
                className="
                  text-[10px]
                  sm:text-xs
                  font-medium
                  truncate
                  max-w-full
                "
              >
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;