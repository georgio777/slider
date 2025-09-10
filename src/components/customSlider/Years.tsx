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
        <Numbers number={Number(firstPeriod[0])} />
        <Numbers number={Number(firstPeriod[1])} />
        <Numbers number={Number(firstPeriod[2])} />
        <Numbers number={Number(firstPeriod[3])} />
      </div>
      <div className="years__period years__period--second">
        <Numbers number={Number(secondPeriod[0])} />
        <Numbers number={Number(secondPeriod[1])} />
        <Numbers number={Number(secondPeriod[2])} />
        <Numbers number={Number(secondPeriod[3])} />
      </div>
    </div>
  )
}