"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const StackedCarousel = () => {
  const teamMembers = [
    {
      src: "/team/staff-2024.jpg",
      alt: "Future Focus Learning Centre Staff 2024",
      title: "Our Dedicated Staff",
      description: "The heart of our learning community.",
    },
    {
      src: "/team/darene-vorster.jpg",
      alt: "Class of 2024 with Tutor Darene Vorster",
      title: "Essential Learning - Darene Vorster",
      description: "Guiding students in essential learning.",
    },
    {
      src: "/team/jenny-lee.jpg",
      alt: "Class of 2024 with Grade 4 Tutor Jenny Lee",
      title: "Grade 4 - Jenny Lee",
      description: "Nurturing young learners in Grade 4.",
    },
    {
      src: "/team/ged-graduates-carina-boardman.jpg",
      alt: "GED Graduates with Tutor Carina Boardman",
      title: "GED Graduates - Carina Boardman",
      description: "Empowering students for high school equivalency.",
    },
    {
      src: "/team/essential-learning-carina-boardman.jpg",
      alt: "Class of 2024 with Essential Learning Tutor Carina Boardman",
      title: "Essential Learning - Carina Boardman",
      description: "Supporting comprehensive learning journeys.",
    },
    {
      src: "/team/ground-staff-2024.jpg",
      alt: "Future Focus Learning Centre Ground Staff 2024",
      title: "Our Ground Staff",
      description: "Maintaining our beautiful and safe campus.",
    },
    {
      src: "/team/liezl-stander.jpg",
      alt: "Class of 2024 with Grade RR - 1 Tutor Liezl Stander",
      title: "Grade RR - 1 - Liezl Stander",
      description: "Building foundational skills for our youngest students.",
    },
    {
      src: "/team/elsie-de-villers.jpg",
      alt: "Class of 2024 with Essential Learning 6-9 Yrs Tutor Elsie de Villers",
      title: "Essential Learning 6-9 Yrs - Elsie de Villers",
      description: "Engaging and educating our primary school learners.",
    },
    {
      src: "/team/yolandi-sanderson.jpg",
      alt: "Class of 2024 with Essential Learning 10-14 Yrs Tutor Yolandi Sanderson",
      title: "Essential Learning 10-14 Yrs - Yolandi Sanderson",
      description: "Fostering growth in our intermediate students.",
    },
    {
      src: "/team/dylan-du-preez.jpg",
      alt: "Class of 2024 with Grade 3-12 Tutor Dylan du Preez",
      title: "Grade 3-12 - Dylan du Preez",
      description: "Guiding students across various grade levels.",
    },
    {
      src: "/team/denise-swanepoel.jpg",
      alt: "Class of 2024 with Grade 2 & 3 Tutor Denise Swanepoel",
      title: "Grade 2 & 3 - Denise Swanepoel",
      description: "Guiding our younger students in Grades 2 and 3.",
    },
    {
      src: "/team/chess-club.jpg",
      alt: "Future Focus Learning Centre Chess Club 2024",
      title: "Chess Club",
      description: "Developing strategic thinking and problem-solving skills.",
    },
    {
      src: "/team/yolandi-sanderson-alt.jpg",
      alt: "Class of 2024 with Essential Learning 10-14 Yrs Tutor Yolandi Sanderson (Alternative Group)",
      title: "Essential Learning 10-14 Yrs - Yolandi Sanderson (Group 2)",
      description: "Another group fostering growth in our intermediate students.",
    },
    {
      src: "/team/pre-ged-carina-boardman.jpg",
      alt: "Class of 2024 with Pre GED Tutor Carina Boardman",
      title: "Pre GED - Carina Boardman",
      description: "Preparing students for their GED journey.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState<"next" | "prev" | null>(null)
  const totalCards = teamMembers.length
  const transitionDuration = 500 // milliseconds

  const handleNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTransitionDirection("next")
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards)
      setIsTransitioning(false)
      setTransitionDirection(null)
    }, transitionDuration)
  }

  const handlePrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTransitionDirection("prev")
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards)
      setIsTransitioning(false)
      setTransitionDirection(null)
    }, transitionDuration)
  }

  const getCardStyle = (cardIndex: number) => {
    let transform = ""
    let zIndex = 0
    let opacity = 1
    let scale = 1

    // Calculate the effective index for circular display
    // This determines its position in the visual stack
    let effectiveIndex = (cardIndex - activeIndex + totalCards) % totalCards

    // Adjust effectiveIndex for cards that wrap around from the end to the beginning
    // This ensures correct visual ordering in the stack
    if (effectiveIndex > totalCards / 2) {
      effectiveIndex -= totalCards
    } else if (effectiveIndex < -totalCards / 2) {
      effectiveIndex += totalCards
    }

    const absEffectiveIndex = Math.abs(effectiveIndex)

    if (effectiveIndex === 0) {
      // Active card (top of the stack)
      transform = "translateY(0px) translateX(0px)"
      zIndex = 100
      scale = 1
      opacity = 1
    } else if (effectiveIndex > 0 && effectiveIndex <= 3) {
      // Cards behind (to the left/up)
      const offset = effectiveIndex
      transform = `translateY(${offset * 20}px) translateX(${-offset * 10}px)`
      zIndex = 100 - offset
      scale = 1 - offset * 0.05
      opacity = 1
    } else if (effectiveIndex < 0 && effectiveIndex >= -3) {
      // Cards that were active and are now "behind" (to the right/down)
      const offset = Math.abs(effectiveIndex)
      transform = `translateY(${offset * 20}px) translateX(${offset * 10}px)`
      zIndex = 100 - offset
      scale = 1 - offset * 0.05
      opacity = 1
    } else {
      // Cards far out of view (hidden)
      opacity = 0
      zIndex = 0
      // Position them far away so they are not seen, but can transition in
      if (effectiveIndex > 0) {
        // Cards that are "ahead" in the sequence
        transform = "translateY(100px) translateX(-200px) scale(0.7)"
      } else {
        // Cards that are "behind" in the sequence
        transform = "translateY(100px) translateX(200px) scale(0.7)"
      }
    }

    // Special handling for the card that is *leaving* the active position
    // and the card that is *entering* the active position during transition
    if (isTransitioning) {
      const prevActiveIndex = (activeIndex - (transitionDirection === "next" ? 1 : -1) + totalCards) % totalCards
      const nextActiveIndex = (activeIndex + (transitionDirection === "next" ? 1 : -1) + totalCards) % totalCards

      if (cardIndex === prevActiveIndex) {
        // The card that was active and is now moving away
        if (transitionDirection === "next") {
          transform = "translateY(0px) translateX(100%) scale(1)" // Slide out right
          opacity = 0
          zIndex = 101 // Ensure it's on top during exit
        } else if (transitionDirection === "prev") {
          transform = "translateY(0px) translateX(-100%) scale(1)" // Slide out left
          opacity = 0
          zIndex = 101
        }
      } else if (cardIndex === nextActiveIndex) {
        // The card that will become active
        if (transitionDirection === "next") {
          transform = "translateY(0px) translateX(-100%) scale(1)" // Start from left
          opacity = 0
          zIndex = 100
        } else if (transitionDirection === "prev") {
          transform = "translateY(0px) translateX(100%) scale(1)" // Start from right
          opacity = 0
          zIndex = 100
        }
      }
    }

    return {
      transform: `${transform} scale(${scale})`,
      zIndex,
      opacity,
      transition: `transform ${transitionDuration}ms ease-in-out, opacity ${transitionDuration}ms ease-in-out`,
    }
  }

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get to know the dedicated educators and staff who make Future Focus Learning Centre a vibrant place to learn
            and grow.
          </p>
        </div>

        <div className="relative h-[500px] w-full max-w-xl mx-auto flex items-center justify-center">
          {teamMembers.map((member, index) => {
            const { transform, zIndex, opacity, transition } = getCardStyle(index)
            const isActive = index === activeIndex

            return (
              <Card
                key={index} // Key is important for React to track elements and apply transitions
                className={`absolute rounded-xl shadow-lg ${isActive ? "border-4 border-emerald-500" : "border border-blue-100"}`}
                style={{
                  transform,
                  zIndex,
                  opacity,
                  transition,
                  width: "100%",
                  height: "auto",
                  maxWidth: "400px", // Max width for cards
                  // Ensure cards are centered initially before transform
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) ${transform}`, // Apply base centering then dynamic transform
                }}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-xl">
                    <img
                      src={member.src || "/placeholder.svg"}
                      alt={member.alt}
                      className="w-full h-64 object-cover transition-transform duration-700 hover:scale-125"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <h3 className="text-white text-xl font-bold">{member.title}</h3>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-gray-700 text-sm">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Button onClick={handlePrevious} disabled={isTransitioning}>
            <ChevronLeft className="h-5 w-5 mr-2" /> Previous
          </Button>
          <Button onClick={handleNext} disabled={isTransitioning}>
            Next <ChevronRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
