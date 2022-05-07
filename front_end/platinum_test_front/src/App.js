import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Routes from './routes/Routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
