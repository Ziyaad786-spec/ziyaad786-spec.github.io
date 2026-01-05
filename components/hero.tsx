import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/10 to-secondary/5 animate-gradient" />
        <img
          src="/modern-classroom-with-students-studying.jpg"
          alt="Learning environment"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8 animate-fade-in-up backdrop-blur-sm">
            <span className="text-sm font-medium text-accent-foreground">Excellence Since 2013</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Empowering Learning,{" "}
            <span className="bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">
              Shaping Futures
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Personalized education that adapts to every student's unique learning journey. From foundation building to
            advanced skills, we nurture excellence at every step.
          </p>

          <div className="mb-10 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            <p className="text-base md:text-lg font-medium italic bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              "To become the institution of choice in respect of skills training in South Africa"
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:shadow-lg hover:scale-105 transition-all duration-300 group"
            >
              Book a Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:bg-accent/10 hover:border-accent/30 transition-all duration-300 bg-transparent"
            >
              View Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div className="animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                15+
              </div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.5s" }}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                2,500+
              </div>
              <div className="text-sm text-muted-foreground">Students Taught</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-2">
                98%
              </div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
