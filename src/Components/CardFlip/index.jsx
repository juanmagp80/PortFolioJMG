import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

export default function MyFlipCard() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div onClick={handleClick}>Este es el frente de la tarjeta.</div>

      <div onClick={handleClick}>Este es el reverso de la tarjeta.</div>
    </ReactCardFlip>
  );
}
