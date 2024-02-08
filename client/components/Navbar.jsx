import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';



const Navbar = () => {


  return(
    <div className='navbar'>
      <div> 
        <div className='navButtons'>
          <button id='home'>
            Home
          </button>
          <button>
            Projects
          </button>
          <button>
            Contact Me
          </button>
        </div>
        
      </div>
    </div>
  )

}

export default Navbar;