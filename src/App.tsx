import './App.css';
import CustomSlider from './components/customSlider/CustomSlider';
import SLIDER_DATA from './data/sliderData';

function App() {
  return (
    <div className="App">
      <CustomSlider SLIDER_DATA={SLIDER_DATA} name={'Исторические даты'} />
    </div>
  );
}

export default App;
