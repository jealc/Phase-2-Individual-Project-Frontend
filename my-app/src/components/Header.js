import React from 'react';
import './Header.css';

const Header = ({ onNavigation, onHomeClick }) => {
  return (
    <header>
      <h1 className='appName' onClick={onHomeClick}>ScrapSync</h1>
      <nav>
        <ul>
          <li className='links' onClick={() => onNavigation('stories')}>Stories</li>
          <li className='links' onClick={() => onNavigation('poems')}>Poems</li>
          <li className='links' onClick={() => onNavigation('queue')}>Queue</li>
          <li className='links' onClick={() => onNavigation('create')}>Create</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
