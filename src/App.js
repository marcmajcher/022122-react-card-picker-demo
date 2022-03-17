import { useState } from 'react';
import './App.css';
import cardData from './cardData';
import CardDisplay from './CardDisplay';
import CardPicker from './CardPicker';

function App() {
  const [cardIndex, setCardIndex] = useState(0);

  return (
    <div className="container">
      <CardDisplay cardName={cardData[cardIndex]} />
      <CardPicker cardData={cardData} handleCardChange={setCardIndex} />
    </div>
  );
}

export default App;
