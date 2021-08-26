import './App.css';
import Header from './components/Header.js'
import Carousel from './components/Carousel.js'
import CardContainer from './components/CardContainer.js'
import Signup from './components/Signup.js'
import { useState, useEffect } from 'react'

function App() {

  const [state, setState] = useState({
    cards: [],
    slides: [],
    text: {}
  })


  useEffect(() => {
    fetch(`${process.env.REACT_APP_API}`)
    .then(resp => resp.json())
    .then(data => setState({
        cards: data.cards,
        slides: data.hero_slides,
        text: data.hero_text
      })
    )
  }, [])

  return (
    <div>
      <Header />
      <Carousel text={state.text} slides={state.slides} />
      <CardContainer cards={state.cards} /> 
      <Signup />
    </div>
  );
}

export default App;
