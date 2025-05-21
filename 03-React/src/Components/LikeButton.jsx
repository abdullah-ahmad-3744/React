// components/LikeButton.jsx
import React, { useState } from 'react';
import './LikeButton.css';

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(prev => liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="like-container">
      <button onClick={handleLike} className={liked ? 'liked-button' : 'like-button'}>
        {liked ? ' Liked' : ' Like'}
      </button>
      <p>{likes} {likes === 1 ? 'Like' : 'Likes'}</p>
    </div>
  );
};

export default LikeButton;
