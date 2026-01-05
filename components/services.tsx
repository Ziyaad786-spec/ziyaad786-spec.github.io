import { Card } from "@/components/ui/card"
import { BookOpen, Users, Target, Sparkles } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: BookOpen,
      title: "Individual Tutoring",
      description:
        "One-on-one personalized sessions tailored to your learning style and pace, ensuring maximum comprehension and confidence.",
    },
    {
      icon: Users,
      title: "Group Classes",
      description:
        "Collaborative learning environments that foster peer interaction, critical thinking, and shared academic growth.",
    },
    {
      icon: Target,
      title: "Exam Preparation",
      description:
        "Comprehensive prep programs for all major exams, including matric, university entrance, and professional certifications.",
    },
    {
      icon: Sparkles,
      title: "Skills Development",
      description:
        "Beyond academics - develop essential life skills, critical thinking, problem-solving, and digital literacy.",
    },
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Comprehensive educational programs designed to meet diverse learning needs and unlock every student's
            potential.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-500 group border-border bg-card hover:scale-105 hover:-translate-y-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-accent-foreground transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
