import React, { useEffect, useRef } from "react";
import TextDetails from "./TextDetails";
import ImgDetails from "./ImgDetails";

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("about-show");
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
      className="about-section py-20 px-6  dark:border-neutral-800/40"
      data-purpose="about-section"
      id="about"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        {/* Text details */}
        <div className="about-text lg:col-span-7">
          <TextDetails />
        </div>

        {/* Image */}
        <div className="about-image lg:col-span-5">
          <ImgDetails />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;