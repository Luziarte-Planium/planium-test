import React from 'react';
import { Routes as Router, Route } from 'react-router-dom';
import FormProvider from '../context/FormContext';
import Home from '../pages/Home';
import NewBeneficiary from '../pages/NewBeneficiary';

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
      <Route
        path="/beneficiario/novo"
        element={
          <FormProvider>
            <NewBeneficiary />
          </FormProvider>
        }
      />
      {/* <Route path="*" element={<p></p>} /> */}
    </Router>
  );
}
