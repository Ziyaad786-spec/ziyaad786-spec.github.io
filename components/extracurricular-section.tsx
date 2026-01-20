import { Trophy, Users, Star } from "lucide-react"

export const ExtracurricularSection = () => {
  const activities = [
    {
      icon: Trophy,
      name: "Golf",
      description: "Professional golf instruction through our outsourced partners",
    },
    {
      icon: Users,
      name: "Horse Riding",
      description: "Equestrian training with certified instructors at partner facilities",
    },
    {
      icon: Star,
      name: "Other Activities",
      description: "Various sports and recreational activities available through partnerships",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Extracurricular Activities</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond academics, we offer exciting extracurricular activities through our trusted partner organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <activity.icon className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{activity.name}</h3>
              <p className="text-gray-600 text-center">{activity.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            All extracurricular activities are outsourced to specialized providers to ensure the highest quality
            instruction and safety standards.
          </p>
        </div>
      </div>
    </section>
  )
}
