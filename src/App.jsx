import Footer from "./Components/Footer"
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav"
import AboutSection from "./pages/AboutSection/AboutSection"
import ContactSection from "./pages/ContactSection/ContactSection"
import HeroSection from "./pages/HeroSection/HeroSection"
import ProjectsSection from "./pages/ProjectsSection/ProjectsSection"
import Skills from "./pages/SkillsSection/Skills"
import { useState,useEffect } from "react"
const App = () => {
  return (
        <div
      className="
        bg-main-glow
        text-gray-900
        dark:text-gray-100
        transition-colors
        duration-300
        font-sans
        antialiased
        relative
        min-h-screen
        pb-32
      "
    >
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <Skills/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
      <Nav/>
    </div>
    
  )
}

export default App