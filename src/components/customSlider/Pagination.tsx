import { SliderData } from '../../types/types';
import './Pagination.css'

interface PaginationProps {
  currentIndex: number;
  SLIDER_DATA: SliderData;
}

export default function Pagination({ currentIndex, SLIDER_DATA}: PaginationProps) {
  return (
    <div className="pagination">
      <p className="pagination__text">{currentIndex + 1}/{SLIDER_DATA.length}</p>
    </div>
  )
}