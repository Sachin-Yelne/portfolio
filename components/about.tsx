import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Code, Lightbulb } from "lucide-react"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground text-pretty">
                Full-stack developer with experience in React, Node.js, Python, and cloud technologies. Love building
                scalable applications.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 overflow-hidden">
                <Image src="GT_Logo.png" alt="Georgia Tech logo" width={30} height={30} className="object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-muted-foreground text-pretty">
                BS CS at Georgia Institute of Technology, focusing on Human-Computer Interaction and Machine Learning.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground text-pretty">
                Always exploring new technologies and methodologies to solve complex problems and create meaningful user
                experiences.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-muted-foreground leading-relaxed text-pretty">
            My passion for technology started in high school when I built my first web application. Since then, I've
            been fascinated by how code can solve real-world problems and create meaningful experiences. At Georgia
            Tech, I've had the opportunity to work on diverse projects ranging from machine learning research to
            full-stack web applications. I'm particularly interested in the intersection of AI and user experience
            design, and how we can leverage emerging technologies to build more intuitive and accessible software.
          </p>
        </div>
      </div>
    </section>
  )
}
