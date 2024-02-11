import React, { useState } from 'react';

const FlipCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleClick}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={frontContent} width={'300px'} height={'300px'} />
        </div>
        <div className="flip-card-back">{backContent}</div>
      </div>
    </div>
  );
};

export default FlipCard;
