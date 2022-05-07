import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<p></p>} /> */}
    </Router>
  );
}
