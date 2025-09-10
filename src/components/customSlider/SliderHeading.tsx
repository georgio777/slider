import './SliderHeading.css'

interface HeadingProps {
  name: string;
}

export default function SliderHeading({ name }: HeadingProps) {
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