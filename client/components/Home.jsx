import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';



const Home = () => {

  const [getHorse, setHorse] = useState();
  const getHorses = async () => {
    try{
      const response = await axios.get('/horse/list', {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true
      })
      setHorse(response.data);
      return;
    }catch(err){
      console.log('stuck in catch on getHorse request. Error: ', err);
    }
    //sd
    //sdfsd
  }

  return(
    <div>
      HomePage
      <div>
        <button onClick={() => getHorses()}>Horses</button>
      </div>
      {getHorse}
    </div>
  )

}

export default Home;