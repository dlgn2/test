import { Divider, Grid} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import smallIcon from '../../../../../assets/icons/chatTopSmallIcon.svg';
import downPerson from '../../../../../assets/icons/downMenuPerson.svg';
import NotificationItem from './NotificationItem';

export default function NotificationBase({ open }: any) {

  const classes = useStyles();

  return (
    <Grid >
      {open.open === "Notification" && open.bool ? (
        <Grid style={{ marginTop: '5px' }}>
          <Grid style={{ position: 'absolute', right: '32px', top: '-10px' }}><img src={smallIcon} /></Grid>
          <Grid className={classes.menuContainer}>
            <NotificationItem image={downPerson} text="Mehmet Can Aydın arkadaşlık isteğini kabul etti." />
            <Divider variant="inset" color="grey" style={{width:"96%",marginLeft:"2%",opacity:"0.1"}} />
            <NotificationItem image={downPerson} text="Anka Team sana takım isteği gönderdi." />
            <Divider variant="inset" color="grey" style={{width:"96%",marginLeft:"2%",opacity:"0.1"}} />
            <NotificationItem image={downPerson} text="4 arkadaşlık isteği beklemede." />
          </Grid>
        </Grid>
      ) : (
        ''
      )}
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  menuContainer: {
    width: '400px',
    height: '100%',
    background: '#181920',
    borderRadius: '16px',
  },
}));
