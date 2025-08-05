"use client"

import { Button } from "@/components/ui/button"
import { Github, Heart, Shield, Users, Globe } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
      
      {/* Main footer content */}
      <div className="relative bg-white/5 backdrop-blur-xl border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            
            {/* Brand Section */}
            <div>
              <div className="mb-6 flex items-center">
                <Image 
                  src="/marvlock-logo.png" 
                  alt="Marvlock Logo" 
                  width={40} 
                  height={40} 
                  className="mr-3"
                />
                <span className="text-3xl font-semibold text-white tracking-wide italic" style={{fontFamily: 'Sacramento, cursive', fontStyle: 'italic', fontWeight: 'bold'}}>
                  Marvlock
                </span>
              </div>
              <p className="text-purple-200 mb-6 leading-relaxed">
                Building the future of open source innovation one project at a time.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-purple-200 hover:text-white transition-colors duration-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#contribute" className="text-purple-200 hover:text-white transition-colors duration-300">
                    Contribute
                  </a>
                </li>
                <li>
                  <a href="#community" className="text-purple-200 hover:text-white transition-colors duration-300">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#blog" className="text-purple-200 hover:text-white transition-colors duration-300">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="https://github.com/marvlock" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                  <Github className="w-4 h-4 text-gray-300 hover:text-white transition-colors" />
                </a>
                <a href="https://x.com/ProjectMarvlock" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4 text-gray-300 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://discord.gg/CS5mVEsjre" target="_blank" rel="noopener noreferrer" className="p-2 border border-white/30 rounded-full hover:bg-white/10 transition-colors">
                  <svg className="w-4 h-4 text-gray-300 hover:text-white transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-purple-200">
                  <Shield className="w-4 h-4 mr-2 text-violet-400" />
                  Privacy First
                </li>
                <li className="flex items-center text-purple-200">
                  <Users className="w-4 h-4 mr-2 text-violet-400" />
                  Community Driven
                </li>
                <li className="flex items-center text-purple-200">
                  <Globe className="w-4 h-4 mr-2 text-violet-400" />
                  Open Source
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-purple-300 text-sm mb-4 md:mb-0">
                © 2025 Project Marvlock. All rights reserved.
              </p>
              <div className="flex items-center text-purple-300 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 mx-1 text-red-400" />
                <span>by the Marvlock community</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 