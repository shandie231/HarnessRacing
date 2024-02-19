import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/Home.jsx"
import Projects from './components/Projects.jsx';
import ProjectDataContainer from './components/Containers/ProjectDataContainer.jsx'
import './styles/styles.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectDataContainer />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;