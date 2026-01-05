import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export const metadata = {
  title: "Our Classes | LSF Cape Town",
  description: "Explore our diverse classes and learning community at LSF Cape Town",
}

export default function ClassesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
              Our <span className="text-accent">Classes</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Meet the dedicated students and educators who make up our vibrant learning community
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Grade 12 Class Section */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/grade-12-class-2024-25.png"
                  alt="Aunty Mariam and Grade 12 class of 2024/25"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Grade 12 Class of 2024/25</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aunty Mariam and our Grade 12 class of 2024/25 - our senior students preparing for their final year of
                  secondary education. This remarkable group demonstrates dedication, maturity, and academic excellence
                  as they work towards their future goals.
                </p>
              </div>
            </div>

            {/* Grade 9 Class Section */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src="/images/grade-9-class-2024-25.png"
                  alt="Aunty Mariam and Grade 9 class of 2024/25"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>
              <div className="p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Grade 9 Class of 2024/25</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Aunty Mariam and our grade 9 class of 2024/25 - a dedicated group of learners committed to academic
                  excellence and personal growth. Together, we foster an environment of collaboration, respect, and
                  achievement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
