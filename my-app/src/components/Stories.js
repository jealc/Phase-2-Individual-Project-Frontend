import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Stories.css';

const Stories = () => {
  const [stories, setStories] = useState([]);

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
  }, []);

  return (
    <div className='storiesContainer'>
      <h2>Stories</h2>
      <div className='storiesList'>
        {stories.map((story) => (
          <div key={story.id} className='storyBox'>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
            {/* Display other details of the story as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;
