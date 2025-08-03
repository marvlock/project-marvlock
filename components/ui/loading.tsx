"use client"

import { useState, useEffect } from 'react'

interface LoadingProps {
  isLoading: boolean
  message?: string
}

export function Loading({ isLoading, message = "Loading..." }: LoadingProps) {
  const [dots, setDots] = useState('')

  useEffect(() => {
    if (!isLoading) return

    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)

    return () => clearInterval(interval)
  }, [isLoading])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8">
          <div className="relative">
            <span 
              className="text-4xl font-semibold text-white tracking-wide italic animate-pulse" 
              style={{fontFamily: 'Dancing Script, cursive', fontStyle: 'italic', fontWeight: '600'}}
            >
              Marvlock
            </span>
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full animate-ping"></div>
          </div>
        </div>

        {/* Loading Spinner */}
        <div className="relative mb-6">
          <div className="w-16 h-16 border-4 border-white/20 rounded-full"></div>
          <div className="absolute top-0 left-0 w-16 h-16 border-4 border-transparent border-t-violet-400 rounded-full animate-spin"></div>
          <div className="absolute top-2 left-2 w-12 h-12 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        </div>

        {/* Loading Text */}
        <div className="text-white/80 font-medium">
          {message}
          <span className="text-violet-400">{dots}</span>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
    </div>
  )
}

// Button Loading Component
export function ButtonLoading({ isLoading, children, className = "", ...props }: any) {
  return (
    <button 
      className={`relative ${className}`} 
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit rounded-inherit">
          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
        </div>
      )}
      <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
        {children}
      </span>
    </button>
  )
}

// Page Transition Loading
export function PageTransitionLoading() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    // Listen for route changes
    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('load', handleComplete)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('load', handleComplete)
    }
  }, [])

  return <Loading isLoading={isLoading} message="Navigating" />
} 