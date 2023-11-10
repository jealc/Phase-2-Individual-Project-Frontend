import React, { useState } from 'react';
import axios from 'axios';
import WritePiece from './WritePiece'; // Import the new component

const Create = () => {
  const [pieceType, setPieceType] = useState('story');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [createdItemId, setCreatedItemId] = useState(null);
  const [isWritingAreaVisible, setIsWritingAreaVisible] = useState(false);

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
      setIsWritingAreaVisible(true);
    } catch (error) {
      console.error('Error creating new piece:', error);
    }
  };

  const handlePublish = () => {
    setIsWritingAreaVisible(false);
    // Optionally, you can display a confirmation message here
  };

  const handleCancel = async () => {
    try {
      await axios.delete(`http://localhost:5000/${pieceType}s/${createdItemId}`);
      resetForm();
    } catch (error) {
      console.error('Error canceling piece creation:', error);
    }
  };

  const resetForm = () => {
    setTitle('');
    setAuthor('');
    setDescription('');
    setCreatedItemId(null);
    setIsFormVisible(false);
    setIsWritingAreaVisible(false);
  };

  return (
    <div>
      <nav>
        <button onClick={() => setIsFormVisible(true)}>Create</button>
      </nav>

      {isFormVisible && (
        <div>
          <h2>Create New Piece</h2>
          {/* ... (rest of the form code) */}
          <button onClick={handleCreateNewPiece}>Create New Piece</button>
        </div>
      )}

      {isWritingAreaVisible && createdItemId && (
        <WritePiece
          pieceType={pieceType}
          createdItemId={createdItemId}
          onPublish={handlePublish}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default Create;
