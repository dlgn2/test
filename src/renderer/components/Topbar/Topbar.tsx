import { Button, Grid } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { GameClientInterface, UserInterface } from 'renderer/@types/arena';
import { SocketContext } from 'renderer/Context/SocketContext';
import { UserContext } from 'renderer/Context/UserContext';
import { io } from 'socket.io-client';
import GameSection from './GameSection/GameSection';
import Login from './Login/Login';

export default function Topbar() {
  // const { user, setUser} = React.useContext(UserContext);
  const { socket, setSocket } = React.useContext(SocketContext);
  const { user, setUser, currentSession, setCurrentSession } =
    React.useContext(UserContext);

  React.useEffect(() => {
    console.log("LOCATION", window.location)
    setCurrentSession(JSON.parse(sessionStorage.getItem('vcu') || '{}'));
    var localStorageSetHandler = async function () {
      console.log('update');
      await setCurrentSession(
        JSON.parse(sessionStorage.getItem('vcu') || '{}')
      );
      window.location.reload();
    };

    document.addEventListener('vcuUpdate', localStorageSetHandler, false);
  }, []);

  React.useEffect(() => {
    if (!socket) {
      setSocket();
    } else {
      if (user) {
        console.log(currentSession);
        socket.emit('newUser', user._id, currentSession);
        socket.on('apiTransfer', (transferAPI: any) => {
          let api = transferAPI;
          console.log('api', api);
        });
      }
    }
  }, [user, currentSession]);

  return (
    <Grid container style={{ display: 'flex' }}>
      <Grid>
        <GameSection />
      </Grid>
      <Grid style={{ position: 'absolute', right: '25px' }}>
        <Login />
      </Grid>
      {/*<LeftNotification notification={snackBarError} /> */}
    </Grid>
  );
}
