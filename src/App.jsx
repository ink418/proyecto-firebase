import React, { useState } from 'react';
import Home from './components/Home';
import Catalog from './components/Catalog';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  return (
    <div className="app">
      {view === 'home' ? <Home startApp={() => setView('catalog')} /> : <Catalog goBack={() => setView('home')} />}
    </div>
  );
}
export default App;