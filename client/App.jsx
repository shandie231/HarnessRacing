import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home.jsx"
import Projects from './components/Projects.jsx';
import './styles/styles.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Projects />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;