import { SliderData } from '../../types/types';
import './MobPagination.css'

interface MobProps {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  SLIDER_DATA: SliderData
}

export default function MobPagination({currentIndex, setCurrentIndex, SLIDER_DATA}: MobProps) {
  return (
    <div className="mob-pagination">
      {Array.from({ length: SLIDER_DATA.length }, (_, index) => (
          <span 
            className={`mob-pagination-item ${index === currentIndex ? 'mob-pagination-item-active' : ''} `} 
            key={index}
            onClick={() => setCurrentIndex(index)}
          >
          </span>
        ))}
    </div>
  )
}