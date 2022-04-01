import './App.css';
import { useState, useEffect } from 'react'
import MadlibHome from './components/MadlibHome'
import CreateMadLib from "./components/CreateMadLib"
import MadLib from './components/MadLib';
import React, {Component} from "react"

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
      <MadLib target={'62451de4e9b7eca7c160a213'}/>
    </div>
  );
}

export default App;
