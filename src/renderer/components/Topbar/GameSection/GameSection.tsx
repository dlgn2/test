import { Avatar, Grid, Menu, Typography } from '@mui/material';
import React from 'react';
import { makeStyles } from '@mui/styles';
import rocketLeague from '../../../../../assets/icons/gameSectionRocketLeague.svg';
import LOL from '../../../../../assets/icons/gameSectionRocketLeague.svg';
import Valorant from '../../../../../assets/icons/gameSectionValorant.svg';
import RuinedKing from '../../../../../assets/icons/gameSectionRuinedKings.svg';
export default function GameSection() {
  const classes = useStyles();

  return (
    <Grid>
      <Grid container style={{ display: 'flex' }} spacing={1.3}>
        <Grid item>
          <img className={classes.game} src={Valorant} />
        </Grid>
        <Grid item>
          <img className={classes.game} src={LOL} />
        </Grid>
        <Grid item>
          <img className={classes.game} src={RuinedKing} />
        </Grid>
        <Grid item>
          <img className={classes.game} src={rocketLeague} />
        </Grid>
      </Grid>
      <Grid style={{width:"299px",height:"2px",background:"rgba(146, 146, 146, 0.22)"}}>

      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles(() => ({
  game: {
    marginTop: '32px',
  },
}));
