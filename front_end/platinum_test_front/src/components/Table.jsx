import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import MaterialTable from '@material-table/core';
import React, { useContext } from 'react';
import localization from '../utils/materialTableLocalization';
import { Paper } from '@material-ui/core';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormContext } from '../context/FormContext';

export default function Table({ columns, data, title }) {
  const { setIsDeleteDialogOpen } = useContext(FormContext);
  const navigate = useNavigate();

  return (
    <MaterialTable
      components={{
        Container: (props) => (
          <Paper {...props} elevation={0} style={{ padding: 10 }} />
        ),
      }}
      columns={columns}
      data={data}
      title={title}
      localization={localization}
      options={{
        addRowPosition: 'first',
        actionsColumnIndex: -1,
        filtering: true,
      }}
      actions={[
        {
          icon: () => <EditIcon />,
          tooltip: 'Editar registro',
          onClick: (props, rowData) => {
            navigate(`/beneficiario/editar`);
          },
        },
        {
          icon: () => <DeleteIcon />,
          tooltip: 'Deletar registro',
          onClick: (props, rowData) => {
            setIsDeleteDialogOpen();
          },
        },
        {
          icon: () => <AddIcon />,
          tooltip: 'Novo registro',
          isFreeAction: true,
          onClick: (props, rowData) => {
            navigate(`/beneficiario/novo`);
          },
        },
      ]}
    />
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
