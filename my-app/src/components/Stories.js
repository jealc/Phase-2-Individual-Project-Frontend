import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Stories.css';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/stories');
        setStories(response.data);
      } catch (error) {
        console.error('Error fetching stories:', error);
      }
    };

    fetchStories();
  }, [confirmationMessage]);

  const handleEnqueue = async (id, type, title, description, author, content) => {
    try {
      await axios.post(`http://localhost:5000/queue`, {
        id,
        type,
        title,
        description,
        author,
        content,
      });
      setConfirmationMessage(`${title} has been added to the queue.`);
    } catch (error) {
      console.error('Error enqueueing story:', error);
    }
  };

  return (
    <div className="storiesContainer">
      <h2>Stories</h2>
      {confirmationMessage && <p>{confirmationMessage}</p>}
      <div className="storiesList">
        {stories.map((story) => (
          <div key={story.id} className="storyBox">
            <button
              className="enqueueButton"
              onClick={() =>
                handleEnqueue(story.id, 'story', story.title, story.description, story.author, story.content)
              }
            >
              Enqueue
            </button>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            <h4>{story.author}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
