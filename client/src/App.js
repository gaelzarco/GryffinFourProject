import './App.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Nav from "react-bootstrap/Nav"
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

  return (
    <div className="App">
      <div className="background">
        <Nav
          className="justify-content-center"
          defaultActiveKey="/home"
          as="ul"
        >
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/create">Create Madlib</Nav.Link>
          </Nav.Item>
        </Nav>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MadlibHome data={data}/>} />
            <Route path="/home" element={<MadlibHome data={data}/>} />
            <Route path="/create" element={<CreateMadLib data={data}/>} />
            <Route path="/madlib" element={<MadLib />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}


export default App;
