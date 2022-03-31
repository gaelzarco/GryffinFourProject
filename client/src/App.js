import './App.css';
import { useState, useEffect } from 'react'
import MadlibHome from './components/MadlibHome'
import CreateMadLib from "./components/CreateMadLib"
import MadLib from './components/MadLib';

function App() {
  const [ data, setData ] = useState('')

  useEffect(() => {
    fetch('/madlibs')
        .then((res) => res.json())
        .then((data) => setData(data))
}, [data.name])

const renderMadLibHome = () => {
  if (data) {
    return (
      <>
        <MadlibHome data={data}/>
        <CreateMadLib data={data}/>
      </>
    )
  }
}  

  return (
    <div className="App">
      <h1 className="title">WELCOME TO MADLIB MADNESS</h1>
      {renderMadLibHome()}
      <MadLib target={'624523179c41c345d6ebc2e9'}/>
    </div>
  );
}

export default App;
