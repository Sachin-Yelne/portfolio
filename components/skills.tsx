"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Code, Database, Cloud, Cpu } from "lucide-react"
import { useEffect, useState } from "react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript/TypeScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "Go", level: 70 },
    ],
  },
  {
    title: "Web Technologies",
    icon: Database,
    skills: [
      { name: "React/Next.js", level: 90 },
      { name: "Node.js", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "GraphQL", level: 75 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 80 },
      { name: "Docker", level: 85 },
      { name: "Kubernetes", level: 70 },
      { name: "CI/CD", level: 75 },
      { name: "Git", level: 90 },
    ],
  },
  {
    title: "AI & Data Science",
    icon: Cpu,
    skills: [
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "Pandas/NumPy", level: 85 },
      { name: "Machine Learning", level: 80 },
      { name: "Data Analysis", level: 85 },
    ],
  },
]

export function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              setTimeout(() => {
                setAnimatedSkills((prev) => ({
                  ...prev,
                  [skill.name]: skill.level,
                }))
              }, Math.random() * 1000)
            })
          })
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("skills")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive overview of my technical expertise across different domains of software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.title}
                className="hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group"
                style={{
                  animationDelay: `${categoryIndex * 200}ms`,
                }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                      <IconComponent className="h-5 w-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="space-y-2 group/skill"
                      style={{
                        animationDelay: `${skillIndex * 100}ms`,
                      }}
                    >
                      <div className="flex justify-between text-sm">
                        <span className="font-medium group-hover/skill:text-primary transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-muted-foreground font-mono">{animatedSkills[skill.name] || 0}%</span>
                      </div>
                      <Progress
                        value={animatedSkills[skill.name] || 0}
                        className="h-2 group-hover/skill:h-3 transition-all duration-300"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
