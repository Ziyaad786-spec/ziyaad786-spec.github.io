export const GradeLevels = () => {
  return (
    <section id="grades" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Grade Levels We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From early childhood development to university preparation, we support every step of your child's
            educational journey.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-scale-in max-w-2xl mx-auto">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-blue-600 mb-4">Grade R - 12</h3>
            <p className="text-xl text-gray-700 mb-6">Complete Educational Journey</p>
            <p className="text-gray-600 leading-relaxed">
              We provide comprehensive education from early childhood development through to university preparation,
              ensuring every student receives the support and guidance they need to succeed at every stage of their
              learning journey.
            </p>
            <button className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-200 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
