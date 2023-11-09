import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Queue.css';

const Queue = () => {
  const [queueItems, setQueueItems] = useState([]);

  useEffect(() => {
    const fetchQueueItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/queue');
        setQueueItems(response.data);
      } catch (error) {
        console.error('Error fetching queue items:', error);
      }
    };

    fetchQueueItems();
  }, []);

  return (
    <div className="queueContainer">
      <h2>Queue</h2>
      <div className="queueList">
        {queueItems.map((item) => (
          <div key={item.id} className="queueItem">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {/* Display other details of the queue item as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queue;
