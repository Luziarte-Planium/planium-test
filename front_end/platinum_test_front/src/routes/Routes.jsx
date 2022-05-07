import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';

export default function Routes() {
  return (
    <Router>
      <Route path="/" element={<p></p>} />
      <Route path="*" element={<p></p>} />
    </Router>
  );
}
