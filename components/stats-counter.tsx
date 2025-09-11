"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Total Commits", value: 800, suffix: "+" },
  { label: "Lines of Code", value: 50000, suffix: "+" },
  { label: "Coffee Cups", value: 999, suffix: "+" },
]

export function StatsCounter() {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          stats.forEach((stat) => {
            let current = 0
            const increment = stat.value / 100
            const timer = setInterval(() => {
              current += increment
              if (current >= stat.value) {
                current = stat.value
                clearInterval(timer)
              }
              setAnimatedValues((prev) => ({
                ...prev,
                [stat.label]: Math.floor(current),
              }))
            }, 20)
          })
        }
      },
      { threshold: 0.5 },
    )

    const element = document.getElementById("stats")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [isVisible])

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {animatedValues[stat.label] || 0}
                  {stat.suffix}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
