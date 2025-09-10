import { Download, FileText } from "lucide-react"

export const DownloadsSection = () => {
  const downloads = [
    {
      title: "GED Brochure",
      description:
        "Your pathway to a limitless future. Learn about GED benefits, subjects, and how it compares to high school.",
      icon: FileText,
      file: "/ged-brochure",
      filename: "View Online",
      category: "Program Information",
      size: "Online",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resources & Downloads</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access helpful resources and information about our programs to make informed decisions about your
            educational journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {downloads.map((download, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border border-green-100"
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              <div className="flex items-center mb-4">
                <download.icon className="h-8 w-8 text-blue-600 mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{download.title}</h3>
                  <span className="text-sm text-gray-500">{download.category}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{download.description}</p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{download.size}</span>
                <a
                  href={download.file}
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105"
                >
                  <Download className="h-4 w-4" />
                  View Online
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Need more information about our programs? Contact us directly or visit our campus to speak with our
            educational specialists.
          </p>
        </div>
      </div>
    </section>
  )
}
