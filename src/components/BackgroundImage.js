import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const BackgroundImage = ({ url = '', texts }) => {
    return (
        <Box
            sx={{
                width: '100%',
                overflow: 'hidden',
                height: {
                    xs: '10rem', // Small screens
                    sm: '40rem', // Larger screens
                },
                backgroundImage: `
      linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)),
      url(${url})
    `,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '0 0 10px 10px',
            }}
        >
            <Grid container mt={2} height={'inherit'}>
                <Grid item xs={12} sm={6} display="flex" justifyContent="end" alignItems="center"  >
                    <Box sx={{ p: '0px 0px 0px 15px', width: { xs: '100%', sm: '80%', md: '80%' } }} >
                        <Typography variant="h6" color='green' sx={{ mb: 3 }} textTransform={'capitalize'}>
                            Give someone hope
                        </Typography>
                        <Typography variant="h2" sx={{}} color='white' borderBottom={'4px solid yellow'} fontWeight={'bold'}>
                            Family Belogns together

                        </Typography>
                        {/* <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Join Us
            </Button> */}
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} display="flex" justifyContent="center" alignItems="center">

                </Grid>


            </Grid>
        </Box>
    )
}

export default BackgroundImage