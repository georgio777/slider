import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode } from 'swiper/modules';
import 'swiper/css';
import { useRef, useState, useEffect } from 'react';
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
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setNavigationReady(true);
    }
  }, []);

  useEffect(() => {
    if (!elRef.current) return;

    if (currentIndex !== displayed) {
      tlRef.current?.kill();
      tlRef.current = gsap.timeline();

      tlRef.current
        .to(elRef.current, { opacity: 0, duration: 0.3 })
        .add(() => setDisplayed(currentIndex))
        .to(elRef.current, { opacity: 1, duration: 0.2, delay: 0.7 });
    }
  }, [currentIndex, displayed]);

  return (
    <div className="events_wrapper" ref={elRef} style={{ opacity: 1 }}>
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
                <p className='event-date'>{event.eventDate}</p>
                <p className='event-description'>{event.eventDescription}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <button tabIndex={0} ref={prevRef} className="my-swiper-prev button">❮</button>
      <button tabIndex={0} ref={nextRef} className="my-swiper-next button">❯</button>
    </div>
  );
}