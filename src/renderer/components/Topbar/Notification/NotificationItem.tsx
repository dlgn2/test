import { Avatar, Button, Grid, Menu, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
export default function NotificationItem({ image, text }: any) {
  const classes = useStyles();
  return (
    <Grid>
      <Grid className={classes.container}>
        <Grid className={classes.container2}>
          <Grid style={{ display: 'flex',alignItems:"center"}}>
            <img style={{width:"40px",height:"40px",borderRadius:"60px",marginBottom:"10px",marginTop:"10px"}} src="https://mui.com/static/images/avatar/1.jpg" />
            <p className={classes.text}>{text}</p>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  container:{
    // padding:"15px 20px 0px 20px",
  },
  container2:{
  padding: '15px 20px 15px 20px',
  borderRadius:"4px",
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
