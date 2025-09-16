import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Software Engineer Intern, Generative AI",
    company: "Meta",
    location: "New York, NY",
    period: "May 2025 – Aug 2025",
    description: (
      <>
        Built PHP RAG pipelines for instant answers on
        {' '}
        <a
          href="https://meta.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-primary/60 hover:text-primary"
        >
          meta.ai
        </a>
        {' '}
        across stocks/people/weather/sports/trends, reducing hallucinations. Delivered typed React + GraphQL widgets and
        onboarded Threads as a retrieval source; standardized context formats with 3 teams and added tests/monitoring.
      </>
    ),
    technologies: ["PHP", "Relay", "React", "GraphQL", "RAG", "APIs", "Hive tables"],
  },
  {
    title: "Co‑Founder, CTO",
    company: "Tale",
    location: "Atlanta, GA",
    period: "Sep 2025 – Present",
    description:
      "Launched a real‑time sports betting marketplace generating $5K+ subscription revenue. Built Firebase Cloud Functions + Firestore backend processing 10K+/min bet updates (<100ms) and an Angular/WebSocket frontend for live leaderboards, filters, and analytics; integrated Stripe with fraud‑prevention workflows.",
    technologies: ["Firebase Cloud Functions", "Firestore", "Angular", "WebSocket", "Stripe"],
  },
  {
    title: "Software Developer Intern, Risk & Fraud",
    company: "JPMorgan Chase",
    location: "Columbus, OH",
    period: "Jun 2024 – Aug 2024",
    description:
      "Automated fraud model reporting in Python/SQL, cutting generation time by 96% (8h → 20m) for near‑real‑time monitoring. Evaluated PSI for 26 models to detect drift and shift retraining from weekly to bi‑weekly. Built Spark pipelines to unify performance data and Flask APIs serving live metrics to 400+ analysts.",
    technologies: ["Python", "SQL", "Apache Spark", "Flask", "PSI"],
  },
  {
    title: "Software Engineer Intern, Luna AI Platform",
    company: "General Dynamics",
    location: "Falls Church, VA",
    period: "Jun 2023 – Aug 2023",
    description:
      "Built Python preprocessing CI/CD to convert 2M+ HR docs (.docx/.pdf/.xlsx/.jpeg) to text and load to S3 for model training. Fine‑tuned BERT on SageMaker (91% F1) and deployed an EC2‑hosted ML system enabling automated, at‑scale document categorization for HR teams.",
    technologies: ["Python", "AWS S3", "AWS SageMaker", "EC2", "BERT", "CI/CD"],
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
