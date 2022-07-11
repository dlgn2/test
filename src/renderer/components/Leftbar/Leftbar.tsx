import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import arenaLogo from '../../../../assets/icons/arenaLogo.svg';
import arenaShop from '../../../../assets/icons/arenaShop.svg';
import arenaRewards from '../../../../assets/icons/arenaRewards.svg';
import arenaTournaments from '../../../../assets/icons/arenaTournaments.svg';
import arenaLine from '../../../../assets/icons/arenaActiveLine.svg';
import arenaExtend from '../../../../assets/icons/arenaExtend.svg';
import arenaDownloads from '../../../../assets/icons/arenaDownloads.svg';
import arenaSettings from '../../../../assets/icons/arenaSettings.svg';
import arenaLeftProfile from '../../../../assets/icons/arenaLeftProfile.svg';
import arenaActiveShop from '../../../../assets/icons/arenaActiveShop.svg';
import arenaActiveRewards from '../../../../assets/icons/arenaActiveRewards.svg';
import arenaActiveTournaments from '../../../../assets/icons/arenaActiveTournaments.svg';
import arenaActiveDownloads from '../../../../assets/icons/arenaActiveDownloads.svg';
import arenaActiveSettings from '../../../../assets/icons/arenaActiveSettings.svg';
import LeftbarItem from './LeftbarItem';
import LeftbarItemActive from './LeftbarItemActive';

export default function Leftbar() {
  const [activeTab, setActiveTab] = useState('Rewards');
  const [extend, setExtend] = useState(false);

  ////////////////// PROBLEMATIC CODE NEED TO REFACTOR s
  const classes = useStyles();
  return (
    <Grid style={extend ? {height:"100vh",width:"180px"} : {height:"100vh",width:"100px"}}>
      <img
        onClick={() => {
          setExtend(!extend);
        }}
        style={
          extend
            ? {
                position: 'absolute',
                left: '143px',
                top: '24px',
                cursor: 'pointer',
              }
            : {
                position: 'absolute',
                left: '60px',
                top: '24px',
                cursor: 'pointer',
              }
        }
        src={arenaExtend}
      />
      <Grid
        style={
          extend
            ? {
                position: 'absolute',
                width: '1px',
                height: '100%',
                left: '160px',
                top: '0px',
                background: 'rgb(196,196,196,0.08)',
              }
            : {
                position: 'absolute',
                width: '1px',
                height: '100%',
                left: '77px',
                top: '0px',
                background: 'rgb(196,196,196,0.08)',
              }
        }
      ></Grid>
      <Grid style={{ display: 'flex', alignItems: 'center' }}>
      {extend ? <LeftbarItemActive image={arenaLogo} title="Arena" /> : <LeftbarItem image={arenaLogo} />}
      </Grid>
      <Grid>
      {extend ? <LeftbarItemActive image={arenaActiveRewards} title="Rewards" active={true} /> : <LeftbarItem image={arenaActiveRewards} />}
      </Grid>

      <Grid>
      {extend ? <LeftbarItemActive image={arenaShop} title="Shop" /> : <LeftbarItem image={arenaShop} />}
      </Grid>

      <Grid style={{marginTop:"50px",marginBottom:"200px"}}>
      {extend ? <LeftbarItemActive image={arenaTournaments} title="Teams"  /> : <LeftbarItem image={arenaTournaments} />}
      </Grid>

      <Grid>
      {extend ? <LeftbarItemActive image={arenaDownloads} title="Downloads" /> : <LeftbarItem image={arenaDownloads} />}
      </Grid>

      <Grid>
      {extend ? <LeftbarItemActive image={arenaSettings} title="Settings" /> : <LeftbarItem image={arenaSettings} />}
      </Grid>

      <Grid style={extend ? {marginLeft:"-2px",marginTop:"50px"} : {marginLeft:"-9px", marginTop:"50px"}} >
      {extend ? <LeftbarItemActive image={arenaLeftProfile} title="baypool" /> : <LeftbarItem  image={arenaLeftProfile} />}
      </Grid>
    </Grid>
  );
}
const useStyles = makeStyles(() => ({
  logo: {
    marginLeft: '25px',
    marginTop: '35px',
  },
  leftBarIcon: {
    marginLeft: '25px',
    marginTop: '55px',
  },
}));
