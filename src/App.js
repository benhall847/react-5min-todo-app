import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo></Todo>
      </header>
    </div>
  );
}

export default App;
