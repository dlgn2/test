import { Grid } from '@mui/material'
import React from 'react'

export default function LeftbarItemActive(props:any) {
  return (
    <Grid style={{display:"flex",alignItems:"center",margin:0, marginLeft: '28px', marginTop: '55px'}}>
     <img
          src={props.image}
        />
        <h3 style={props.active ?{color:"#9BFF5E",margin:0,marginLeft:"7px",fontSize:"13px"} : {color:"white",margin:0,marginLeft:"7px",fontSize:"13px"}}>{props.title}</h3>
    </Grid>
  )
}
