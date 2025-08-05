"use client"

import { useEffect, useState } from 'react'

interface RandomRippleProps {
  color?: string
  size?: number
  duration?: number
  interval?: number
  maxRipples?: number
}

export function RandomRipple({ 
  color = "rgba(139, 92, 246, 0.15)", 
  size = 400, 
  duration = 2000,
  interval = 3000,
  maxRipples = 3
}: RandomRippleProps) {
  const [ripples, setRipples] = useState<Array<{
    id: number
    x: number
    y: number
    startTime: number
  }>>([])

  useEffect(() => {
    let rippleId = 0
    let intervalId: NodeJS.Timeout

    const createRandomRipple = () => {
      // Generate random position
      const x = Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)
      const y = Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)

      const newRipple = {
        id: rippleId++,
        x,
        y,
        startTime: Date.now()
      }

      setRipples(prev => {
        const updated = [...prev, newRipple]
        // Keep only the latest maxRipples
        return updated.slice(-maxRipples)
      })

      // Remove ripple after animation duration
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
      }, duration)
    }

    // Create initial ripple
    createRandomRipple()

    // Set up interval for random ripples
    intervalId = setInterval(createRandomRipple, interval)

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [duration, interval, maxRipples])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full opacity-0 animate-random-ripple"
          style={{
            left: ripple.x - size / 2,
            top: ripple.y - size / 2,
            width: size,
            height: size,
            background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
            animationDuration: `${duration}ms`,
            animationTimingFunction: 'ease-out'
          }}
        />
      ))}
    </div>
  )
} 