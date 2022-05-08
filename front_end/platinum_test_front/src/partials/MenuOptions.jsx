import React from 'react';
import { Link } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import HomeOutlined from '@mui/icons-material/HomeOutlined';

export default function MenuOptions() {
  return (
    <>
      <Link to="/">
        <ListItem button>
          <ListItemIcon sx={{ p: 1, ml: 3 }}>
            <HomeOutlined />
          </ListItemIcon>
          <ListItemText primary={'Início'} />
        </ListItem>
      </Link>
      <Divider />
    </>
  );
}
