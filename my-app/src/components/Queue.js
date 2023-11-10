import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Queue.css';

const Queue = () => {
  const [queue, setQueue] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    const fetchQueue = async () => {
      try {
        const response = await axios.get('http://localhost:5000/queue');
        setQueue(response.data);
      } catch (error) {
        console.error('Error fetching queue:', error);
      }
    };

    fetchQueue();
  }, [confirmationMessage]);

  const handleRemove = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/queue/${id}`);
      setConfirmationMessage('Item has been removed from the queue.');

      setTimeout(() => {
        setConfirmationMessage('');
      }, 3000);
    } catch (error) {
      console.error('Error removing item from the queue:', error);
    }
  };

  return (
    <div className="queueContainer">
      <h2>Queue</h2>
      {confirmationMessage && <p>{confirmationMessage}</p>}
      {queue.length === 0 ? (
        <p>No items in the queue. Enqueue some stories or poems!</p>
      ) : (
        <div className="queueList">
          {queue.map((item) => (
            <div key={item.id} className="queueItem">
              <h3>{item.type === 'story' ? item.title : item.title}</h3>
              <p>{item.type === 'story' ? item.description : item.description}</p>
              <p>{item.type === 'story' ? 'Story' : 'Poem'}</p>
              <button className='dequeueButton' onClick={() => handleRemove(item.id)}>Dequeue</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Queue;
