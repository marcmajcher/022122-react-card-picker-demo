import { useState } from 'react';

export default function CardPicker({ cardData, handleCardChange }) {
  const [cardIndex, setCardIndex] = useState(0);

  function onChangeCard(e) {
    const cardIndex = e.target.value;
    setCardIndex(cardIndex);
    handleCardChange(cardIndex);
  }

  return (
    <>
      <h2>Pick one!</h2>

      <select onChange={onChangeCard} value={cardIndex}>
        {cardData.map((card, i) => (
          <option value={i} key={card}>
            {card}
          </option>
        ))}
      </select>
    </>
  );
}
