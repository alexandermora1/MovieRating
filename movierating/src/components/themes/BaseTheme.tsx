import { Theme, createTheme } from '@mui/material/styles';
import React from 'react';

// Function to create a theme based on the mode
export const BaseTheme = (mode: "light" | "dark"): Theme => createTheme({
  palette: {
    mode, // can be 'light' or 'dark'
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: { main: '#005C45' }, // Blue
          secondary: { main: '#dc004e' }, // Pink
          background: {
            default: '#f0f2f5',
            paper: '#ffffff',
          },
          text: {
            primary: '#0a0a0a',
            secondary: '#585858',
          },
        }
      : {
          // palette values for dark mode
          primary: { main: '#90caf9' }, // Light Blue
          secondary: { main: '#f48fb1' }, // Light Pink
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#e0e0e0',
            secondary: '#aaaaaa',            
          },
        }),
  },
  components: {
    // Global styles
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
        },
      },
    },
    // Add more component overrides here
  },
});
