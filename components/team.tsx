"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Mr. D. Jacobs",
    role: "Senior Educator",
    expertise: "Mathematics & Sciences",
    image: "/images/mr-d-jacobs.jpg",
  },
  {
    name: "Mrs. M. Jacobs",
    role: "Lead Educator",
    expertise: "Languages & Literature",
    image: "/images/mrs-m-jacobs.jpg",
  },
  {
    name: "Mrs. E. Anderson",
    role: "Education Specialist",
    expertise: "Early Childhood Development",
    image: "/images/mrs-e-anderson.jpg",
  },
  {
    name: "Mr. D. Sithole",
    role: "STEM Coordinator",
    expertise: "Technology & Engineering",
    image: "/images/mr-d-sithole.jpg",
  },
  {
    name: "Mr. B. Morgan",
    role: "Academic Advisor",
    expertise: "Tertiary Preparation",
    image: "/images/mr-b-morgan.jpg",
  },
  {
    name: "Mr. P. Kaseke",
    role: "Learning Facilitator",
    expertise: "Study Skills & Mentorship",
    image: "/images/mr-p-kaseke.webp",
  },
  {
    name: "Mrs. A. Bantjes",
    role: "Education Consultant",
    expertise: "Special Needs & Inclusion",
    image: "/images/mrs-a-bantjes.jpg",
  },
  {
    name: "Mr. A. Mpassi",
    role: "Innovation Lead",
    expertise: "Digital Learning & EdTech",
    image: "/images/mr-a-mpassi.jpg",
  },
]

export function Team() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">Our Experts</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Meet the <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Dedicated educators with a passion for excellence and a commitment to every student's success
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-card rounded-xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-bl-[60px] rounded-tr-xl -z-10" />

                <div className="relative">
                  {member.image && (
                    <div className="mb-4 relative w-24 h-24 mx-auto">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="rounded-full object-cover border-2 border-primary/20 group-hover:border-primary/50 transition-all"
                      />
                    </div>
                  )}

                  <h3 className="font-bold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.expertise}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-6 text-balance">
            Our team brings together decades of educational expertise and a shared commitment to student success
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-foreground font-medium">Combined 100+ years experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span className="text-foreground font-medium">Qualified & certified educators</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-foreground font-medium">Continuous professional development</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
