import './SliderItem.css'
import type { SliderData } from '../../types/types' 

interface SliderItemProps {
  resizing: boolean;
  period: SliderData[number]; 
  ANGLE: number;
  itemClickHandler: (index: number) => void;
  circleDiameter: number;
  currentIndex: number;
  index: number;
}

export default function SliderItem({ 
  resizing, 
  period, 
  ANGLE, 
  itemClickHandler, 
  circleDiameter, 
  currentIndex, 
  index 
}: SliderItemProps) {
  
  return (
    <button
      onKeyDown={() => itemClickHandler(index)}
      onClick={() => itemClickHandler(index)}
      tabIndex={0}
      style={{
        transform: `
          rotate(${ANGLE * index - ANGLE}deg) 
          translate(${circleDiameter / 2}px) 
          rotate(${-ANGLE * index + ANGLE * currentIndex + ANGLE}deg)
        `,
        transition: resizing ? 'none' : 'transform 1s'
      }} 
      className={`slider-item ${index === currentIndex ? 'slider-item--active' : ''}`}
    >
      <div className="slider-item__name">{period.name}</div>
      <span className="slider-item__dot"></span>
      <div className="slider-item__inner">
        <span className="slider-item__number">
          {period.id}
        </span>
      </div>
    </button>
  )
}