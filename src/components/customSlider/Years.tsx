import { useEffect, useRef, useState, useMemo } from 'react'
import './Years.css'
import Numbers from './Numbers'
import { SliderData } from '../../types/types'

interface YearsProps {
  SLIDER_DATA: SliderData
  currentIndex: number
}

export default function Years({ SLIDER_DATA, currentIndex }: YearsProps) {
  const firstPeriod = SLIDER_DATA[currentIndex].period[0].toString()
  const secondPeriod = SLIDER_DATA[currentIndex].period[1].toString()

  const [digitSize, setDigitSize] = useState({ width: 0, height: 0 })
  const measureRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!measureRef.current) return

    const updateSize = () => {
      setDigitSize({
        width: measureRef.current?.offsetWidth || 0,
        height: measureRef.current?.offsetHeight || 0,
      })
    }

    updateSize()

    const observer = new ResizeObserver(updateSize)
    observer.observe(measureRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const firstDigits = useMemo(() => Array.from(firstPeriod), [firstPeriod])
  const secondDigits = useMemo(() => Array.from(secondPeriod), [secondPeriod])

  return (
    <div className="years">
      <span
        ref={measureRef}
        className="numbers__digit numbers__digit--hidden"
      >
        0
      </span>

      <div className="years__period years__period--first">
        {firstDigits.map((digit, index) => (
          <Numbers
            key={`first-period-${index}`}
            number={Number(digit)}
            digitSize={digitSize}
          />
        ))}
      </div>
      <div className="years__period years__period--second">
        {secondDigits.map((digit, index) => (
          <Numbers
            key={`second-period-${index}`}
            number={Number(digit)}
            digitSize={digitSize}
          />
        ))}
      </div>
    </div>
  )
}
