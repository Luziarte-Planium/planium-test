import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Content from '../components/Content';
import Table from '../components/Table';
import { listAllBeneficiarys } from '../services/beneficiary';

export default function Home() {
  const beneficiaryColumns = [
    {
      title: 'Codigo',
      field: 'codgio',
      hidden: true,
    },
    {
      title: 'Nome',
      field: 'nome',
    },
    {
      title: 'Idade',
      field: 'idade',
    },
    {
      title: 'Beneficiários',
      field: 'beneficiarios',
    },
    {
      title: 'Valor do Plano',
      field: 'valorDoPlano',
    },
  ];
  const [tableData, setTableData] = useState([{}]);

  useEffect(() => {
    listBeneficiarys();
  }, []);
  async function listBeneficiarys() {
    const beneficiarys = await listAllBeneficiarys({ showAlert: true });
    setTableData(beneficiarys);
  }

  return (
    <Grid
      container
      spacing={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Grid item xs={8}>
        <Content title="Beneficiários">
          <Table
            columns={beneficiaryColumns}
            data={tableData}
            title="Lista de Beneficíarios"

            // openForm={setDialogOpen}
            // setOpenConfirmationDialog={setOpenConfirmationDialog}
          />
        </Content>
      </Grid>
      {/* <ConfirmationDialog
        title="Você deseja deletar este registro?"
        text="Ao confirmar, esta operação não poderá ser desfeita"
        open={openDeleteDialog}
        setOpen={setOpenConfirmationDialog}
        action={this[action]}
      /> */}
    </Grid>
  );
}
