import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, User, ArrowRight, Home, Sparkles, Star, Leaf } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: "digital-dilemma-screen-time",
      title: "The Digital Dilemma: Understanding Social Media and Screen Time's Impact on Children's Development",
      excerpt:
        "Explore the latest research on how excessive screen time and social media usage affects children's cognitive, physical, and social-emotional development, with practical strategies for creating healthy digital habits.",
      author: "Future Focus Learning Centre",
      date: "January 10, 2025",
      readTime: "12 min read",
      category: "Digital Wellness",
    },
    {
      id: "food-behavior-connection",
      title: "The Food-Behavior Connection: How Eating Habits Impact Children's and Teens' Behavior",
      excerpt:
        "Discover the science behind how diet influences behavior in children and teens, with evidence-based strategies for parents and educators.",
      author: "Future Focus Learning Centre",
      date: "January 9, 2025",
      readTime: "8 min read",
      category: "Child Development",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Icons with varied animations */}
        <Sparkles
          className="absolute top-20 left-10 h-6 w-6 text-emerald-400 animate-pulse opacity-60"
          style={{ animationDelay: "0s" }}
        />
        <Star
          className="absolute top-32 right-20 h-5 w-5 text-blue-400 animate-bounce opacity-70"
          style={{ animationDelay: "1s" }}
        />
        <Leaf
          className="absolute top-1/3 left-1/4 h-6 w-6 text-green-400 animate-float opacity-65"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles
          className="absolute bottom-1/3 right-1/3 h-8 w-8 text-purple-400 animate-pulse opacity-55"
          style={{ animationDelay: "3s" }}
        />
        <Star
          className="absolute bottom-20 left-16 h-6 w-6 text-amber-400 animate-bounce opacity-70"
          style={{ animationDelay: "4s" }}
        />
        <Leaf
          className="absolute top-2/3 right-10 h-7 w-7 text-teal-400 animate-float opacity-60"
          style={{ animationDelay: "5s" }}
        />
        <Calendar
          className="absolute top-16 right-1/3 h-5 w-5 text-indigo-300 animate-pulse opacity-50"
          style={{ animationDelay: "6s" }}
        />
        <User
          className="absolute bottom-1/4 right-20 h-4 w-4 text-pink-300 animate-bounce opacity-55"
          style={{ animationDelay: "7s" }}
        />
        <ArrowRight
          className="absolute top-1/2 left-12 h-5 w-5 text-cyan-300 animate-float opacity-60"
          style={{ animationDelay: "8s" }}
        />
        <Home
          className="absolute bottom-32 right-1/4 h-6 w-6 text-rose-300 animate-pulse opacity-65"
          style={{ animationDelay: "9s" }}
        />

        {/* Additional scattered elements */}
        <div
          className="absolute top-24 left-1/3 h-3 w-3 bg-emerald-400 rounded-full animate-ping opacity-40"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/5 h-2 w-2 bg-blue-400 rounded-full animate-pulse opacity-50"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/5 h-4 w-4 bg-purple-400 rounded-full animate-bounce opacity-45"
          style={{ animationDelay: "6s" }}
        ></div>

        {/* Enhanced Floating Circles */}
        <div
          className="absolute top-10 right-1/4 w-24 h-24 bg-emerald-300 rounded-full opacity-40 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-20 h-20 bg-blue-300 rounded-full opacity-50 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-16 h-16 bg-purple-300 rounded-full opacity-45 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-20 w-28 h-28 bg-green-300 rounded-full opacity-35 animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-1/4 left-1/2 w-18 h-18 bg-amber-300 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute bottom-16 right-1/3 w-22 h-22 bg-teal-300 rounded-full opacity-45 animate-pulse"
          style={{ animationDelay: "6s" }}
        ></div>

        {/* Geometric shapes */}
        <div
          className="absolute top-40 right-12 w-6 h-6 bg-indigo-300 transform rotate-45 animate-spin opacity-35"
          style={{ animationDelay: "3s", animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-pink-300 transform rotate-12 animate-pulse opacity-40"
          style={{ animationDelay: "5s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/5 w-5 h-5 bg-cyan-300 transform -rotate-45 animate-bounce opacity-50"
          style={{ animationDelay: "7s" }}
        ></div>

        {/* Gradient orbs */}
        <div
          className="absolute top-1/3 right-1/5 w-32 h-32 bg-gradient-to-br from-emerald-200 to-blue-200 rounded-full opacity-25 animate-float blur-sm"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/5 left-1/3 w-40 h-40 bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full opacity-20 animate-pulse blur-sm"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="pt-20 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home Button */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-slide-in-right">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: "0.3s" }}>
              Insights, research, and practical advice for parents and educators from the Future Focus Learning Centre
              team.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={post.id}
                className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/90 backdrop-blur-sm border border-white/50 animate-fade-in"
                style={{ animationDelay: `${0.2 * (index + 1)}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <div className="inline-block bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                    {post.category}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium hover:scale-105 transition-transform duration-200"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
