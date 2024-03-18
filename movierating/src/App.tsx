import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './pages/mainPage';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ backgroundColor: "lightgray"}}>
      <MainPage />
    </Box>
  );
}

export default App;
