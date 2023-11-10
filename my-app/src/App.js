import React, { useState } from 'react';
import Home from './components/Home';
import Header from './components/Header';
import Stories from './components/Stories';
import Poems from './components/Poems';
import Queue from './components/Queue';
import Create from './components/Create';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const handleHomeClick = () => {
    setCurrentView('home');
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'stories':
        return <Stories />;
      case 'poems':
        return <Poems />;
      case 'queue':
        return <Queue />;
      case 'create':
        return <Create />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header
        onNavigation={handleNavigation}
        onHomeClick={handleHomeClick}
      />
      {renderView()}
    </div>
  );
}

export default App;
