import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import lambdaPeelerV2 from '../../assets/LambdaPeelerV2.jpeg';
import Projects from '../../components/Projects';





const ProjectDataContainer = () => {
  // Title, Text, and image address for project cards. These will be gained from either props or API calls in the future

  const text = 'Seamlessly bridge the gap between Lambda functions and layers with Lambda Peeler, a sophisticated open-source tool designed to simplify the management of your serverless cloud operations';
  const title = 'Lambda Peeler: Streamlining AWS Lambda Management';
  const imageAddress = '../assets/LambdaPeelerV2.jpeg';

  //determine the size of the project cards. Not sure how im going to determine these numbers yet
  const boxHeight = 20;
  const boxWidth = 100;

  const persData = {
    text: text,
    title: title,
    imageAddress: imageAddress,
    boxHeight: boxHeight,
    boxWidth: boxWidth,
  }

  return(
  <Projects 
  persData = {persData
  } />
    )
}

export default Projects;