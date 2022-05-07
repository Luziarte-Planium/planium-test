import PropTypes from 'prop-types';
import MaterialTable from '@material-table/core';
import React from 'react';
import localization from '../utils/materialTableLocalization';
import { Paper } from '@material-ui/core';

export default function Table({ columns, data, title }) {
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
    />
  );
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
