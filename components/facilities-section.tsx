import { Card, CardContent } from "@/components/ui/card"

export const FacilitiesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <CardContent className="p-0">
              <img
                src="/lovable-uploads/c503e782-e020-41b6-b9cc-106413f340d2.png"
                alt="Modern classroom with individual study stations"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Individual Study Stations</h3>
                <p className="text-gray-600">
                  Modern, spacious classrooms equipped with individual workstations to ensure focused learning and
                  personalized attention.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <CardContent className="p-0">
              <img
                src="/lovable-uploads/d60cd6ce-fd4c-4a9c-84bd-a4fb31f41a95.png"
                alt="Future Focus Learning Centre building exterior"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Campus</h3>
                <p className="text-gray-600">
                  Located in the heart of Fancourt, our modern facility provides a safe and conducive environment for
                  learning.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <CardContent className="p-0">
              <img
                src="/lovable-uploads/da089e07-9755-416d-b925-1b5641393c1f.png"
                alt="Happy students at Future Focus Learning Centre"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Student Success</h3>
                <p className="text-gray-600">
                  Our students thrive in a supportive environment that encourages academic achievement and personal
                  growth.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
