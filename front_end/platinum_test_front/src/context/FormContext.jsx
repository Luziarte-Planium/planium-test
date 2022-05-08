import React, { useState, createContext } from 'react';

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    nome: '',
    idade: 0,
    plano: 0,
    beneficiarios: 0,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  function clearFormData() {
    setFormValues({
      nome: '',
      idade: 0,
      plano: 0,
      beneficiarios: 0,
    });
  }

  return (
    <FormContext.Provider
      value={{
        isDeleteDialogOpen,
        setIsDeleteDialogOpen,
        handleChange,
        formValues,
        clearFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
