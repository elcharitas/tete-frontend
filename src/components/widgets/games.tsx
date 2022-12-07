// import { StackedLineChart } from '@mui/icons-material'
import { Box } from '@mui/system'
import React from 'react'
import { useStyle } from '../styles/homeStyles'

const Games = () => {
    const classes = useStyle()
  return (
    <Box className={classes.games}>
            <div className={classes.live}>live</div>
            <Box className={classes.match}>
                    <div>
                        <img src="/img/chelsea.png" alt="chelsea"  style={{width:'30px', marginTop:'5px'}}/>
                        <div>chelsea</div>
                    </div>
                    <div>
                        <div>17:00</div>
                        <div>01/12</div>
                    </div>
                    <div>
                        <img src="/img/united.png" alt="chelsea"  style={{width:'30px', marginTop:'5px'}}/>
                        <div>Man united</div>
                    </div>
            </Box>
            <Box className={classes.match}>
                <div className={classes.odds}>1  2.34</div>
                <div className={classes.odds}>X  3.55</div>
                <div className={classes.odds}>2  2.09</div>
            </Box>
            <Box sx={{display:'flex', justifyContent:'space-between', fontSize:'8px', mx:1}} > 
                <p>EPL</p>
                <p>More Events (50)</p>
            </Box>
    </Box>
  )
}

export default Games