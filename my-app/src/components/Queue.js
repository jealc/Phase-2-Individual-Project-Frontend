import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Queue.css';

const Queue = () => {
  const [queue, setQueue] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

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

  const handleRead = (item) => {
    setSelectedItem(item);
  };

  const handleCloseRead = () => {
    setSelectedItem(null);
  };

  return (
    <div className="queueContainer">
      <h2>Queue</h2>
      {confirmationMessage && <p>{confirmationMessage}</p>}
      <div className="queueSegment">
        <div className="queueList">
          {queue.length === 0 ? (
            <p>No items in the queue. Enqueue some stories or poems!</p>
          ) : (
            queue.map((item) => (
              <div key={item.id} className="queueItem">
                <h3>{item.type === 'story' ? item.title : item.title}</h3>
                <p>{item.type === 'story' ? item.description : item.description}</p>
                <p><b>{item.type === 'story' ? 'Story' : 'Poem'}</b></p>
                <button className='dequeueButton' onClick={() => handleRemove(item.id)}>Dequeue</button>
                <button className='readButton' onClick={() => handleRead(item)}>Read</button>
              </div>
            ))
          )}
        </div>
        <div className="selectedItem">
          {selectedItem && (
            <div className="selectedItemContent">
              <button className='closeButton' onClick={handleCloseRead}>Close</button>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.content}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Queue;
