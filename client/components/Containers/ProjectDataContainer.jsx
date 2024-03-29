import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import lambdaPeelerV2 from '../../assets/LambdaPeelerV2.jpeg';
import Projects from '../../components/Projects';
import Starfield from 'react-starfield';





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
  const persData1 = {
    text: text,
    title: title,
    imageAddress: imageAddress,
    boxHeight: boxHeight,
    boxWidth: boxWidth,
  }

  const projects = [];
  const numProj = 5;
  for(let i = 0; i < numProj; i++){
    projects.push(<Projects
      key={i} 
      persData={persData}
     />)
  }

  

  return(
    <div>
      <Navbar/>
      <Starfield
        starCount={2000}
        starColor={[255, 255, 255]}
        speedFactor={0.02}
         
      />
      <div>
        {/* {projects.map((element, index) => (
          <Projects 
            key={index}
            persData={element.persData}
            text={element.text}
            title={element.title}
            imageAddress={element.imageAddress}
            boxHeight={element.boxHeight}
            boxWidth={element.boxWidth}
            //
            />
        ))} */}
        {projects}
      </div>
     
    </div>

    )
}

export default ProjectDataContainer;