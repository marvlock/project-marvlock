"use client"

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export function useNavigationLoading() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const navigateWithLoading = (href: string, delay: number = 500) => {
    setIsLoading(true)
    
    // Simulate loading time for better UX
    setTimeout(() => {
      router.push(href)
      setIsLoading(false)
    }, delay)
  }

  const handleLinkClick = (href: string, delay: number = 500) => {
    setIsLoading(true)
    
    setTimeout(() => {
      window.location.href = href
    }, delay)
  }

  return {
    isLoading,
    setIsLoading,
    navigateWithLoading,
    handleLinkClick
  }
} 