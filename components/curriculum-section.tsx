import { CheckCircle, Wifi, Users, Sparkles, Leaf, TreePine } from "lucide-react"

export const CurriculumSection = () => {
  const curriculums = [
    {
      name: "CAPS",
      description: "South African Curriculum. Focused, structured learning.",
      features: [
        "Locally relevant content",
        "Structured learning approach",
        "Department of Education aligned",
        "Strong foundation in core subjects",
      ],
      color: "bg-emerald-600",
    },
    {
      name: "MobyMax",
      description: "Personalized learning. Adaptive, engaging, fun!",
      features: [
        "Personalized learning paths",
        "Adaptive technology",
        "Engaging and interactive",
        "Real-time progress tracking",
      ],
      color: "bg-blue-600",
    },
    {
      name: "GED",
      description: "High school equivalency. Your future starts now!",
      features: [
        "High school equivalency",
        "Flexible scheduling",
        "Adult learner focused",
        "Career advancement pathway",
      ],
      color: "bg-purple-600",
    },
    {
      name: "Cambridge",
      description: "International standards. Globally recognized excellence.",
      features: ["Global recognition", "International standards", "Critical thinking focus", "University preparation"],
      color: "bg-amber-600",
    },
  ]

  const learningOptions = [
    {
      icon: Users,
      title: "In-Person Learning",
      description: "Traditional classroom experience with expert teachers",
    },
    {
      icon: Wifi,
      title: "Online Learning",
      description: "Students can learn from the comfort of their homes with full support",
    },
  ]

  return (
    <section
      id="curriculums"
      className="py-20 bg-gradient-to-br from-white via-green-50 to-emerald-50 relative overflow-hidden"
    >
      {/* Nature Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <Leaf className="absolute top-10 right-10 h-6 w-6 text-green-200 animate-float" />
        <TreePine
          className="absolute bottom-20 left-10 h-8 w-8 text-emerald-200 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <Sparkles
          className="absolute top-1/3 left-1/4 h-5 w-5 text-amber-200 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-in-right">
            Comprehensive Curriculum
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: "0.3s" }}>
            Empowering Learners: Our curriculum blends CAPS, MobyMax, GED, and Cambridge for a world-class education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {curriculums.map((curriculum, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-8 hover:shadow-2xl transition-all duration-500 hover:scale-105 transform hover:rotate-1 animate-fade-in border border-green-100"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div
                className={`${curriculum.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-bounce hover:animate-spin transition-all duration-300`}
                style={{ animationDelay: `${0.5 * (index + 1)}s` }}
              >
                <span className="text-white text-2xl font-bold">{curriculum.name.charAt(0)}</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{curriculum.name}</h3>
              <p className="text-gray-700 mb-6">{curriculum.description}</p>
              <ul className="space-y-3 mb-6">
                {curriculum.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center group">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 group-hover:scale-125 transition-transform duration-200" />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              {curriculum.name === "GED" && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a
                    href="/ged-brochure"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm hover:scale-105 transition-all duration-200"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    View GED Brochure
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Learning Options */}
        <div
          className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 animate-fade-in border border-green-100"
          style={{ animationDelay: "0.8s" }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center animate-slide-in-right">
            Learning Options Available
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {learningOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform hover:rotate-1 animate-scale-in border border-green-100"
                style={{ animationDelay: `${1 + 0.2 * index}s` }}
              >
                <option.icon className="h-12 w-12 text-emerald-600 mb-4 animate-pulse" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h4>
                <p className="text-gray-700">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
