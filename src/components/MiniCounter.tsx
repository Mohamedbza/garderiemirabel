import { useEffect, useState, useRef } from "react"

interface MiniCounterProps {
  number: number
  label: string
  duration?: number
  className?: string
}

export default function MiniCounter({ 
  number, 
  label, 
  duration = 1500, 
  className = "" 
}: MiniCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * number))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, number, duration])

  return (
    <div ref={ref} className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full shadow-lg">
        <span className="text-white font-bold text-lg">
          {count}
        </span>
      </div>
      <span className="text-sm font-medium text-gray-700">{label}</span>
    </div>
  )
}
