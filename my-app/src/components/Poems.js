import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Poems.css';

const Poems = () => {
  const [poems, setPoems] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/poems');
        setPoems(response.data);
      } catch (error) {
        console.error('Error fetching poems:', error);
      }
    };

    fetchPoems();
  }, [confirmationMessage]);

  const handleEnqueue = async (id, type, title, description) => {
    try {
      await axios.post(`http://localhost:5000/queue`, {
        id,
        type,
        title,
        description
      });
      setConfirmationMessage(`${title} has been added to the queue.`);
    } catch (error) {
      console.error('Error enqueueing poem:', error);
    }
  };

  return (
    <div className="poemsContainer">
      <h2>Poems</h2>
      {confirmationMessage && <p>{confirmationMessage}</p>}
      <div className="poemsList">
        {poems.map((poem) => (
          <div key={poem.id} className="poemBox">
            <button
              className="enqueueButton"
              onClick={() =>
                handleEnqueue(poem.id, 'poem', poem.title, poem.description)
              }
            >
              Enqueue
            </button>
            <h3>{poem.title}</h3>
            <p>{poem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poems;
