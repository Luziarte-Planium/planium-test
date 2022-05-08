import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Routes from './routes/Routes';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

function App() {
  const [openMenu, setMenuOpen] = useState(false);
  function setOpen(status) {
    setMenuOpen(status);
  }
  return (
    <>
      <Topbar setOpen={setOpen} />
      <Sidebar open={openMenu} setOpen={setOpen} />
      <Routes />
      <ToastContainer />
    </>
  );
}

export default App;
