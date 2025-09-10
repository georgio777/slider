import "./SliderControls.css";

interface SliderControlsProps {
  controlsNext: () => void;
  controlsPrev: () => void;
}

export default function SliderControls({
  controlsNext,
  controlsPrev,
}: SliderControlsProps) {
  return (
    <div className="slider-controls">
      <button
        tabIndex={0}
        onClick={controlsPrev}
        className="slider-controls__button button"
      >
        ❮
      </button>
      <button
        tabIndex={0}
        onClick={controlsNext}
        className="slider-controls__button button"
      >
        ❯
      </button>
    </div>
  );
}
