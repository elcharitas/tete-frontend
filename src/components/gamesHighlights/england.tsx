import { ArrowDownward } from '@mui/icons-material'
import { Divider } from '@mui/material'
import { Box } from '@mui/system'
import { useStyle } from '../styles/homeStyles'
import Matches from './matches'

const England = () => {
    const classes = useStyle()
  return (
        <Box>
            <Box className={classes.grid}>
                <div className={classes.date}><ArrowDownward/> England Premier League</div>
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

export default England