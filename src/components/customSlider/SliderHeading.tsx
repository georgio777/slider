import './SliderHeading.css'
import React from 'react';

interface HeadingProps {
  name: string;
}

function SliderHeading({ name }: HeadingProps) {
  const words = name.split(' '); 

  return (
    <h2 className="slider-heading">
      {words.map((word, index) => (
        <span key={index} className="slider-heading__word">
          {word}
        </span>
      ))}
    </h2>
  );
}

export default React.memo(SliderHeading)