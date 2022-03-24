import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'
import MadlibHome from './components/MadlibHome';

function App() {
  const [value, setValue] = useState('')

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => {
        setValue(data.message)
      })
  }, [])

  return (
    <div className="App">
      <h1>WELCOME TO MADLIB MADNESS</h1>
      <MadlibHome />
    </div>
  );
}

export default App;
