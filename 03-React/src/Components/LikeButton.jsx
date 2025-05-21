// components/LikeButton.jsx
import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="like-container">
      <button onClick={handleLike} className={liked ? 'liked-button' : 'like-button'}>
        {liked ? ' Liked' : ' Like'}
      </button>
    </div>
  );
};

export default LikeButton;
