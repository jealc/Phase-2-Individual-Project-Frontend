import React, { useState } from 'react';
import axios from 'axios';
import './Create.css';

const Create = () => {
  const [isCreateVisible, setCreateVisible] = useState(false);
  const [itemType, setItemType] = useState('story'); 
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleCreateClick = () => {
    setCreateVisible(true);
  };

  const handleItemTypeChange = (type) => {
    setItemType(type);
  };

  const handleCreate = async () => {
    const itemData = { title, author, description, content };
    try {
      await axios.post(`http://localhost:5000/${itemType === 'story' ? 'stories' : 'poems'}`, itemData);
      alert(`${itemType.charAt(0).toUpperCase() + itemType.slice(1)} created successfully`);
      clearForm();
    } catch (error) {
      console.error(`Error creating ${itemType}:`, error);
    }
  };

  const clearForm = () => {
    setTitle('');
    setAuthor('');
    setDescription('');
    setContent('');
  };

  return (
    <div className="createContainer">
      <div>
        {isCreateVisible ? (
          <div>
            <div className='formContainer'>
              <select value={itemType} onChange={(e) => handleItemTypeChange(e.target.value)}>
                <option value="story">Story</option>
                <option value="poem">Poem</option>
              </select>
              <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
              <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
              <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div className='contentContainer'>
              <textarea
                placeholder={`Write your ${itemType} here`}
                value={content}
                onChange={(e) => setContent(e.target.value)}>     
              </textarea>
            </div>
            <button onClick={handleCreate}>Create</button>
          </div>
        ) : (
          <p>Write and publish your own stories and poems on the site.</p>
        )}
        <button onClick={handleCreateClick}>
          {isCreateVisible ? 'Cancel' : 'Create'}
        </button>
      </div>
      <div>
        {/* Your other content here */}
      </div>
    </div>
  );
};

export default Create;
