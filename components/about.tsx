export function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 animate-gradient pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1 group">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:shadow-accent/20 group-hover:scale-105">
              <img
                src="/diverse-students-learning-together-in-modern-class.jpg"
                alt="Students learning together"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl -z-10 animate-float" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 mb-6 backdrop-blur-sm">
              <span className="text-sm font-medium text-accent-foreground">About LSF Cape Town</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance">
              Building Foundations for{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Lifelong Success
              </span>
            </h2>

            <div className="mb-6 p-4 border-l-4 border-gradient-to-b from-accent to-primary bg-gradient-to-r from-accent/5 to-primary/5 rounded-r-lg">
              <p className="text-base md:text-lg font-medium italic text-foreground">
                "To become the institution of choice in respect of skills training in South Africa"
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For over 15 years, LSF Cape Town has been at the forefront of educational excellence, transforming the
                learning journeys of thousands of students across the Western Cape.
              </p>
              <p>
                Our approach combines proven pedagogical methods with innovative teaching strategies, creating an
                environment where every student can thrive. We believe in nurturing not just academic skills, but also
                critical thinking, creativity, and confidence.
              </p>
              <p>
                With a team of qualified, passionate educators and a curriculum that adapts to individual needs, we're
                committed to helping every learner reach their full potential.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary mt-2.5 group-hover:scale-150 transition-transform duration-300" />
                <div>
                  <div className="font-semibold text-foreground mb-1">Qualified Educators</div>
                  <div className="text-sm text-muted-foreground">Expert teachers with proven track records</div>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary mt-2.5 group-hover:scale-150 transition-transform duration-300" />
                <div>
                  <div className="font-semibold text-foreground mb-1">Flexible Scheduling</div>
                  <div className="text-sm text-muted-foreground">Programs that fit your lifestyle</div>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary mt-2.5 group-hover:scale-150 transition-transform duration-300" />
                <div>
                  <div className="font-semibold text-foreground mb-1">Modern Facilities</div>
                  <div className="text-sm text-muted-foreground">State-of-the-art learning spaces</div>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-accent to-primary mt-2.5 group-hover:scale-150 transition-transform duration-300" />
                <div>
                  <div className="font-semibold text-foreground mb-1">Proven Results</div>
                  <div className="text-sm text-muted-foreground">98% student success rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
