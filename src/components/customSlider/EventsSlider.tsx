import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import './EventsSlider.css';
import 'swiper/css/free-mode';
import type { SliderData } from '../../types/types'; 

interface EventsSliderProps {
  SLIDER_DATA: SliderData;
  currentIndex: number;
  isMobile: boolean;
}

export default function EventsSlider({ SLIDER_DATA, currentIndex, isMobile }: EventsSliderProps) {
  const [displayed, setDisplayed] = useState(currentIndex);
  const [navigationReady, setNavigationReady] = useState(false);
  const elRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const displayedRef = useRef(currentIndex);

  useGSAP(() => {
    if (currentIndex === displayedRef.current) return;

    const tl = gsap.timeline();
    tl
      .to(elRef.current, { opacity: 0, duration: 0.3 })
      .add(() => {
        displayedRef.current = currentIndex;
        setDisplayed(currentIndex);
      })
      .to(elRef.current, { opacity: 1, duration: 0.2, delay: 0.7 });

  }, { dependencies: [currentIndex] });

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavigationReady(true);
    }
  }, []);

  return (
    <div className="events-slider" ref={elRef} style={{ opacity: 1 }}>
      {navigationReady && (
        <Swiper
          freeMode={true}
          spaceBetween={isMobile ? 25 : 80}
          slidesPerView={'auto'}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[FreeMode, Navigation]}
        >
          {SLIDER_DATA[displayed].events.map((event, idx) => (
            <SwiperSlide key={idx}>
                <p className='events-slider__date'>{event.eventDate}</p>
                <p className='events-slider__description'>{event.eventDescription}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <button tabIndex={0} ref={prevRef} className="events-slider__nav events-slider__nav--prev button">❮</button>
      <button tabIndex={0} ref={nextRef} className="events-slider__nav events-slider__nav--next button">❯</button>
    </div>
  );
}