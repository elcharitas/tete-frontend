import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { useStyle } from '../components/styles/homeStyles'
import Games from './games';

const FeaturedGames = () => {
    const classes = useStyle();
  return (
    <Box className={classes.featuredGames}>
      <Typography sx={{m:2, fontSize:'31px', fontWeight:'400px'}}>Featured Games</Typography>
      <Box sx={{display:'flex', justifyContent:'space-around'}}>
          <Games />
          <Games />
          <Games />
      </Box>
  </Box>
  )
}

export default FeaturedGames