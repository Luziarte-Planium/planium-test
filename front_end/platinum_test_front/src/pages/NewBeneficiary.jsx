import { Button, Grid, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { FormContext } from '../context/FormContext';
import { newBeneficiary } from '../services/beneficiary';

export default function NewBeneficiary() {
  const navigate = useNavigate();
  const { formValues, handleChange, clearFormData } = useContext(FormContext);

  async function create() {
    const isBeneficiaryCreated = await newBeneficiary({
      beneficiary: formValues,
      showAlert: true,
    });
    if (isBeneficiaryCreated) {
      clearFormData();
      navigate('/');
    }
  }
  return (
    <Grid
      container
      spacing={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      mt={6}
      p={3}
    >
      <Grid item xs={6}>
        <TextField
          autoFocus
          margin="dense"
          name="nome"
          label="Nome"
          fullWidth
          variant="standard"
          value={formValues.nome}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          margin="dense"
          name="idade"
          label="Idade"
          fullWidth
          variant="standard"
          value={formValues.idade}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          margin="dense"
          name="beneficiarios"
          label="Beneficiários"
          fullWidth
          variant="standard"
          value={formValues.beneficiarios}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          margin="dense"
          name="plano"
          label="Plano"
          fullWidth
          variant="standard"
          value={formValues.plano}
          onChange={handleChange}
        />
      </Grid>
      <Button color="success" onClick={create}>
        Enviar
      </Button>
    </Grid>
  );
}
