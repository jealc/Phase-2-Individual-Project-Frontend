import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Poems.css';

const Poems = () => {
  const [poems, setPoems] = useState([]);

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
  }, []);

  return (
    <div className='poemsContainer'>
      <h2>Poems</h2>
      <div className='poemsList'>
        {poems.map((poem) => (
          <div key={poem.id} className='poemBox'>
            <h3>{poem.title}</h3>
            <p>{poem.content}</p>
            {/* Display other details of the poem as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poems;
