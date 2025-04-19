import React from "react";

// Use this heart icon to create the like button
import { Heart } from "lucide-react";

function PostCard({ username, imageUrl, caption, likes, onLike, id }) {
  return (
    <div className="post">
      {/* Build your post card here */}

      <div className="post-header">
        <p className="avatar">{username[0]}</p>
        <h3 className="username">{username}</h3>
      </div>
      <img src={imageUrl} alt="no image" className="post-image" />
      <div className="post-actions">
        <button className="like-button" onClick={() => onLike(id)}>
          <Heart
            size={24}
            color={likes >= 1 ? "red" : "black"}
            fill={likes >= 1 ? "red" : "#f5f5f5"}
          />
        </button>
        <p className="likes-count">{likes} Likes</p>
      </div>
      <div className="post-caption">
        <h3 className="username">{username}</h3>
        <p>{caption}</p>
      </div>
    </div>
  );
}

export default PostCard;
