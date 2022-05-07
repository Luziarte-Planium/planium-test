import PropTypes from 'prop-types';
import { Box, Paper, Typography } from '@mui/material';
import React from 'react';

export default function Content({ title, children }) {
  return (
    <Box p={2}>
      <Paper elevation={3} component="div" sx={{ textAlign: 'center' }}>
        <Typography variant="h3" component="h3" p={2} sx={{ mt: 4 }}>
          {title}
        </Typography>
        {children}
      </Paper>
    </Box>
  );
}

Content.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

Content.defaultProps = {
  title: '',
};
