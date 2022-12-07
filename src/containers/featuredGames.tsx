import { Typography } from '@mui/material';
import { Box } from '@mui/system'
import React from 'react'
import { useStyle } from '../components/styles/homeStyles'
import Games from '../components/widgets/games';



type IFeatured ={
  title:string
}

const FeaturedGames = ({title}: IFeatured) => {
    const classes = useStyle();
  return (
    <Box className={classes.featuredGames}>
      <Typography variant="h6" sx={{ m: 2 }}>{title}</Typography>
      <Box sx={{display:'flex', justifyContent:'space-around'}}>
          <Games />
          <Games />
          <Games />
      </Box>
  </Box>
  )
}

export default FeaturedGames