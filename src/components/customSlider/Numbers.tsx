import './Numbers.css'
import React from 'react'

interface NumbersProps {
  number: number
  digitSize: { width: number; height: number }
}

const DIGITS = Array.from({ length: 10 }, (_, index) => index)

function Numbers({ number, digitSize }: NumbersProps) {
  const { width, height } = digitSize

  return (
    <div
      style={{
        height: height,
        width: width,
      }}
      className="numbers"
    >
      <div
        className="numbers__inner"
        style={{ transform: `translateY(-${number * height}px)` }}
      >
        {DIGITS.map((digit) => (
          <span className="numbers__digit" key={digit}>
            {digit}
          </span>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Numbers)
