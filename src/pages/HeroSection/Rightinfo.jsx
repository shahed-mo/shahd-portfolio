import React from "react";

const Rightinfo = () => {
  const stats = [
    {
      number: "1+",
      label: "Years Experience",
    },
    {
      number: "10+",
      label: "Projects Done",
    },
    {
      number: "5+",
      label: "Technologies",
    },
  ];

  return (
    <div className="lg:col-span-6 text-center lg:text-left order-1 lg:order-2 space-y-6">

      {/* Status Pill */}
      <div
        className="
          inline-flex items-center gap-2
          px-3.5 py-1.5 rounded-full
          bg-red-100/70 dark:bg-red-950/40
          border border-red-200 dark:border-red-800/40
          text-red-700 dark:text-red-400
          text-xs font-semibold tracking-wide
        "
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>

        <span>Available for work</span>
      </div>

      {/* Heading */}
      <div className="space-y-2">
        <h1
          className="
            text-4xl sm:text-6xl
            font-bold
            text-zinc-900 dark:text-white
            tracking-tight
          "
        >
          Hi, I'm{" "}
          <span
            className="
              font-semibold text-transparent bg-clip-text
              bg-gradient-to-r from-red-600 via-rose-500 to-red-600
              dark:from-red-500 dark:via-rose-500 dark:to-red-600
              neon-text-red
            "
          >
            Shahd
          </span>
        </h1>

        <p
          className="
            text-lg sm:text-2xl
            font-mono
            text-red-600 dark:text-red-400
            font-semibold tracking-wide
          "
        >
          &lt;Frontend Developer&gt;
        </p>
      </div>

      {/* Description */}
      <p
        className="
          text-zinc-600 dark:text-zinc-300
          text-base sm:text-lg
          max-w-xl
          leading-relaxed
        "
      >
        I’m a Front-End Developer who builds modern, responsive, and
        user-friendly web experiences with React.js.
      </p>

      {/* Stats - تم تعديل الخلفية لتكون بيضاء ناصعة في الـ Light Mode ودقيقة في الـ Dark Mode */}
      <div className="grid grid-cols-3 gap-4 pt-2 max-w-md mx-auto lg:mx-0">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="
              p-3.5 text-center rounded-xl
              bg-white dark:bg-zinc-900/60
              border border-zinc-200 dark:border-zinc-800
              shadow-sm hover:shadow dark:shadow-none
              hover:border-red-300 dark:hover:border-red-800/60
              transition-all duration-300
            "
          >
            <div
              className="
                text-2xl sm:text-3xl
                font-black
                text-zinc-900 dark:text-white
              "
            >
              {stat.number}
            </div>

            <div
              className="
                text-xs
                text-zinc-500 dark:text-zinc-400
                font-medium mt-1
              "
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">

        {/* Download CV */}
        <a
          href="https://drive.google.com/uc?export=download&id=1OTI5EDJNt0B0IF6mFwQvXfjCIexul_FlU"
          className="
            inline-flex items-center gap-2.5
            px-6 py-3 rounded-full
            bg-gradient-to-r from-red-600 to-rose-600
            hover:from-red-500 hover:to-rose-500
            text-white font-semibold text-sm
            shadow-md shadow-red-500/20 dark:shadow-red-900/30
            transition-all
            hover:scale-105
          "
        >
          <span className="material-symbols-outlined text-[18px]">
            download
          </span>

          <span>Download CV</span>
        </a>

        {/* Hire Me */}
        <a
          href="#contact"
          className="
            inline-flex items-center gap-2.5
            px-6 py-3 rounded-full
            border-2
            border-red-600 dark:border-red-500
            text-red-600 dark:text-red-400
            hover:bg-red-600 hover:text-white
            dark:hover:bg-red-600 dark:hover:text-white
            bg-transparent
            font-semibold text-sm
            transition-all
            hover:scale-105
          "
        >
          <span className="material-symbols-outlined text-[18px]">
            mail
          </span>

          <span>Hire Me</span>
        </a>

      </div>
    </div>
  );
};

export default Rightinfo;