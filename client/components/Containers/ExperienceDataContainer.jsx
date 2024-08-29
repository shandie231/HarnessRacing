import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import lambdaPeelerV2 from '../../assets/LambdaPeelerV2.jpeg';
import alpineLogo from '../../assets/AlpineLogo.png';
import rowanLogo from '../../assets/RowanUniversity.png';
import Experience from '../../components/Experience';
import Starfield from 'react-starfield';





const ExperienceDataContainer = () => {
  // Title, Text, and image address for project cards. These will be gained from either props or API calls in the future

  const text = 'Software Developer at Rowan University. Tech Stack Includes: Vue.js, Webpack, HTML, SCSS, CSS, Tailwind, PHP, PostgreSQL, SVP and AWS. AWS Specifics: RDS, Lambda. Python, JavaScript';
  const title = 'Rowan University - Software Develoepr';
  const imageAddress = rowanLogo;
  

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
  const alpineData = {
    text: 'Worked in offshore windfarm industry in multidude of roles. Geologist, Navigator, Data Processor, Field Lead, Crane Operator, Project Manager. ',
    title: 'Alpine Ocean Seismic Survey',
    imageAddress: alpineLogo,
    boxHeight: boxHeight,
    boxWidth: boxWidth,
  }

  const projects = [];
  const numProj = 1;
  for(let i = 0; i < numProj; i++){
    projects.push(<Experience
      key={i} 
      persData={persData}
     />)
     projects.push(<Experience
      key={i} 
      persData={alpineData}
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

export default ExperienceDataContainer;