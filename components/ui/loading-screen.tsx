"use client"

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          // Add a small delay before hiding
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onLoadingComplete, 300) // Wait for fade out animation
          }, 200)
          return 100
        }
        return prev + Math.random() * 10 + 3 // Slower, more realistic progress
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Main content */}
      <div className="flex flex-col items-center space-y-6">
        {/* Logo */}
        <div className="relative">
          <div className="absolute inset-0 bg-black rounded-full blur-2xl opacity-30 animate-pulse"></div>
          <Image
            src="/marvlock-logo.png"
            alt="Marvlock Logo"
            width={120}
            height={120}
            className="relative z-10 drop-shadow-[0_0_20px_rgba(0,0,0,0.5)]"
            priority
          />
        </div>

        {/* Brand name */}
        <div className="text-center">
          <h1 
            className="text-2xl font-bold text-white tracking-wider"
            style={{fontFamily: 'Orbitron, monospace', fontWeight: '600'}}
          >
            PROJECT MARVLOCK
          </h1>
        </div>

        {/* Simple progress bar */}
        <div className="w-48 bg-gray-800 rounded-full h-1 overflow-hidden">
          <div 
            className="h-full bg-white rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Progress percentage */}
        <div className="text-gray-400 text-sm">
          {Math.round(progress)}%
        </div>
      </div>
    </div>
  )
} 