"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, Users, Code, Zap, Shield, Heart } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Component() {
  const [navVisible, setNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      // Always show navbar at the very top (hero section)
      if (currentScrollY < 200) {
        setNavVisible(true)
      } 
      // Hide when scrolling down (with threshold), show when scrolling up
      else if (currentScrollY > lastScrollY + 5) {
        setNavVisible(false)
      } else if (currentScrollY < lastScrollY - 5) {
        setNavVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlNavbar()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div className="min-h-screen bg-purple-950 text-white">
      {/* Floating Navigation */}
      <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-3 shadow-xl shadow-black/20 transition-all duration-300 ${navVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <Link href="#home" className="text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm">
          Home
        </Link>
        <Link href="#projects" className="text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm">
          Projects
        </Link>
        <Link href="#contribute" className="text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm">
          Contribute
        </Link>
        <Link href="#community" className="text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm">
          Community
        </Link>
        <Link href="#about" className="text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm">
          About
        </Link>
        <Link href="#blog" className="text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm">
          Blog
        </Link>
        <Link href="#join" className="text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm">
          Join Us
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="h-screen animate-gradient">
        <div className="container mx-auto px-4 lg:px-6 h-full flex flex-col">
          {/* Logo and GitHub at actual top */}
          <div className="flex items-center justify-between pt-8 pb-4">
            <div className="flex items-center">
              <span className="text-3xl font-semibold text-white tracking-wide italic" style={{fontFamily: 'Dancing Script, cursive', fontStyle: 'italic', fontWeight: '600'}}>Marvlock</span>
            </div>
            <Button 
              variant="outline" 
              size="default" 
              className="text-white border-white/30 hover:text-white hover:bg-white/15 hover:border-white/50 transition-all duration-300 font-medium cursor-pointer rounded-full bg-white/5 backdrop-blur-sm"
              asChild
            >
              <Link href="https://github.com/marvlock" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Link>
            </Button>
          </div>

          {/* Main hero content - centered */}
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent italic font-serif">
                Building the Future of
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Open Source Innovation
                </span>
              </h1>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                Project Marvlock is a community-driven organization dedicated to creating powerful, accessible, and
                innovative open source solutions that empower developers worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
