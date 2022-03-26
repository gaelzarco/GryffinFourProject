import './App.css';
import { useState, useEffect } from 'react'
import MadlibHome from './components/MadlibHome';

function App() {
  const [value, setValue] = useState('')

  // useEffect(() => {
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setValue(data.message)
  //     })
  // }, [])
  

  return (
    <div className="App">
      <h1>WELCOME TO MADLIB MADNESS</h1>
      {value}
      <MadlibHome />
    </div>
  );
}

export default App;
