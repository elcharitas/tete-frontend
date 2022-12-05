import { Box } from '@mui/system'
import React from 'react'
import { useStyle } from '../styles/homeStyles'

const Match = () => {
    const classes = useStyle()
  return (
    <Box className={classes.grid}>
        <Box className={classes.team}>
            <div >21:00</div>
            <div>
                <div>Chelsea</div>
                <div>Man United</div>
            </div>
        </Box>
        <Box className={classes.match}>
            {/* <StackedLineChart /> */}
            <div className={classes.odds}>1  2.34</div>
            <div className={classes.odds}>X  3.55</div>
            <div className={classes.odds}>2  2.09</div>
        </Box>
    </Box>
  )
}

export default Match