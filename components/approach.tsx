export function Approach() {
  const steps = [
    {
      number: "01",
      title: "Assessment",
      description:
        "We begin by understanding your current knowledge level, learning style, and goals through comprehensive evaluation.",
    },
    {
      number: "02",
      title: "Personalized Plan",
      description:
        "Based on the assessment, we create a tailored learning roadmap that addresses your unique needs and objectives.",
    },
    {
      number: "03",
      title: "Expert Instruction",
      description:
        "Our qualified educators deliver engaging, interactive lessons using proven methodologies and modern teaching tools.",
    },
    {
      number: "04",
      title: "Continuous Support",
      description:
        "Regular progress tracking, feedback sessions, and adaptive adjustments ensure sustained growth and success.",
    },
  ]

  return (
    <section id="approach" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-bl from-accent/5 via-transparent to-primary/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Our Approach to Learning</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            A systematic, student-centered methodology that transforms challenges into achievements and potential into
            excellence.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex gap-6 p-6 rounded-xl hover:bg-card/50 transition-all duration-500 hover:shadow-lg hover:scale-105">
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-bold bg-gradient-to-br from-accent/30 to-primary/30 bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-500">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent-foreground transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {index < steps.length - 2 && (
                  <div className="hidden md:block absolute top-12 left-8 w-px h-32 bg-gradient-to-b from-accent/30 to-primary/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
