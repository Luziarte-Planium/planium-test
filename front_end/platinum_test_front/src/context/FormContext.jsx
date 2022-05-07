import React, { useState, createContext } from 'react';

export const FormContext = createContext();

export default function FormProvider({ children }) {
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState(0);
  const [valorDoPlano, setValorDoPlano] = useState(0);

  return (
    <FormContext.Provider
      value={{
        isFormDialogOpen,
        isDeleteDialogOpen,
        nome,
        idade,
        valorDoPlano,
        setIsFormDialogOpen,
        setIsDeleteDialogOpen,
        setNome,
        setIdade,
        setValorDoPlano,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
