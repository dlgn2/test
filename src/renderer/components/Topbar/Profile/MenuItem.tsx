import { Avatar, Grid, Menu, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
export default function MenuItem({ image, text }: any) {
  const classes = useStyles();
  return (
    <Grid>
      <Grid className={classes.container}>
        <Grid className={classes.container2}>
          <Grid style={{ display: 'flex' }}>
            <img src={image} />
            <p className={classes.text}>{text}</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  container:{
    padding:"15px 20px 0px 20px",
  },
  container2:{
  padding: '0px 15px 0px 15px',
  borderRadius:"8px",
  cursor:"pointer",
  "&:hover": {
    background:"#0F0F12"
  }
  },
  text: {
    color: '#8B8B93',
    fontWeight: '400 !important',
    fontSize: '14px !important',
    cursor: 'pointer',
    marginLeft:"10px"
  },
}));
