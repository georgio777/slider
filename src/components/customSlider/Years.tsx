import './Years.css'
import Numbers from './Numbers'
import { SliderData } from '../../types/types'

interface YearsProps {
  SLIDER_DATA: SliderData;
  currentIndex: number;
}

export default function Years({SLIDER_DATA, currentIndex}: YearsProps) {
  const firstPeriod = SLIDER_DATA[currentIndex].period[0].toString()
  const secondPeriod = SLIDER_DATA[currentIndex].period[1].toString()

  return (
    <div className="years">
      <div className="years__period years__period--first">
        { Array.from(firstPeriod).map(digit => (
          <Numbers number={Number(digit)} />
          )) 
        }
      </div>
      <div className="years__period years__period--second">
        { Array.from(secondPeriod).map(digit => (
          <Numbers number={Number(digit)} />
          )) 
        }      
      </div>
    </div>
  )
}