import React, { useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [pieceType, setPieceType] = useState('story');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [createdItemId, setCreatedItemId] = useState(null);

  const handlePieceTypeChange = (event) => {
    setPieceType(event.target.value);
  };

  const handleCreateNewPiece = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/${pieceType}s`, {
        title,
        author,
        description,
        content: '',
      });

      setCreatedItemId(response.data.id);
      setIsFormVisible(false);
    } catch (error) {
      console.error('Error creating new piece:', error);
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => setIsFormVisible(true)}>Create</button>
      </nav>

      {isFormVisible && (
        <div>
          <h2>Create New Piece</h2>
          <label>
            Type:
            <select value={pieceType} onChange={handlePieceTypeChange}>
              <option value="story">Story</option>
              <option value="poem">Poem</option>
            </select>
          </label>
          <br />
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <br />
          <label>
            Author:
            <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
          </label>
          <br />
          <label>
            Description:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <br />
          <button onClick={handleCreateNewPiece}>Create New Piece</button>
        </div>
      )}
    </div>
  );
};

export default Create;
