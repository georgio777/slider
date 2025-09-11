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
          <button 
            className={`mob-pagination__item ${index === currentIndex ? 'mob-pagination__item--active' : ''} `} 
            key={index}
            onClick={() => setCurrentIndex(index)}
          >
          </button>
        ))}
    </div>
  )
}