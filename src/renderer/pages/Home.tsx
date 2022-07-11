import * as React from 'react';
import Grid from '@mui/material/Grid';
import Topbar from 'renderer/components/Topbar/Topbar';
import Leftbar from 'renderer/components/Leftbar/Leftbar';
import ChallengeCard from 'renderer/components/ChallengeCard/ChallengeCard';
import {GameClientInterface} from '../@types/arena'
import { UserContext } from 'renderer/Context/UserContext';

export default function Home() {

  return (
    <Grid>
      <Grid style={{ display: 'flex' }}>
        <Grid >
          <Leftbar />
        </Grid>
        <Grid>
          <Grid style={{ marginLeft: '350px' }}>
            <Topbar />
          </Grid>
          <Grid style={{marginTop:"30px"}}>
           <ChallengeCard/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
