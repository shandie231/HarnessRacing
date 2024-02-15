import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import lambdaPeelerV2 from '../assets/LambdaPeelerV2.jpeg';




const Projects = () => {
  // Title, Text, and image address for project cards. These will be gained from either props or API calls in the future

  const text = 'Seamlessly bridge the gap between Lambda functions and layers with Lambda Peeler, a sophisticated open-source tool designed to simplify the management of your serverless cloud operations';
  const title = 'Lambda Peeler: Streamlining AWS Lambda Management';
  const imageAddress = '../assets/LambdaPeelerV2.jpeg';

  //determine the size of the project cards. Not sure how im going to determine these numbers yet
  const boxHeight = 20;
  const boxWidth = 100;

  return(
    <div>
      <Navbar />
      <div className='displayProject' style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}>

        {/* Shadow for the card - this should be done another way  */}
        <div className='projectBackground'style={{
          marginTop: '2vh',
          height: `${boxHeight+0.55}vh`,
          width: `${boxWidth+0.55}vh`,
          borderRadius: '2em',
          display: 'flex',
        }}>
          {/* Everything inside the project card */}
          <div className='projectCards' style={{
            backgroundColor: 'rgb(232, 242, 246)',
            height: `${boxHeight}vh`,
            width: `${boxWidth}vh`,
            borderRadius: '2em',
            display: 'flex',
            position: 'relative',
          }}>
            {/* Image for Project Card */}
            <div className='projectCardsImage'>

              <img 
              src={lambdaPeelerV2}
              style={{
                width: `${boxWidth/4}vh`,
                borderRadius: '15px',
                display: 'flex',
                margin: '10px',
                justifyContent: 'space-around',
                border: '2 px solid rgb(147, 193, 230)',
                }} />
            </div>
            {/* End Image for Project Card */}

            {/* Data information. Project Title, Text description and buttons */}
            <div className='projectCardsData' style={{
              position: 'relative',
              margin: '1vh'
            }}>
              <div className='projectCardsText'>
                <div className='title' style={{
                  fontWeight: 'bold',
                }}>
                  {title}
                </div>
                <div className='description'>
                  {text}
                </div>
              </div>
              <div className='projectCardsButtons' style={{
                  position: 'absolute',
                  right: '0',
                  bottom: '0',
                  margin: '10px',
                }}>
                  <button>More Info</button>
              </div>
            </div>
            {/* End Data Information */}

            <div className='projectCardsButtons'>

            </div>
        
          </div>
        </div>
      </div>
      
    </div>
  )

}

export default Projects;