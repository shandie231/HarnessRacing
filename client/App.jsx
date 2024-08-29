import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ExperienceGPT from './components/ExperienceGPT';
import HomePage from './components/HomePage';
// Import your detailed pages here
import SoftwareDeveloperDetails from '../client/components/Containers/RowanUniversity';
import GeologistDetails from '../client/components/Containers/WindfarmGeologist';
import LambdaPeelerDetails from '../client/components/Containers/LambdaPeeler';
import Navbar from './components/Navbar';


const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/ExperienceGPT" element={<ExperienceGPT />} />
      <Route path="/software-developer-details" element={<SoftwareDeveloperDetails />} />
      <Route path="/geologist-details" element={<GeologistDetails />} />
      <Route path="/lambda-peeler-details" element={<LambdaPeelerDetails />} />
      {/* Add additional routes as needed */}
    </Routes>
  </Router>
);

export default App;


