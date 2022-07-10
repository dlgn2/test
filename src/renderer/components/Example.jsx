import { Avatar, Grid, Menu, Typography } from '@mui/material';
import React from 'react'
import { makeStyles } from '@mui/styles';
export default function Example() {
  const classes = useStyles();
  return (
    <Grid>

    </Grid>
  )
}

const useStyles = makeStyles(() => ({
  profileText: {
    fontFamily: " 'Rajdhani', sans-serif !important",
    textAlign: 'center',
    color: 'white',
    fontWeight: '400 !important',
    fontSize: '18px !important',
    marginLeft: '10px !important',
    cursor: 'pointer',
  },

}));
