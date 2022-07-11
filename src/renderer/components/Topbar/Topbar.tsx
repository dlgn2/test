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
  const { socket, setSocket} = React.useContext(SocketContext);
  const { user, setUser , currentSession , setCurrentSession} = React.useContext(UserContext);

  React.useEffect(() => {
    setCurrentSession(JSON.parse(sessionStorage.getItem('vcu') || "{}"))
    var localStorageSetHandler = async function () {
      console.log("update")
      await setCurrentSession(JSON.parse(sessionStorage.getItem('vcu') || "{}"))
    }

    document.addEventListener('vcuUpdate', localStorageSetHandler, false)
  }, [])

  React.useEffect(() => {
    if(!socket){
      setSocket(io('http://localhost:5000'));
    }else{
      if(user){
        console.log(currentSession)
        socket.emit("newUser",user._id,currentSession)
      }
    }
  }, [user,currentSession])

  return (
    <Grid container style={{ display: 'flex' }}>
      <Grid>
        <GameSection />
      </Grid>
      <Grid style={{position:"absolute",right:"25px"}}>
     <Login />
      </Grid>
     {/*<LeftNotification notification={snackBarError} /> */}
    </Grid>
  );
}
