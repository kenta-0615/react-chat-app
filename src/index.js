import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { Checkbox } from '@material-ui/core';
import './style.css'
 
 function Theme() {
  return (
    <ThemeProvider>
      <Checkbox />
      <ThemeProvider>
        <Checkbox />
      </ThemeProvider>
    </ThemeProvider>
  );
 }

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
