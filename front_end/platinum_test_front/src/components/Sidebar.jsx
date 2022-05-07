import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuOptions from '../partials/MenuOptions';

export default function Sidebar({ open, setOpen }) {
  return (
    <div>
      <>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box
            sx={{
              width: 200,
            }}
            role="presentation"
            onClick={() => setOpen(false)}
          >
            <List sx={{ marginTop: 2 }}>
              <MenuOptions />
            </List>
          </Box>
          <Divider />
        </Drawer>
      </>
    </div>
  );
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func,
};
