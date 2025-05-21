// components/Card.jsx
import React from 'react';
import LikeButton from './LikeButton';
import './Card.css';

const Card = () => {
  return (
    <div className="card">
      <h3>React Like Card</h3>
      <p>This is a cool post. You can like it!</p>
      <LikeButton />
    </div>
  );
};

export default Card;
