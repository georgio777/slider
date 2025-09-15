import RoundSlider from "./RoundSlider"
import './CustomSlider.css'
import { useEffect, useState } from "react"
import BackgroundSquares from "./BackgroundSquares"
import SliderControls from "./SliderControls"
import EventsSlider from "./EventsSlider"
import Pagination from "./Pagination"
import SliderHeading from "./SliderHeading"
import MobPagination from "./MobPagination"
import Years from "./Years"
import type { SliderData } from "../../types/types"

interface CustomSliderProps {
  SLIDER_DATA: SliderData;
  name: string;
}

export default function CustomSlider({ SLIDER_DATA, name }: CustomSliderProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(SLIDER_DATA.length - 1)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024)
    
    const resizeHandler = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    window.addEventListener('resize', resizeHandler)

    return () => window.removeEventListener('resize', resizeHandler)
  }, [])

  const itemClickHandler = (index: number) => {
    setCurrentIndex(index)
  }

  const controlsNext = () => {
    setCurrentIndex(prev => 
      prev < SLIDER_DATA.length - 1 ? prev + 1 : 0
    )
  }

  const controlsPrev = () => {
    setCurrentIndex(prev => 
      prev > 0 ? prev - 1 : SLIDER_DATA.length - 1
    )
  }

  const changeCurrentIndex = (idx: number) => {
    setCurrentIndex(idx)
  }

  return (
    <div className="custom-slider">
      <div className="custom-slider__container">
        <div className="custom-slider__wrapper">
          {!isMobile && <BackgroundSquares />}
          <div className="custom-slider__inner">
            <SliderHeading name={name} />
            <Years SLIDER_DATA={SLIDER_DATA} currentIndex={currentIndex} />
            <div className="custom-slider__divider"></div>
            <Pagination currentIndex={currentIndex} SLIDER_DATA={SLIDER_DATA} /> 
            <SliderControls 
            controlsNext={controlsNext} 
            controlsPrev={controlsPrev} 
            />
            <EventsSlider SLIDER_DATA={SLIDER_DATA} currentIndex={currentIndex} isMobile={isMobile}/>
            { isMobile && <MobPagination 
            currentIndex={currentIndex} 
            changeCurrentIndex={changeCurrentIndex} 
            SLIDER_DATA={SLIDER_DATA}/>}

          </div>
          {!isMobile && (
            <RoundSlider 
              currentIndex={currentIndex} 
              itemClickHandler={itemClickHandler} 
              SLIDER_DATA={SLIDER_DATA} 
            />
          )}
        </div>
      </div>
    </div>
  )
}