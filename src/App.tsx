import React from 'react';
import Store from './Store';
import Routes from './Router';
import './style/main.css';

function App() {

  return (
    <Store>
      <Routes/>
    </Store>
  );
}

export default App;
