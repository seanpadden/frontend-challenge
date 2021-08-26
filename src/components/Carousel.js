import '../assets/css/Header.css'
import { useState } from 'react'

const Carousel = ({slides, text}) => {
  const [index, setIndex] = useState(0)

  const renderImage = () => {
    return <img src={`${slides[index].image}`} alt={slides[index].alt} />
  }

  return(
    <div>
      {slides.length > 0 && renderImage()}
      <div >
        <ul className="dots">
        {/* these aren't aligning side by side yet */}
        {slides.map((slide, index) => <li onClick={() => setIndex(index)}></li>)}
        </ul>
      </div>
    </div>
  )
}
export default Carousel