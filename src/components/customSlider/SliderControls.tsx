import './SliderControls.css'

interface SliderControlsProps {
  controlsNext: () => void;
  controlsPrev: () => void;
}

export default function SliderControls({controlsNext, controlsPrev}: SliderControlsProps) {
  return (
    <div className="slider_controls">
      <button tabIndex={0} onClick={controlsPrev} className="slider_control button">
        ❮
      </button>
      <button tabIndex={0} onClick={controlsNext} className="slider_control button">
        ❯
      </button>
    </div>
  )
}