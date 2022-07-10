import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CircularProgress, {
  circularProgressClasses
} from '@mui/material/CircularProgress'
import LinearProgress, {
  linearProgressClasses
} from '@mui/material/LinearProgress'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 71,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:"#313442"
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#7364DB' : '#313442'
  }
}))

export default function ProgressBar({challengeTitle,progresLevel1,progresLevel2,progresLevel3,progresLevel4,progressValue}:any) {


  const classes = useStyles();
  return (
    <Box style={{ marginLeft:"30px",marginRight:"30px"}} sx={{ flexGrow: 1 }}>
      <Grid style={{position:"relative",marginTop:"25px"}}>
      <h1 className={classes.levelText}>Level 1 <span className={classes.spanTitle}>+1VP</span></h1>
      <h1 className={progressValue>=progresLevel1 ? classes.progressTextGreen : [classes.progressTextGreen , classes.progressTextRed].join(' ')}>{progressValue}/{progresLevel1}</h1>
        <BorderLinearProgress variant="determinate" value={((parseInt(progressValue)/parseInt(progresLevel1))*100)>99 ? 100 : (parseInt(progressValue)/parseInt(progresLevel1))*100} />
      </Grid>

      <Grid style={{position:"relative",marginTop:"25px"}}>
      <h1 className={classes.levelText}>Level 2 <span className={classes.spanTitle}>+3VP</span></h1>
      <h1 className={progressValue>=progresLevel2 ? classes.progressTextGreen : [classes.progressTextGreen , classes.progressTextRed].join(' ')}>{progressValue}/{progresLevel2}</h1>
        <BorderLinearProgress variant="determinate" value={((parseInt(progressValue)/parseInt(progresLevel2))*100)>99 ? 100 : (parseInt(progressValue)/parseInt(progresLevel2))*100} />
      </Grid>

      <Grid style={{position:"relative",marginTop:"25px"}}>
      <h1 className={classes.levelText}>Level 3 <span className={classes.spanTitle}>+7VP</span></h1>
      <h1 className={progressValue>=progresLevel3 ? classes.progressTextGreen : [classes.progressTextGreen , classes.progressTextRed].join(' ')}>{progressValue}/{progresLevel3}</h1>
        <BorderLinearProgress variant="determinate" value={((parseInt(progressValue)/parseInt(progresLevel3))*100)>99 ? 100 : (parseInt(progressValue)/parseInt(progresLevel3))*100} />
      </Grid>

      <Grid style={{position:"relative",marginTop:"25px"}}>
      <h1 className={classes.levelText}>Level 4 <span className={classes.spanTitle}>+15VP</span></h1>
      <h1 className={progressValue>=progresLevel4 ? classes.progressTextGreen : [classes.progressTextGreen , classes.progressTextRed].join(' ')}>{progressValue}/{progresLevel4}</h1>
        <BorderLinearProgress variant="determinate" value={((parseInt(progressValue)/parseInt(progresLevel4))*100)>99 ? 100 : (parseInt(progressValue)/parseInt(progresLevel4))*100} />
      </Grid>


    </Box>

  )
}

const useStyles = makeStyles(() => ({
  levelText: {
    fontWeight: 700,
    fontSize: '16px',
    lineHeight: '22px',
    color: '#F1F1F1',
    marginLeft:"2px"

  },
  progressTextGreen: {
    position:"absolute",
    right:"0",
    marginTop:"-23px",
    fontSize: '14px',
    fontWeight:400,
    color:'#29F191',
    marginRight:"5px"
  },
  progressTextRed: {
    color:'#E23738 !important',
  },
  subTitle: {
    fontWeight: 400,
    fontSize: '12px',
    lineHeight: '16px',
    color: '#8B8B93',
    marginLeft: '30px',
    marginTop: '14px',
  },
  spanTitle: {
    fontWeight: 600,
    fontSize: '12px',
    lineHeight: '20px',
    color: '#7364DB',
    marginLeft: '3px',
    marginTop:"-23px !important"
  },
}));
