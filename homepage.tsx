import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Star, GitFork, Users, Code, Zap, Shield, Heart } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-700 bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-slate-900" />
            </div>
            <span className="text-xl font-bold text-white">Project Marvlock</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#about" className="text-slate-400 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-slate-400 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#community" className="text-slate-400 hover:text-white transition-colors">
              Community
            </Link>
            <Link href="#contribute" className="text-slate-400 hover:text-white transition-colors">
              Contribute
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white hover:bg-slate-800">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-slate-700 text-slate-200 border-slate-600">
              Open Source Organization
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              Building the Future of
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                Open Source Innovation
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Project Marvlock is a community-driven organization dedicated to creating powerful, accessible, and
              innovative open source solutions that empower developers worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg shadow-cyan-500/25">
                <Github className="w-5 h-5 mr-2" />
                Explore Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-slate-500 bg-transparent"
              >
                Join Community
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 mt-12 text-slate-400">
              <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Star className="w-5 h-5" />
                <span>2.4k Stars</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <GitFork className="w-5 h-5" />
                <span>456 Forks</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-cyan-400 transition-colors">
                <Users className="w-5 h-5" />
                <span>180+ Contributors</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Our Mission</h2>
            <p className="text-lg text-slate-300">
              We believe in the power of open source to democratize technology and foster innovation. Our mission is to
              create tools and libraries that make development more accessible, efficient, and enjoyable for everyone.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-400 transition-colors">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Performance First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Every project is built with performance and efficiency in mind, ensuring optimal user experiences.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-400 transition-colors">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Security Focused</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Security is paramount in all our projects, with regular audits and best practices implementation.
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 transition-colors group">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-400 transition-colors">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-white">Community Driven</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-300">
                  Built by the community, for the community. Every contribution matters and shapes our direction.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Featured Projects</h2>
            <p className="text-lg text-slate-300">
              Discover our flagship open source projects that are making a difference in the developer community.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800 border-slate-600 hover:bg-slate-700 hover:border-cyan-500 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">Marvlock CLI</CardTitle>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-200 border-slate-500">
                    TypeScript
                  </Badge>
                </div>
                <CardDescription className="text-slate-300">
                  A powerful command-line interface for project scaffolding and automation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-slate-400">
                  <div className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                    <Star className="w-4 h-4" />
                    <span>1.2k</span>
                  </div>
                  <div className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                    <GitFork className="w-4 h-4" />
                    <span>89</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-600 hover:bg-slate-700 hover:border-cyan-500 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">Marvlock UI</CardTitle>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-200 border-slate-500">
                    React
                  </Badge>
                </div>
                <CardDescription className="text-slate-300">
                  A comprehensive React component library with modern design principles.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-slate-400">
                  <div className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                    <Star className="w-4 h-4" />
                    <span>856</span>
                  </div>
                  <div className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                    <GitFork className="w-4 h-4" />
                    <span>124</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-600 hover:bg-slate-700 hover:border-cyan-500 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                    Marvlock Core
                  </CardTitle>
                  <Badge variant="secondary" className="bg-slate-600 text-slate-200 border-slate-500">
                    JavaScript
                  </Badge>
                </div>
                <CardDescription className="text-slate-300">
                  Core utilities and helpers for building robust web applications.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4 text-sm text-slate-400">
                  <div className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                    <Star className="w-4 h-4" />
                    <span>432</span>
                  </div>
                  <div className="flex items-center space-x-1 hover:text-orange-400 transition-colors">
                    <GitFork className="w-4 h-4" />
                    <span>67</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Join Our Community</h2>
            <p className="text-lg text-slate-300 mb-12">
              Connect with fellow developers, share ideas, and contribute to the future of open source development.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-cyan-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center mr-3">
                      <Github className="w-5 h-5 text-white" />
                    </div>
                    GitHub Discussions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 mb-4">
                    Join conversations about our projects, ask questions, and share your ideas with the community.
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="border-slate-500 text-slate-200 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white bg-transparent transition-all"
                  >
                    Join Discussion
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-slate-700 border-slate-600 hover:bg-slate-600 hover:border-orange-500 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    Discord Server
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-300 mb-4">
                    Real-time chat with contributors and maintainers. Get help, share updates, and collaborate.
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="border-slate-500 text-slate-200 hover:bg-orange-500 hover:border-orange-500 hover:text-white bg-transparent transition-all"
                  >
                    Join Discord
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contribute Section */}
      <section id="contribute" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">Start Contributing</h2>
            <p className="text-lg text-slate-300 mb-8">
              Whether you're a seasoned developer or just starting out, there's a place for you in Project Marvlock.
              Every contribution, no matter how small, makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg shadow-cyan-500/25">
                <Github className="w-5 h-5 mr-2" />
                View Open Issues
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-200 hover:bg-orange-500 hover:border-orange-500 hover:text-white bg-transparent transition-all"
              >
                Contribution Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-800 py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded flex items-center justify-center">
                  <Code className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-white">Project Marvlock</span>
              </div>
              <p className="text-slate-400 text-sm">Building the future of open source, one project at a time.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Projects</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Marvlock CLI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Marvlock UI
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Marvlock Core
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Community</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-orange-400 transition-colors">
                    Discussions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Contributing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Code of Conduct
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Project Marvlock. Open source and built with{" "}
              <span className="text-orange-400">❤️</span> by the community.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
