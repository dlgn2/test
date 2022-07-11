import { Avatar, Grid, Menu, Typography } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@mui/styles';
import ProgressBar from './ProgressBar';
import {APIService} from '../../API/API'
import { UserContext } from 'renderer/Context/UserContext';

export default function ChallengeCard() {
  const { user, setUser} = useContext(UserContext);
  const api = new APIService();
  const classes = useStyles();

  useEffect(()=>{
if(user){
  if(user.challenges.length<1){
api.setRandomChallenges(user._id);
  }
}

  },[user])
  return (
  <Grid container style={{display:"flex"}} >
      <Grid item className={classes.cardContainer}>
      <h1 className={classes.textTitle}>Ranked Win</h1>
      <p className={classes.subTitle}>
        Win matches in Valorant solo or with your team.<br></br> You can earn up to 15
        VP. You can earn up to 15VP excluding bonuses.
      </p>
      <ProgressBar challengeTitle="Title" progresLevel1={1} progresLevel2={3} progresLevel3={5} progresLevel4={10} progressValue={4}/>
    </Grid>

    <Grid item className={classes.cardContainer} style={{ marginLeft:"10px"}}>
      <h1 className={classes.textTitle}>Get Assists</h1>
      <p className={classes.subTitle}>
        Win matches in Valorant solo or with your team.<br></br> You can earn up to 15
        VP. You can earn up to 15VP excluding bonuses.
      </p>
      <ProgressBar challengeTitle="Title" progresLevel1={1} progresLevel2={3} progresLevel3={5} progresLevel4={10} progressValue={1}/>
    </Grid>

    <Grid item className={classes.cardContainer} style={{ marginLeft:"10px"}}>
      <h1 className={classes.textTitle}>Get Kills</h1>
      <p className={classes.subTitle}>
        Win matches in Valorant solo or with your team.<br></br> You can earn up to 15
        VP. You can earn up to 15VP excluding bonuses.
      </p>
      <ProgressBar challengeTitle="Title" progresLevel1={10} progresLevel2={30} progresLevel3={60} progresLevel4={120} progressValue={17}/>
    </Grid>
  </Grid>
  );
}

const useStyles = makeStyles(() => ({
  cardContainer: {
    width: "31%",
    height: '401px',
    borderRadius: '10px',
    border: '1px solid #313442',
    background: '#1F2128',
    marginTop: '30px',
  },
  textTitle: {
    fontWeight: 700,
    fontSize: '18px',
    lineHeight: '22px',
    color: '#F1F1F1',
    marginLeft: '30px',
    marginTop: '28px',
  },
  subTitle: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    color: '#8B8B93',
    marginLeft: '30px',
    marginTop: '14px',
  },
}));
