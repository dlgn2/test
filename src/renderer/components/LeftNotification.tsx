import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

function MyApp(props: any) {
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (props?.notification?.type) {
      handleClick(props.notification.type, props.notification.message);
    }
  }, [props?.notification]);

  const handleClick = (type: VariantType, message: string) => {
    enqueueSnackbar(message, { variant: type });
  };

  return <React.Fragment></React.Fragment>;
}

export default function LeftNotification(props: any) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp notification={props.notification} />
    </SnackbarProvider>
  );
}
