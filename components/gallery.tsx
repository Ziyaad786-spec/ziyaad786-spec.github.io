import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Camera, ImageIcon, Star } from "lucide-react"

export const Gallery = () => {
  const images = [
    {
      src: "/sunset-lake.jpg",
      alt: "Peaceful sunset reflection over the lake near school campus",
    },
    {
      src: "/school-entrance.jpg",
      alt: "Future Focus Learning Centre building entrance with colorful logo",
    },
    {
      src: "/modern-classroom.jpg",
      alt: "Modern classroom with individual study stations and colorful chairs",
    },
    {
      src: "/teacher-classroom.jpg",
      alt: "Dedicated teacher supporting students in personalized learning environment",
    },
    {
      src: "/students-group.jpg",
      alt: "Happy students at Future Focus Learning Centre",
    },
    {
      src: "/campus-sunset.jpg",
      alt: "Beautiful campus grounds at sunset with outdoor recreational areas",
    },
    {
      src: "/golf-instruction.jpg",
      alt: "Professional golf instruction with mountain backdrop",
    },
    {
      src: "/lake-mountains.jpg",
      alt: "Stunning lake with mountain reflections near the school",
    },
    {
      src: "/playground.jpg",
      alt: "Children's playground area with slides and swings",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute inset-0 pointer-events-none">
        <Camera className="absolute top-20 left-20 h-8 w-8 text-blue-200 animate-pulse" />
        <ImageIcon
          className="absolute bottom-32 right-24 h-6 w-6 text-green-200 animate-bounce"
          style={{ animationDelay: "1s" }}
        />
        <Star
          className="absolute top-1/3 right-1/4 h-5 w-5 text-purple-200 animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slide-in-right">
            Our Campus Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-scale-in" style={{ animationDelay: "0.3s" }}>
            Take a visual tour of our beautiful campus, modern facilities, and inspiring learning environments that make
            Future Focus Learning Centre special.
          </p>
        </div>

        <div className="relative animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <div
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-110 transform hover:rotate-1 animate-scale-in"
                      style={{ animationDelay: `${0.1 * index}s` }}
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          className="w-full h-64 object-cover transition-transform duration-700 hover:scale-125"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-4">
                        <p className="text-sm text-gray-600 text-center hover:text-gray-900 transition-colors duration-200">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 hover:scale-110 transition-transform duration-200" />
            <CarouselNext className="right-4 hover:scale-110 transition-transform duration-200" />
          </Carousel>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto hover:text-gray-900 transition-colors duration-300">
            Our campus combines modern educational facilities with natural beauty, providing an inspiring environment
            for learning and growth.
          </p>
        </div>
      </div>
    </section>
  )
}
