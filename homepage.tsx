"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, Users, Code, Zap, Shield, Heart } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { Footer } from "@/components/ui/footer"


export default function Component() {
  const [navVisible, setNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')
  const containerRef = useRef<HTMLDivElement>(null)


  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 200) {
        setNavVisible(true)
      } else if (currentScrollY > lastScrollY + 5) {
        setNavVisible(false)
      } else if (currentScrollY < lastScrollY - 5) {
        setNavVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    // Track active section
    const sections = ['home', 'about', 'contribute', 'community', 'blog']
    
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    // Check for hash in URL on page load
    const checkHashOnLoad = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && sections.includes(hash)) {
        setActiveSection(hash)
        // Scroll to section after a short delay to ensure proper positioning
        setTimeout(() => {
          const element = document.getElementById(hash)
          if (element) {
            const offsetTop = element.offsetTop - 100
            window.scrollTo(0, offsetTop)
          }
        }, 100)
      }
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          controlNavbar()
          updateActiveSection()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    checkHashOnLoad() // Check hash on initial load
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100 // Account for fixed navbar
      const startPosition = window.pageYOffset
      const distance = offsetTop - startPosition
      const duration = 1200 // 1.2 seconds for ultra-smooth feel
      let start: number | null = null
      
      function animation(currentTime: number) {
        if (start === null) start = currentTime
        const timeElapsed = currentTime - start
        const run = easeInOutCubic(timeElapsed, startPosition, distance, duration)
        window.scrollTo(0, run)
        if (timeElapsed < duration) requestAnimationFrame(animation)
      }
      
      // Custom easing function for magical smoothness
      function easeInOutCubic(t: number, b: number, c: number, d: number): number {
        t /= d / 2
        if (t < 1) return c / 2 * t * t * t + b
        t -= 2
        return c / 2 * (t * t * t + 2) + b
      }
      
      requestAnimationFrame(animation)
    }
  }

  const NavLink = ({ href, children, sectionId }: { href?: string; children: React.ReactNode; sectionId: string }) => (
    <button 
      onClick={() => scrollToSection(sectionId)}
      className={`text-white/90 hover:text-white hover:bg-white/15 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm cursor-pointer ${
        activeSection === sectionId ? 'bg-white/20 text-white' : ''
      }`}
    >
      {children}
    </button>
  )

  return (
    <div ref={containerRef} className="min-h-screen overflow-x-hidden smooth-scroll" style={{
      background: `
        radial-gradient(circle at 20% 80%, rgba(88, 28, 135, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(30, 58, 138, 0.4) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(107, 33, 168, 0.3) 0%, transparent 50%),
        linear-gradient(135deg, 
          rgba(2, 6, 23, 1) 0%,
          rgba(8, 14, 44, 1) 25%,
          rgba(15, 23, 42, 1) 50%,
          rgba(8, 14, 44, 1) 75%,
          rgba(2, 6, 23, 1) 100%
        )
      `,
      backgroundSize: '400% 400%',
      animation: 'gradientShift 15s ease infinite'
    }}>
      
      <style jsx>{`
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          scroll-behavior: smooth;
        }
        
        * {
          scroll-behavior: smooth;
        }
        
        .section-transition {
          background: linear-gradient(180deg, 
            transparent 0%, 
            rgba(255,255,255,0.02) 50%, 
            transparent 100%
          );
        }
        
        /* Enhanced smooth scrolling for all scrollable elements */
        .smooth-scroll {
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        ::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for Firefox and Firefox-based browsers */
        html {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
          overflow: -moz-scrollbars-none;  /* Old Firefox */
        }
        
        body {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
          overflow: -moz-scrollbars-none;  /* Old Firefox */
        }
        
        /* Additional Firefox support */
        * {
          scrollbar-width: none;  /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
        }
        
        /* Ensure all containers hide scrollbars */
        .smooth-scroll {
          scrollbar-width: none;  /* Firefox */
          -ms-overflow-style: none;  /* IE and Edge */
          overflow: -moz-scrollbars-none;  /* Old Firefox */
        }
      `}</style>

      {/* Floating Navigation */}
      <nav className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 hidden lg:flex items-center bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-3 shadow-xl shadow-black/20 transition-all duration-500 ease-out ${navVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
        <NavLink sectionId="home">Home</NavLink>
        <NavLink sectionId="about">About</NavLink>
        <NavLink sectionId="contribute">Contribute</NavLink>
        <NavLink sectionId="community">Community</NavLink>
        <NavLink sectionId="blog">Blog</NavLink>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col relative">
        <div className="container mx-auto px-4 lg:px-6 flex-1 flex flex-col">
          {/* Top Bar */}
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
              <a href="https://github.com/marvlock" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Hero Content */}
          <div className="flex-1 flex items-center justify-center pt-32">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent italic font-serif">
                Building the Future of
                <br />
                <span className="bg-gradient-to-r from-violet-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Open Source Innovation
                </span>
              </h1>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto mb-8">
                Project Marvlock is a community-driven organization dedicated to creating powerful, accessible, and
                innovative open source solutions that empower developers worldwide.
              </p>
            </div>
          </div>
        </div>
        
        {/* Smooth transition gradient */}
        <div className="h-32 section-transition"></div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center py-20 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent italic font-serif">
              About
            </h2>
            <p className="text-2xl text-purple-200 leading-relaxed max-w-4xl mx-auto mb-12">
              Project Marvlock is a community-driven initiative building accessible and powerful open-source tools for developers worldwide.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-6">Core Values</h3>
                <div className="space-y-4">
                  <div className="flex items-center text-purple-200">
                    <span className="text-2xl mr-3">🧠</span>
                    <span>Innovation through collaboration</span>
                  </div>
                  <div className="flex items-center text-purple-200">
                    <span className="text-2xl mr-3">🌍</span>
                    <span>Accessibility for all</span>
                  </div>
                  <div className="flex items-center text-purple-200">
                    <span className="text-2xl mr-3">🛠️</span>
                    <span>Build in public</span>
                  </div>
                  <div className="flex items-center text-purple-200">
                    <span className="text-2xl mr-3">❤️</span>
                    <span>Developer-first approach</span>
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-semibold text-white mb-6">What We Do</h3>
                <p className="text-purple-200 leading-relaxed mb-6">
                  We create and maintain tools, libraries, and platforms that simplify development workflows, promote learning, and encourage open contributions.
                </p>
                <h3 className="text-xl font-semibold text-white mb-6">Origin Story</h3>
                <p className="text-purple-200 leading-relaxed">
                  Born from a late-night GitHub issue thread and a vision to simplify tooling, Project Marvlock began in 2025 with just one repo and a handful of contributors.
                </p>
              </div>
            </div>
          </div>


        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 section-transition"></div>
      </section>



      {/* Contribute Section */}
      <section id="contribute" className="min-h-screen flex items-center py-20 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent italic font-serif">
            Start Contributing
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Whether you're a seasoned developer or just starting out, there's a place for you in our community.
          </p>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-white mb-8">How to Get Involved</h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Explore</h4>
                <p className="text-purple-200 text-sm">Browse our repositories and find projects that interest you.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Connect</h4>
                <p className="text-purple-200 text-sm">Join our community discussions and introduce yourself.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Contribute</h4>
                <p className="text-purple-200 text-sm">Start with small issues and grow into larger contributions.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 section-transition"></div>
      </section>

      {/* Community Section */}
      <section id="community" className="min-h-screen flex items-center py-20 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent italic font-serif">
            Join Our Community
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Connect with like-minded developers, share ideas, and build the future of open source together.
          </p>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-6">Why Join Us?</h3>
                <ul className="space-y-4 text-purple-200">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                    Learn from experienced developers
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                    Work on meaningful projects
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                    Build your portfolio
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-violet-400 rounded-full mr-3"></div>
                    Make lasting connections
                  </li>
                </ul>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>
                <div className="space-y-4">
                  <Button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 cursor-pointer" asChild>
                    <a href="https://discord.gg/CS5mVEsjre" target="_blank" rel="noopener noreferrer">
                      Join Discord
                    </a>
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white border border-white/30 cursor-pointer" asChild>
                    <a href="https://x.com/ProjectMarvlock" target="_blank" rel="noopener noreferrer">
                      Follow on X
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 section-transition"></div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="min-h-screen flex items-center py-20 relative">
        <div className="container mx-auto px-4 lg:px-6 max-w-4xl text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-violet-200 to-purple-300 bg-clip-text text-transparent italic font-serif">
            Latest Updates
          </h2>
          <p className="text-xl text-purple-200 mb-12 max-w-2xl mx-auto">
            Stay updated with our latest developments, tutorials, and community highlights.
          </p>
          
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-12">
            <h3 className="text-2xl font-bold text-white mb-8">Coming Soon</h3>
            <p className="text-purple-200 mb-8">
              We're preparing exciting content including development tutorials, project showcases, and community spotlights.
            </p>
            <Button className="bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 text-white border-0 px-8 py-3 rounded-full cursor-pointer">
              Subscribe for Updates
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 section-transition"></div>
      </section>

      <Footer />
    </div>
  )
}