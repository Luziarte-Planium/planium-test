import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import FormProvider from '../context/FormContext';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Router>
      <Route
        path="/"
        element={
          <FormProvider>
            <Home />
          </FormProvider>
        }
      />
      {/* <Route path="*" element={<p></p>} /> */}
    </Router>
  );
}
