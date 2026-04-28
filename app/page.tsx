"use client"

import { useState } from "react";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Tecnologies from "@/components/tecnologies";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Education from "@/components/education";
import About from "@/components/about";
import Hero from "@/components/hero";
import Footer from "@/components/footer";

export default function Home() {
  const [idioma, setIdioma] = useState<"pt" | "en">("pt")
  return (
    <>
      <Navbar idioma={idioma} setIdioma={setIdioma} />
      <Hero idioma={idioma} />
      <Projects idioma={idioma} />
      <Experience idioma={idioma} />
      <Tecnologies idioma={idioma} />
      <Education idioma={idioma} />
      <About idioma={idioma} />
      <Contact idioma={idioma} />
      <Footer idioma={idioma}/>
    </>
  )
}
