import { Lightbulb, User, GraduationCap, Heart, MessageSquare, BookOpen, Brain, Rocket, Users } from "lucide-react"

export const WhatSetsUsApart = () => {
  const features = [
    {
      icon: Lightbulb,
      title: "Innovative Teaching",
      description: "We use the latest techniques and technology to create engaging, effective learning experiences.",
    },
    {
      icon: User,
      title: "Personalized Approach",
      description: "Programs tailored to each student's needs, strengths, and learning style.",
    },
    {
      icon: GraduationCap,
      title: "Experienced Tutors",
      description: "Our passionate, highly qualified educators provide expert guidance.",
    },
    {
      icon: Heart,
      title: "Soft Skills & Character Development",
      description: "We focus on building communication, leadership, teamwork, and resilience.",
    },
    {
      icon: MessageSquare,
      title: "Continuous Feedback",
      description: "Ongoing assessments and feedback help students stay on track and improve.",
    },
    {
      icon: BookOpen,
      title: "Flexible Curriculums",
      description: "Offering South African, U.S., and European curriculums to meet diverse needs.",
    },
    {
      icon: Brain,
      title: "Critical Thinking & Problem-Solving",
      description: "We promote creativity and analytical thinking to tackle real-world challenges.",
    },
    {
      icon: Rocket,
      title: "Creativity & Entrepreneurship",
      description: "Encouraging innovation and entrepreneurial thinking for a rapidly changing world.",
    },
    {
      icon: Users,
      title: "Support for Special Needs",
      description: "Inclusive programs that ensure every student can learn and grow in a supportive environment.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-in-right">
            What Sets Us Apart
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 transform hover:rotate-1 animate-fade-in border border-blue-100"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-8 w-8 text-blue-600 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
