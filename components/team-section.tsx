import { Card, CardContent } from "@/components/ui/card"
import { Users, Sparkles } from "lucide-react"

export const TeamSection = () => {
  const teamMembers = [
    {
      src: "/team/staff-2024.jpg",
      alt: "Future Focus Learning Centre Staff 2024",
      title: "Our Dedicated Staff",
      description: "The heart of our learning community.",
    },
    {
      src: "/team/darene-vorster.jpg",
      alt: "Class of 2024 with Tutor Darene Vorster",
      title: "Essential Learning - Darene Vorster",
      description: "Guiding students in essential learning.",
    },
    {
      src: "/team/jenny-lee.jpg",
      alt: "Class of 2024 with Grade 4 Tutor Jenny Lee",
      title: "Grade 4 - Jenny Lee",
      description: "Nurturing young learners in Grade 4.",
    },
    {
      src: "/team/ged-graduates-carina-boardman.jpg",
      alt: "GED Graduates with Tutor Carina Boardman",
      title: "GED Graduates - Carina Boardman",
      description: "Empowering students for high school equivalency.",
    },
    {
      src: "/team/essential-learning-carina-boardman.jpg",
      alt: "Class of 2024 with Essential Learning Tutor Carina Boardman",
      title: "Essential Learning - Carina Boardman",
      description: "Supporting comprehensive learning journeys.",
    },
    {
      src: "/team/ground-staff-2024.jpg",
      alt: "Future Focus Learning Centre Ground Staff 2024",
      title: "Our Ground Staff",
      description: "Maintaining our beautiful and safe campus.",
    },
    {
      src: "/team/liezl-stander.jpg",
      alt: "Class of 2024 with Grade RR - 1 Tutor Liezl Stander",
      title: "Grade RR - 1 - Liezl Stander",
      description: "Building foundational skills for our youngest students.",
    },
    {
      src: "/team/elsie-de-villers.jpg",
      alt: "Class of 2024 with Essential Learning 6-9 Yrs Tutor Elsie de Villers",
      title: "Essential Learning 6-9 Yrs - Elsie de Villers",
      description: "Engaging and educating our primary school learners.",
    },
    {
      src: "/team/yolandi-sanderson.jpg",
      alt: "Class of 2024 with Essential Learning 10-14 Yrs Tutor Yolandi Sanderson",
      title: "Essential Learning 10-14 Yrs - Yolandi Sanderson",
      description: "Fostering growth in our intermediate students.",
    },
    {
      src: "/team/dylan-du-preez.jpg",
      alt: "Class of 2024 with Grade 3-12 Tutor Dylan du Preez",
      title: "Grade 3-12 - Dylan du Preez",
      description: "Guiding students across various grade levels.",
    },
    {
      src: "/team/denise-swanepoel.jpg",
      alt: "Class of 2024 with Grade 2 & 3 Tutor Denise Swanepoel",
      title: "Grade 2 & 3 - Denise Swanepoel",
      description: "Guiding our younger students in Grades 2 and 3.",
    },
    {
      src: "/team/chess-club.jpg",
      alt: "Future Focus Learning Centre Chess Club 2024",
      title: "Chess Club",
      description: "Developing strategic thinking and problem-solving skills.",
    },
    {
      src: "/team/yolandi-sanderson-alt.jpg",
      alt: "Class of 2024 with Essential Learning 10-14 Yrs Tutor Yolandi Sanderson (Alternative Group)",
      title: "Essential Learning 10-14 Yrs - Yolandi Sanderson (Group 2)",
      description: "Another group fostering growth in our intermediate students.",
    },
    {
      src: "/team/pre-ged-carina-boardman.jpg",
      alt: "Class of 2024 with Pre GED Tutor Carina Boardman",
      title: "Pre GED - Carina Boardman",
      description: "Preparing students for their GED journey.",
    },
  ]

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <Users className="absolute top-10 left-10 h-8 w-8 text-blue-200 animate-pulse" />
        <Sparkles
          className="absolute bottom-20 right-20 h-6 w-6 text-purple-200 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-in-right">Meet Our Team</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: "0.3s" }}>
            Get to know the dedicated educators and staff who make Future Focus Learning Centre a vibrant place to learn
            and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 transform hover:rotate-1 animate-fade-in border border-blue-100"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={member.src || "/placeholder.svg"}
                    alt={member.alt}
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-white text-xl font-bold">{member.title}</h3>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <p className="text-gray-700 text-sm">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
