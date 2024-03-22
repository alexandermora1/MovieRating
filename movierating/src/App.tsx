import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MainPage } from './pages/MainPage';
import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import HttpTest from './pages/HttpTest';
import Header from './components/shared/Header';


function App() {
  return (
    <Box>      
      <Header />
      <MainPage />
    </Box>
  );
}

export default App;
