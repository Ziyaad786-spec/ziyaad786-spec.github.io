import { Header } from "@/components/header"
import { Team } from "@/components/team"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Meet the Team | LSF Cape Town",
  description: "Meet our dedicated team of educators committed to your success",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Team />
      </div>
      <Footer />
    </main>
  )
}
