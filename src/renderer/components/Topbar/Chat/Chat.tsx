import { Avatar, Grid, Menu, Typography } from '@mui/material';
import React from 'react'
import { makeStyles } from '@mui/styles';
import chatIcon from '../../../../../assets/icons/topChatIcon.svg'
export default function Chat() {
  const classes = useStyles();
  return (
    <Grid style={{marginTop:"-7px"}}>
<img src={chatIcon} />
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
