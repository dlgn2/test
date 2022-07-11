import { Avatar, Grid, Menu, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { profileInterface } from '../../../@types/arena';
import { APIService } from '../../../API/API';
import Chat from '../Chat/Chat';
import profileIcon from '../../../../../assets/icons/topProfile.svg'
import notificationIcon from '../../../../../assets/icons/topNotificationIcon.svg';
import DownMenu from './DownMenu';
import NotificationBase from '../Notification/NotificationBase';

export default function Profile({username}:profileInterface) {
  const [isOpen, setIsOpen] = useState({"open":"","bool":false});

  const classes = useStyles();

  return (
    <Grid container style={{display:"flex",alignItems:"center",marginTop:"15px",zIndex:"9999"}} spacing={1.3}>
      <Grid item className={classes.IconStyle}>
        <Chat />
      </Grid>
      <Grid item >
        <Grid onClick={()=>{if(isOpen.open != "Notification"){setIsOpen({"open":"Notification",bool:true})}else{setIsOpen({"open":"Notification",bool:!isOpen.bool})}}}>
        <img style={{cursor:"pointer"}} src={notificationIcon} />
        </Grid>
       <Grid style={{position:"absolute",right:"92px",zIndex:"9999"}}>
       <NotificationBase open={isOpen} />
       </Grid>
      </Grid>
      <Grid item style={{zIndex:"9999"}}>
        <Grid onClick={()=>{if(isOpen.open != "Profile"){setIsOpen({"open":"Profile",bool:true})}else{setIsOpen({"open":"Profile",bool:!isOpen.bool})}}}>
        <img style={{cursor:"pointer"}} src={profileIcon} />
        </Grid>
       <Grid style={{position:"absolute",right:"12px"}}>
       <DownMenu open={isOpen} />
       </Grid>
      </Grid>
    </Grid>
  );
}


const useStyles = makeStyles(() => ({
  IconStyle: {
marginTop:"-5px",
cursor:"pointer"
  },
  arrow: {
    width: '35px',
    marginTop: '5px',
    cursor: 'pointer',
  },
}));
