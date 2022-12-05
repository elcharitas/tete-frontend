import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LiveHighlight from '../components/gamesHighlights/liveHighlight'
import { useStyle } from '../components/styles/homeStyles'

const LiveBetting = () => {
    const classes = useStyle()
  return (
    <Box className={classes.liveBetting}>
        <Typography sx={{m:2, fontSize:'31px', fontWeight:'400px'}}>Live Betting</Typography>
        <Divider/>
        <LiveHighlight />
    </Box>
  )
}

export default LiveBetting