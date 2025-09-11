"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Filter, Eye, Star } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI Study Buddy",
    description:
      "A machine learning-powered study assistant that helps students optimize their learning schedule and provides personalized quiz questions.",
    image: "/ai-study-app-interface.jpg",
    technologies: ["Python", "TensorFlow", "React", "Node.js", "MongoDB"],
    category: "Machine Learning",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 2,
    title: "Campus Event Tracker",
    description:
      "Full-stack web application for Georgia Tech students to discover and track campus events with real-time notifications.",
    image: "/campus-events-mobile-app.jpg",
    technologies: ["React", "TypeScript", "Express", "PostgreSQL", "Socket.io"],
    category: "Web Development",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 3,
    title: "Sustainable Route Planner",
    description:
      "Mobile app that calculates the most environmentally friendly routes using public transportation and walking paths.",
    image: "/green-route-planning-app.jpg",
    technologies: ["React Native", "Google Maps API", "Firebase", "Node.js"],
    category: "Mobile Development",
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    id: 4,
    title: "Distributed File System",
    description:
      "Implementation of a fault-tolerant distributed file system with replication and consistency guarantees.",
    image: "/distributed-system-architecture-diagram.jpg",
    technologies: ["Go", "gRPC", "Docker", "Kubernetes"],
    category: "Systems",
    github: "https://github.com",
  },
]

const categories = ["All", "Machine Learning", "Web Development", "Mobile Development", "Systems"]

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A collection of projects that showcase my technical skills and passion for solving real-world problems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="mb-2 transform hover:scale-105 transition-all duration-200"
            >
              <Filter className="mr-2 h-4 w-4" />
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex items-center gap-1 text-white">
                    <Star className="h-4 w-4" />
                    <span className="text-sm">42</span>
                  </div>
                  <div className="flex items-center gap-1 text-white">
                    <Eye className="h-4 w-4" />
                    <span className="text-sm">1.2k</span>
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <Badge
                    variant="secondary"
                    className="transform group-hover:scale-110 transition-transform duration-200"
                  >
                    {project.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-pretty leading-relaxed">{project.description}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      style={{
                        animationDelay: `${techIndex * 50}ms`,
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="transform hover:scale-105 transition-all duration-200 bg-transparent"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild className="transform hover:scale-105 transition-all duration-200">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
