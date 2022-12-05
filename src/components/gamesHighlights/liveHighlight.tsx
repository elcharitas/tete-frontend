import { Divider } from '@mui/material'
import { Box } from '@mui/system'
import { useStyle } from '../styles/homeStyles'
import Matches from './matches'

const LiveHighlight = () => {
    const classes = useStyle()
  return (
        <Box>
            <Box className={classes.grid}>
                <div className={classes.date}>28/1 Monday</div>
                <Box className={classes.lbheading}>
                    <div>1</div>
                    <div>X</div>
                    <div>2</div>
                </Box>
            </Box>
            <Matches />
        </Box>
  )
}

export default LiveHighlight