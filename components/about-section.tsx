import { Target, Heart, Star, Users } from "lucide-react"

export const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for academic excellence in every aspect of education.",
    },
    {
      icon: Heart,
      title: "Care",
      description: "Every student receives personalized attention and support.",
    },
    {
      icon: Star,
      title: "Innovation",
      description: "Modern teaching methods combined with proven educational practices.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong relationships between students, parents, and educators.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Future Focus Learning Centre</h2>
            <p className="text-lg text-gray-700 mb-6">
              At Future Focus Learning Centre, we believe every child deserves access to quality education that prepares
              them for future success. Our dedicated team of educators is committed to providing personalized learning
              experiences that cater to different learning styles and academic goals.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              With our three comprehensive curriculum options - IMPAQ, Cambridge, and MobyMax - we ensure that students
              from Grade R to 12 receive the education that best suits their needs and aspirations, all while fostering
              a connection with nature and sustainable learning.
            </p>
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-colors duration-200">
              Visit Our Facebook Page
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-lg border border-green-100 hover:shadow-lg transition-all duration-300"
              >
                <value.icon className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-700 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
