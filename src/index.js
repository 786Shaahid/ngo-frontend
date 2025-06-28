import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { customTheme, } from './themes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CssBaseline />
    <ToastContainer autoClose={3000} draggable pauseOnHover position={toast?.POSITION?.TOP_RIGHT} />
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </>
);

