import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import England from '../components/gamesHighlights/England'
import LiveHighlight from '../components/gamesHighlights/liveHighlight'
import Spain from '../components/gamesHighlights/Spain'
import { useStyle } from '../components/styles/homeStyles'


const Highlight = () => {
    const classes = useStyle()
  return (
    <Box className={classes.highlights}>
        <Typography sx={{m:2, fontSize:'31px', fontWeight:'400px'}}>Highlights</Typography>
        <Divider/>
        <LiveHighlight />
        <LiveHighlight/>
        <England />
        <Spain />
    </Box>
  )
}

export default Highlight