import { Grid} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import smallIcon from '../../../../../assets/icons/chatTopSmallIcon.svg';
import downPerson from '../../../../../assets/icons/downMenuPerson.svg';
import downDashboard from '../../../../../assets/icons/downMenuDashboard.svg';
import downPayouts from '../../../../../assets/icons/downMenuPayouts.svg';
import downSettings from '../../../../../assets/icons/downMenuSettings.svg';
import downStatements from '../../../../../assets/icons/downMenuStatements.svg';
import MenuItem from './MenuItem';

export default function DownMenu({ open }: any) {


  const classes = useStyles();


  return (
    <Grid>
      {open.bool && open.open==="Profile" ? (
        <Grid style={{ marginTop: '5px' }}>
          <Grid style={{ position: 'absolute', right: '32px', top: '-10px' }}><img src={smallIcon} /></Grid>
          <Grid className={classes.menuContainer}>
            <MenuItem image={downPerson} text="Profile" />
            <MenuItem image={downDashboard} text="Dashboard" />
            <MenuItem image={downPayouts} text="Payouts" />
            <MenuItem image={downStatements} text="Statement" />
            <MenuItem image={downSettings} text="Settings" />
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
    width: '237px',
    height: '345px',
    background: '#181920',
    borderRadius: '16px',
  },
}));
