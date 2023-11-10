import React, { useState } from 'react';
import axios from 'axios';

const WritePiece = ({ pieceType, createdItemId, onCancel, onPublish }) => {
  const [content, setContent] = useState('');

  const handlePublish = async () => {
    try {
      await axios.patch(`http://localhost:5000/${pieceType}s/${createdItemId}`, {
        content,
      });

      onPublish(); // Callback to parent component to handle the publish action
    } catch (error) {
      console.error('Error publishing piece:', error);
    }
  };

  return (
    <div>
      <h2>{pieceType === 'story' ? 'Write your story' : 'Write your poem'}</h2>
      <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      <br />
      <button onClick={handlePublish}>Publish</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default WritePiece;
