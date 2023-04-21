import { Box, CardMedia, Stack } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react'

export default function BannerSection() {
  return (
    <>
    <Grid item sm={12} >
        <Grid container rowGap={'15px'}>
            <Grid display={'flex'} paddingX={'20px'} justifyContent='center' align-items="center" sm={6}><img className='n' src="banner-1.png" alt="" /></Grid>
            <Grid  display={'flex'} paddingX={'20px'} justifyContent='center' align-items="center" sm={6}><img className='n' src="banner-2.png" alt="" /></Grid>
        </Grid>
    
    </Grid>
    </>
  )
}

{/* <Box display={'flex'} justifyContent='space-around' >
        
        
</Box> */}