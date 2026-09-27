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
      className="fixed bottom-6 inset-x-0 mx-auto w-[94%] max-w-2xl z-50"
      data-purpose="floating-navbar"
    >
      <div
        className="
          relative flex items-center justify-between
          px-3 sm:px-6 py-2.5
          rounded-full
          bg-gradient-to-r from-red-700 via-red-600 to-red-800
          text-white
          shadow-2xl shadow-red-950/80
          border border-red-500/40
          backdrop-blur-md
        "
      >
        {/* Navigation Links */}
        <div className="flex items-center justify-around w-full gap-1 sm:gap-4 text-xs font-semibold">
          {navItems.map((item) => (
            <a
              key={item.section}
              href={`#${item.section}`}
              className={`
                nav-item
                flex flex-col items-center
                gap-0.5
                px-2 py-1
                rounded-xl
                transition-all
                ${
                  activeSection === item.section
                    ? "opacity-100 scale-110 bg-white/15 text-white shadow-lg"
                    : "opacity-70 hover:opacity-100 hover:scale-110"
                }
              `}
            >
              <span className="material-symbols-outlined text-[18px]">
                {item.icon}
              </span>

              <span className="text-[10px] sm:text-xs">
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