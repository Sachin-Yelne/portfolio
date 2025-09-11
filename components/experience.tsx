import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Microsoft",
    location: "Atlanta, GA",
    period: "Summer 2024",
    description:
      "Developed machine learning features for Azure Cognitive Services, improving model accuracy by 15%. Collaborated with cross-functional teams to implement scalable cloud solutions.",
    technologies: ["Python", "Azure", "TensorFlow", "Docker"],
  },
  {
    title: "Full Stack Developer",
    company: "GT Startup Incubator",
    location: "Atlanta, GA",
    period: "Jan 2024 - Present",
    description:
      "Leading development of a student entrepreneurship platform. Built responsive web applications and RESTful APIs serving 500+ active users.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    title: "Research Assistant",
    company: "Georgia Tech ML Lab",
    location: "Atlanta, GA",
    period: "Sep 2023 - Dec 2023",
    description:
      "Conducted research on natural language processing models for educational applications. Published findings in undergraduate research symposium.",
    technologies: ["Python", "PyTorch", "BERT", "Jupyter"],
  },
  {
    title: "Teaching Assistant",
    company: "CS 1331 - Object-Oriented Programming",
    location: "Georgia Tech",
    period: "Aug 2023 - Dec 2023",
    description:
      "Assisted 200+ students with Java programming concepts. Led weekly recitation sessions and provided one-on-one tutoring.",
    technologies: ["Java", "IntelliJ IDEA", "Git"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            My professional journey and the experiences that have shaped my technical expertise.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl mb-1">{experience.title}</CardTitle>
                    <p className="text-lg font-semibold text-primary">{experience.company}</p>
                  </div>
                  <div className="flex flex-col sm:items-end gap-1">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-1 h-4 w-4" />
                      {experience.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {experience.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed text-pretty">{experience.description}</p>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
