import React, { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import weflixImg from "../../assets/images/weflix.png";
import dessertImg from "../../assets/images/dessert.png";
import fashionImg from "../../assets/images/fashion.png";
import chatImg from "../../assets/images/chatImg.png";
import teacherImg from "../../assets/images/tech.png";

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  const projects = [
    {
      title: "WeFlix",
      description:
        "A movie and TV show discovery platform with search, filtering, trending content, authentication, and watchlist functionality.",
      image: weflixImg,
      technologies: [
        "React",
        "Redux Toolkit",
        "React Query",
        "Firebase",
        "Tailwind CSS",
      ],
      code: "https://github.com/shahed-mo/movie-App",
      demo: "https://movie-ib6dos0qa-shaheds-projects-cdf93742.vercel.app/",
    },

    {
      title: "Fashion E-Commerce",
      description:
        "A modern fashion e-commerce application with authentication, product filtering, cart, wishlist, and protected routes.",
      image: fashionImg,
      technologies: [
        "React",
        "Redux Toolkit",
        "React Query",
        "Firebase",
        "Tailwind CSS",
      ],
      code: "https://github.com/shahed-mo/Fashion-Ecommerce",
      demo: "https://fashion-ecommerce-swart-iota.vercel.app/",
    },

    {
      title: "Dessert Cart",
      description:
        "A responsive dessert shopping cart application with product selection, quantity management, item deletion, and dynamic total calculation.",
      image: dessertImg,
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      code: "#",
      demo: "https://dessert-cart-qaisjs06f-shaheds-projects-cdf93742.vercel.app/",
    },

    {
      title: "ChatApp",
      description:
        "A real-time chat application built with React, providing a modern interface for messaging and user interaction.",
      image: chatImg,
      technologies: ["React", "Firebase", "CSS","Formik"],
      code: "https://github.com/shahed-mo/ChatApp",
      demo: "https://chat-app-9m8g.vercel.app/",
    },
    {
    title: "معلم خصوصي",
    description:
      "A responsive Arabic educational website for two specialized teachers, featuring teacher profiles, educational subjects, student reviews, and contact pages.",
    image: teacherImg,
    technologies: [
      "React",
      "JavaScript",
      "React Router",
      "Tailwind CSS",
      "Material Symbols",
    ],
    code: "https://github.com/shahed-mo/moalem-khososy",
    demo: "https://www.moalem-khososy.site/",
  },
  ];

  // Scroll Animation
  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("projects-show");
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="projects-section py-20 px-6 dark:border-neutral-800/40"
      data-purpose="projects-section"
      id="projects"
    >
      <div className="max-w-6xl w-full mx-auto space-y-10">

        {/* Header */}
        <div className="projects-header flex items-center justify-between">

          {/* Title */}
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              My Creative{" "}
              <span className="text-red-500">Projects</span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">

            {/* Previous */}
            <button
              className="projects-prev w-10 h-10 rounded-full
              border border-neutral-300 dark:border-neutral-700
              flex items-center justify-center
              text-gray-500 dark:text-gray-300
              hover:text-red-500 hover:border-red-500
              transition-colors"
              aria-label="Previous Project"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_back
              </span>
            </button>

            {/* Next */}
            <button
              className="projects-next w-10 h-10 rounded-full
              border border-neutral-300 dark:border-neutral-700
              flex items-center justify-center
              text-gray-500 dark:text-gray-300
              hover:text-red-500 hover:border-red-500
              transition-colors"
              aria-label="Next Project"
            >
              <span className="material-symbols-outlined text-[20px]">
                arrow_forward
              </span>
            </button>

          </div>
        </div>

        {/* Projects Slider */}
        <div className="projects-slider">

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".projects-prev",
              nextEl: ".projects-next",
            }}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-2"
          >

            {projects.map((project) => (
              <SwiperSlide
                key={project.title}
                className="!h-auto"
              >

                {/* Card */}
                <div
                  className="h-full min-h-[480px] flex flex-col
                  rounded-3xl overflow-hidden
                  bg-neutral-100 dark:bg-neutral-900/60
                  border border-neutral-200 dark:border-neutral-800/80
                  shadow-xl group
                  hover:border-red-500/50
                  transition-all duration-300"
                >

                  {/* Image */}
                  <div className="p-3 bg-neutral-200/50 dark:bg-neutral-800/40">

                    <div className="rounded-2xl overflow-hidden aspect-video bg-neutral-900">

                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover
                        group-hover:scale-105
                        transition-transform duration-500"
                      />

                    </div>

                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col flex-1">

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 text-xs text-gray-600 dark:text-gray-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">

                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-full
                          bg-red-950/40 text-red-400
                          border border-red-900/30"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                    {/* Links */}
                    <div
                      className="pt-4 mt-auto
                      border-t border-neutral-200 dark:border-neutral-800/80
                      flex items-center justify-between
                      text-xs font-semibold
                      text-gray-500 dark:text-gray-300"
                    >

                      {/* Code */}
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5
                        hover:text-red-500 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[17px]">
                          code
                        </span>

                        <span>Code</span>
                      </a>

                      {/* Live Demo */}
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5
                        hover:text-red-500 transition-colors"
                      >
                        <span className="material-symbols-outlined text-[17px]">
                          open_in_new
                        </span>

                        <span>Live Demo</span>
                      </a>

                    </div>

                  </div>
                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;