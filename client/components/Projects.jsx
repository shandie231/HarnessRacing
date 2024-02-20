import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import lambdaPeelerV2 from '../assets/LambdaPeelerV2.jpeg';
import ProjectDataContainer from '../components/Containers/ProjectDataContainer';




const Projects = (props) => {
  
  const { persData } = props;

  // const {text, title, imageAddress, boxHeight, boxWidth } = persData;
  const text = persData.text;
  const title = persData.title;
  const imageAddress = persData.imageAddress;
  const boxHeight = persData.boxHeight;
  const boxWidth = persData.boxWidth;

  // Title, Text, and image address for project cards. These will be gained from either props or API calls in the future

  // const text = 'Seamlessly bridge the gap between Lambda functions and layers with Lambda Peeler, a sophisticated open-source tool designed to simplify the management of your serverless cloud operations';
  // const title = 'Lambda Peeler: Streamlining AWS Lambda Management';
  // const imageAddress = '../assets/LambdaPeelerV2.jpeg';

  // //determine the size of the project cards. Not sure how im going to determine these numbers yet
  // const boxHeight = 20;
  // const boxWidth = 100;

  return(
    <div>
      <div className='displayProject' style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}>

        {/* Shadow for the card - this should be done another way  */}
       
          {/* Everything inside the project card */}
          <div className='projectCards' style={{
            marginTop: `${boxHeight/10}vh`,
            backgroundColor: 'rgb(232, 242, 246)',
            height: `${boxHeight}vh`,
            width: `${boxWidth}vh`,
            borderRadius: '2em',
            display: 'flex',
            position: 'relative',
            boxShadow: '10px 10px 5px lightblue',

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
                boxShadow: '10px 10px 5px lightblue',
                }} />
            </div>
            {/* End Image for Project Card */}

            {/* Data information. Project Title, Text description and buttons */}
            <div className='projectCardsData' style={{
              position: 'relative',
              margin: '2vh'
            }}>
              <div className='projectCardsText' style={{
                width: `${boxWidth - (boxWidth/4)}`,
                height: '100%',
              }}>
                <div className='title' style={{
                  fontWeight: 'bold',
                  color: 'steelblue',
                }}>
                  {title}
                </div>
                <div className='description' style={{
                  color: 'steelblue',
                }}>
                  {text}
                </div>
              </div>
              <div className='projectCardsButtons' style={{
                  position: 'absolute',
                  right: '0',
                  bottom: '0',
                  margin: '10px',
                  boxShadow: '5px 5px 5px lightblue',
                }}>
                  <button className='infoButton' style={{
                  }}>More Info</button>
              </div>
            </div>
            {/* End Data Information */}

            <div className='projectCardsButtons'>

            </div>
        
          
        </div>
      </div>
      
    </div>
  )

}

export default Projects;