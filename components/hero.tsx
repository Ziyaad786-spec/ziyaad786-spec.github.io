"use client"

import { BookOpen, Users, Award, Sparkles, Star, Leaf, TreePine, Flower2 } from "lucide-react"

export const Hero = () => {
  const handleEnrollDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement("a")
    link.href = "/enrollment-form.pdf" // This should be placed in the public folder
    link.download = "Future-Focus-Learning-Centre-Enrollment-Form.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section
      id="home"
      className="pt-16 bg-gradient-to-br from-green-50 via-emerald-50 to-amber-50 min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Nature-themed Floating Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <Leaf
          className="absolute top-20 left-10 h-8 w-8 text-green-400 animate-float"
          style={{ animationDelay: "0.5s" }}
        />
        <TreePine
          className="absolute top-32 right-20 h-10 w-10 text-emerald-400 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <Flower2
          className="absolute bottom-40 left-16 h-6 w-6 text-amber-400 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <Leaf
          className="absolute bottom-60 right-32 h-8 w-8 text-green-300 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Star
          className="absolute top-1/2 left-1/4 h-4 w-4 text-yellow-400 animate-pulse"
          style={{ animationDelay: "2.5s" }}
        />
        <Sparkles
          className="absolute top-1/3 right-1/3 h-6 w-6 text-emerald-300 animate-bounce"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-in-right">
              Welcome to
              <span className="text-emerald-600 block animate-scale-in" style={{ animationDelay: "0.3s" }}>
                Future Focus Learning Centre
              </span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl animate-fade-in"
              style={{ animationDelay: "0.5s" }}
            >
              Nurturing young minds through world-class education with IMPAQ, Cambridge, Essential Learning, and GED
              curriculums
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={handleEnrollDownload}
                className="bg-emerald-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-700 transition-all duration-300 hover:scale-110 animate-slide-in-right transform hover:rotate-1 shadow-lg hover:shadow-xl"
              >
                Enroll Today
              </button>
              <button
                className="border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:scale-110 animate-slide-in-right transform hover:-rotate-1 shadow-lg hover:shadow-xl"
                style={{ animationDelay: "0.2s" }}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="relative animate-scale-in" style={{ animationDelay: "0.3s" }}>
            <div className="rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform hover:rotate-1">
              <img
                src="/school-entrance.jpg"
                alt="Future Focus Learning Centre building"
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            {/* Nature-themed decorative elements around the image */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
            <div
              className="absolute -bottom-6 -right-6 w-16 h-16 bg-amber-200 rounded-full opacity-60 animate-bounce"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 -left-8 w-12 h-12 bg-emerald-300 rounded-full opacity-40 animate-float"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
          <div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 animate-fade-in transform hover:rotate-1 border border-green-100"
            style={{ animationDelay: "0.4s" }}
          >
            <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4 animate-bounce" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">4 Curriculums</h3>
            <p className="text-gray-600">IMPAQ, Cambridge, Essential Learning & GED</p>
          </div>
          <div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 animate-fade-in transform hover:-rotate-1 border border-green-100"
            style={{ animationDelay: "0.6s" }}
          >
            <Users className="h-12 w-12 text-amber-600 mx-auto mb-4 animate-pulse" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Grade R-12</h3>
            <p className="text-gray-600">Complete educational journey</p>
          </div>
          <div
            className="bg-white/80 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 animate-fade-in transform hover:rotate-1 border border-green-100"
            style={{ animationDelay: "0.8s" }}
          >
            <Award
              className="h-12 w-12 text-green-600 mx-auto mb-4 animate-bounce"
              style={{ animationDelay: "0.5s" }}
            />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">Quality education guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
