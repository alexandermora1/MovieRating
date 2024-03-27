import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomePage } from './pages/HomePage';
import { Box, Button, CssBaseline, ThemeProvider } from '@mui/material';
import HttpTest from './pages/HttpTest';
import Header from './components/shared/Header';
import { AppRouter } from './routes/AppRouter';
import { BaseTheme } from './components/themes/BaseTheme';
import { BrowserRouter as Router } from 'react-router-dom';


const App: React.FC = () => {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = BaseTheme(mode);

  return (
    
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter toggleTheme={toggleMode} currentMode={mode} />         
    </ThemeProvider>
  );
}

export default App;
