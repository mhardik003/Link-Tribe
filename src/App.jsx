import React from 'react';
import { useState , useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MainBody from './Components/MainBody';
import Footer from './Components/Footer';

import Grid from '@mui/material/Grid';

import { Divider, Typography } from '@mui/material';

function App() {
  

  /**
   * Get current URL
   */


  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column'}}>        
        <Navbar />
        <Divider />
        <MainBody/>
        <Divider />
        <Footer/>
    </div>
  );
}

export default App;
