"use client"

import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { ExtracurricularSection } from "@/components/extracurricular-section"
import { Gallery } from "@/components/gallery"
import { GradeLevels } from "@/components/grade-levels"
import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function FutureFocusWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="min-h-screen">
        <Hero />
        <AboutSection />
        <CurriculumSection />
        <GradeLevels />
        <Gallery />
        <ExtracurricularSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
