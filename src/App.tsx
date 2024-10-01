// src/App.tsx
import React, { useState } from 'react';
import Info from './pages/Info/Info';
import Photos from './pages/Photos/Photos';
import Preferences from './pages/Preferences/Preferences';
import './styles/global.sass';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState('info');

  const renderPage = () => {
    switch (activePage) {
      case 'info':
        return <Info />;
      case 'photos':
        return <Photos />;
      case 'preferences':
        return <Preferences />;
      default:
        return <Info />;
    }
  };

  return (
    <>
      <header>
        <h1>Roses</h1>
      </header>
      <nav>
        <button onClick={() => setActivePage('info')}>Info</button>
        <button onClick={() => setActivePage('photos')}>Photos</button>
        <button onClick={() => setActivePage('preferences')}>Preferences</button>
      </nav>
      <main>{renderPage()}</main>
    </>
  );
};

export default App;
