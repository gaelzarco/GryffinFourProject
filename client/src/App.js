import './App.css';
import { useState, useEffect } from 'react'
import MadlibHome from './components/MadlibHome';

import CreateMadLib from './components/CreateMadLib';


function App() {
  const [ data, setData ] = useState('')

  useEffect(() => {
    fetch('/madlibs')
        .then((res) => res.json())
        .then((data) => setData(data))
}, [data.name])

console.log(data)

const renderMadLibHome = () => {
  if (data) {
    return (
      <>
        <MadlibHome data={data} />
      </>
    )
  }
} 

  return (
    <div className="App">
      <h1 className="title">WELCOME TO MADLIB MADNESS</h1>
      {/* {value} */}
      <MadlibHome />
    </div>
  );
}

export default App;
