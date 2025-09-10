import { useLayoutEffect, useEffect, useRef, useState } from 'react'
import './RoundSlider.css'
import SliderItem from './SliderItem'
import type { SliderData } from '../../types/types';

interface RoundSliderProps {
  currentIndex: number;
  itemClickHandler: (index: number) => void;
  SLIDER_DATA: SliderData;
}

export default function RoundSlider({ currentIndex, itemClickHandler, SLIDER_DATA }: RoundSliderProps) {
  const [circleDiameter, setCircleDiameter] = useState(0)
  const [resizing, setResizing] = useState(false)
  const circleElRef = useRef<HTMLDivElement>(null)
  const resizeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const ANGLE = 360 / SLIDER_DATA.length

  useLayoutEffect(() => {
    if (circleElRef.current) {
      setCircleDiameter(circleElRef.current.offsetWidth)
    }
  }, [])

  useEffect(() => {
    const observer = new ResizeObserver(entries => {
      setCircleDiameter(entries[0].contentRect.width)
      setResizing(true)
      
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
      resizeTimeoutRef.current = setTimeout(() => {
        setResizing(false)
      }, 100) 
    })
    
    if (circleElRef.current) {
      observer.observe(circleElRef.current)
    }
    
    return () => {
      observer.disconnect()
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="circle_container">
      <div 
        ref={circleElRef}
        style={{
          transform: `rotate(-${currentIndex * ANGLE}deg)`,
          transition: resizing ? 'none' : 'transform 1s'
        }}
        className="circle"
      >
        {SLIDER_DATA.map((period, index) => 
          <SliderItem 
            resizing={resizing}
            callback={itemClickHandler}
            key={period.id}
            period={period} 
            ANGLE={ANGLE}
            circleDiameter={circleDiameter}
            currentIndex={currentIndex}
            index={index}
          />
        )}
      </div>
    </div>
  )
}