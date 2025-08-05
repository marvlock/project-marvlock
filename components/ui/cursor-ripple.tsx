"use client"

import { useEffect, useState } from 'react'

interface CursorRippleProps {
  color?: string
  size?: number
  duration?: number
}

export function CursorRipple({ 
  color = "rgba(139, 92, 246, 0.3)", 
  size = 400, 
  duration = 1000 
}: CursorRippleProps) {
  const [ripples, setRipples] = useState<Array<{
    id: number
    x: number
    y: number
    startTime: number
  }>>([])

  useEffect(() => {
    let rippleId = 0

    const handleMouseMove = (e: MouseEvent) => {
      const newRipple = {
        id: rippleId++,
        x: e.clientX,
        y: e.clientY,
        startTime: Date.now()
      }

      setRipples(prev => [...prev, newRipple])

      // Remove ripple after animation duration
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
      }, duration)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [duration])

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full opacity-0 animate-ripple"
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