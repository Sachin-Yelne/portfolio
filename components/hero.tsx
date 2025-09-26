"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const titles = ["Computer Science Student", "Full-Stack Developer", "Researcher", "Problem Solver"]

  useEffect(() => {
    const currentTitle = titles[currentIndex]
    if (displayedText.length < currentTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentTitle.slice(0, displayedText.length + 1))
      }, 100)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText("")
        setCurrentIndex((prev) => (prev + 1) % titles.length)
      }, 2000)
      return () => clearTimeout(timeout)
    }
  }, [displayedText, currentIndex])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-6">
          <div className="relative h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56">
            <Image
              src="me.jpeg"
              alt="Portrait"
              fill
              sizes="(max-width: 640px) 10rem, (max-width: 768px) 12rem, 14rem"
              priority
              className="rounded-full object-cover ring-1 ring-border shadow-xl shadow-black/20"
            />
          </div>
        </div>
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-4 text-balance animate-in fade-in duration-1000">
            Sachin Yelne
          </h1>
          <h2 className="text-xl sm:text-2xl text-primary font-semibold mb-6 h-8">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed animate-in slide-in-from-bottom-4 duration-1000 delay-300">
          I am passionate about building software that not only solves problems but also improves how people interact with technology. Currently pursuing my BS in Computer Science with a focus on machine learning and full-stack development, I enjoy tackling challenges and learning new skills. Beyond coding, I value teamwork, creativity, and perseverance. In my free time, I like going to the gym, playing pickleball, and staying active, which keeps me balanced and motivated. Looking for a challenging opportunity to apply my skills and grow as a developer.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-in slide-in-from-bottom-4 duration-1000 delay-500">
          <Button
            size="lg"
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 hover:shadow-lg"
          >
            <a href="#contact" aria-label="Jump to contact section">
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="transform hover:scale-105 transition-all duration-200 hover:shadow-lg bg-transparent"
          >
            <a href="Yelne_Sachin_Aug_2025_Resume.pdf" download="Sachin_Yelne_Resume.pdf" aria-label="Download resume PDF">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 animate-in slide-in-from-bottom-4 duration-1000 delay-700">
          <a
            href="https://github.com/Sachin-Yelne"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-200 transform hover:scale-110 hover:-translate-y-1"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sachin-yelne/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-all duration-200 transform hover:scale-110 hover:-translate-y-1"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="mailto:sachin.a.yelne@gmail.com"
            className="text-muted-foreground hover:text-primary transition-all duration-200 transform hover:scale-110 hover:-translate-y-1"
          >
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Scroll to next section"
      >
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  )
}
