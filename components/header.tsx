"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Approach", href: "/#approach" },
    { label: "Team", href: "/team" },
    { label: "Classes", href: "/classes" },
    { label: "Contact", href: "/#contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 animate-slide-down ${
          isScrolled ? "top-2 left-2 right-2 md:left-8 md:right-8" : ""
        }`}
      >
        <div
          className={`mx-auto max-w-7xl rounded-full transition-all duration-500 ${
            isScrolled
              ? "bg-background/70 backdrop-blur-xl border border-border/50 shadow-2xl shadow-primary/5"
              : "bg-background/40 backdrop-blur-md border border-border/30 shadow-lg"
          }`}
        >
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-20">
              <Link href="/" className="flex items-center gap-3 group">
                <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Image src="/images/lsf-logo-full.png" alt="LSF Logo" fill className="object-contain" priority />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    LSF Cape Town
                  </span>
                  <span className="text-[10px] md:text-xs text-muted-foreground tracking-wide">
                    Excellence Since 2013
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-1 lg:gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-accent-foreground transition-all duration-300 relative group rounded-full hover:bg-accent/10"
                  >
                    {item.label}
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="hidden md:flex items-center gap-4">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-right text-primary-foreground hover:shadow-lg hover:shadow-accent/20 hover:scale-105 transition-all duration-500 rounded-full px-6"
                >
                  Get Started
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 rounded-full hover:bg-accent/10 transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-foreground" />
                ) : (
                  <Menu className="h-6 w-6 text-foreground" />
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-border/50 animate-fade-in-up">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent/10 rounded-full transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Button className="w-full mt-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full">
                    Get Started
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>
      {/* </CHANGE> */}
    </>
  )
}
