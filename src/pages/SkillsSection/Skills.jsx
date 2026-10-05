import React, { useEffect, useRef } from "react";

const Skills = () => {
  const sectionRef = useRef(null);

  const skills = [
    { name: "React JS", percent: 90, color: "#06b6d4" },
    { name: "Tailwind CSS", percent: 85, color: "#38bdf8" },
    { name: "Next JS", percent: 75, color: "#a855f7" },
    { name: "JavaScript", percent: 88, color: "#eab308" },
    { name: "TypeScript", percent: 80, color: "#2563eb" },
    { name: "Redux Toolkit", percent: 85, color: "#8b5cf6" },
    { name: "Git & GitHub", percent: 90, color: "#f97316" },
    { name: "Firebase", percent: 75, color: "#f59e0b" },
  ];

  const radius = 50;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("skills-show");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="skills-section py-20 px-6 dark:border-neutral-800/40 text-center"
      data-purpose="skills-section"
      id="skills"
    >
      <div className="max-w-6xl w-full mx-auto space-y-12">

        {/* Section Header */}
        <div className="skills-header space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/30 border border-red-800/30 text-red-500 text-xs uppercase tracking-wider font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span>Expertise</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black  dark:text-white tracking-tight">
            My <span className="text-red-500">Skills</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Technologies and tools I work with to build amazing digital
            experiences
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pt-4">
          {skills.map((skill, index) => {
            const offset =
              circumference - (skill.percent / 100) * circumference;

            return (
              <div
                key={skill.name}
                className="skill-item flex flex-col items-center space-y-4"
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="relative w-36 h-36 flex items-center justify-center">
                  <svg
                    className="w-full h-full -rotate-90"
                    viewBox="0 0 120 120"
                  >
                    {/* Background Circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="transparent"
                      stroke="currentColor"
                      strokeWidth="8"
                      className="text-neutral-200 dark:text-neutral-800"
                    />

                    {/* Progress Circle */}
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="transparent"
                      stroke={skill.color}
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      className="skill-circle"
                    />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-black dark:text-white tracking-tight">
                      {skill.percent}%
                    </span>
                  </div>
                </div>

                <span className="text-base font-bold text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;