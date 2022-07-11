import { Grid } from '@mui/material'
import React from 'react'

export default function LeftbarItemActive(props:any) {
  return (
    <Grid style={{display:"flex",alignItems:"center", marginLeft: '28px', marginTop: '55px'}}>
     <img
          src={props.image}
        />
    </Grid>
  )
}
