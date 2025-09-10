import { useLayoutEffect, useRef, useState, useCallback } from 'react'
import './Numbers.css'

interface NumbersProps {
  number: number
}

export default function Numbers({ number }: NumbersProps) {
  const numRef = useRef<HTMLSpanElement>(null)
  const resizeObserverRef = useRef<ResizeObserver | null>(null)
  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)

  const updateDimensions = useCallback(() => {
    if (numRef.current) {
      setHeight(numRef.current.offsetHeight)
      setWidth(numRef.current.offsetWidth)
    }
  }, [])

  useLayoutEffect(() => {
    updateDimensions()

    resizeObserverRef.current = new ResizeObserver(updateDimensions)

    if (numRef.current) {
      resizeObserverRef.current.observe(numRef.current)
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect()
      }
    }
  }, [updateDimensions])

  return (
    <div
      style={{
        height: height,
        width: width
      }}
      className="num-area"
    >
      <div 
        className="num-inner"
        style={{ transform: `translateY(-${number * height}px)` }}
      >
        {Array.from({ length: 10 }, (_, index) => (
          <span 
            className='num' 
            ref={index === 0 ? numRef : undefined} 
            key={index}
          >
            {index}
          </span>
        ))}
      </div>
    </div>
  )
}