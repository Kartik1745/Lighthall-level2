import './App.css';
import React from 'react';
import Login from './components/pages/login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
