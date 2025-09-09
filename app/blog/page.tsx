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
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles
          className="absolute top-20 left-10 h-6 w-6 text-emerald-300 animate-pulse"
          style={{ animationDelay: "0s" }}
        />
        <Star
          className="absolute top-32 right-20 h-4 w-4 text-blue-300 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <Leaf
          className="absolute top-1/3 left-1/4 h-5 w-5 text-green-300 animate-float"
          style={{ animationDelay: "2s" }}
        />
        <Sparkles
          className="absolute bottom-1/3 right-1/3 h-7 w-7 text-purple-300 animate-pulse"
          style={{ animationDelay: "3s" }}
        />
        <Star
          className="absolute bottom-20 left-16 h-5 w-5 text-amber-300 animate-bounce"
          style={{ animationDelay: "4s" }}
        />
        <Leaf
          className="absolute top-2/3 right-10 h-6 w-6 text-teal-300 animate-float"
          style={{ animationDelay: "5s" }}
        />

        {/* Floating Circles */}
        <div
          className="absolute top-10 right-1/4 w-20 h-20 bg-emerald-200 rounded-full opacity-30 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-bounce"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-20 w-12 h-12 bg-purple-200 rounded-full opacity-35 animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-20 w-24 h-24 bg-green-200 rounded-full opacity-25 animate-float"
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
