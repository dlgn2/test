import { Button, Grid } from '@mui/material'
import React from 'react'
import searchIcon from '../../../../../assets/icons/searchIcon.svg'
export default function Search() {
  return (
    <Grid
      style={{
        position: 'relative',
        height: '50px',
        width: '255px',
        background: 'rgba(30, 32, 34, 0.8)',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img style={{ marginLeft: '20px' }} src={searchIcon} />
      <p
        style={{
          fontFamily: "'Roboto Condensed',sans-serif",
          marginLeft: '10px',
          color: '#B3B3B3',
          fontSize: '16px',
          marginTop: '14px'
        }}
      >
        Something...
      </p>
      <Button
        style={{
          position: 'absolute',
          right: '5px',
          background: '#252729',
          width: '60px',
          height: '75%',
          color: '#B3B3B3',
          borderRadius: '20px',
          textTransform: 'capitalize'
        }}
      >
        Search
      </Button>
    </Grid>
  )
}
