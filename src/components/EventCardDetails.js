import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react'

const EventCardDetails = () => {
    return (
        <Grid container spacing={2} sx={{ margin: 'auto', px: 5 }}>
            {/* Image Section */}
            <Grid item xs={12} md={5}>
                <CardMedia
                    component="img"
                    image="https://media.istockphoto.com/id/1130434203/photo/rear-view-of-sitting-audience.webp?a=1&b=1&s=612x612&w=0&k=20&c=t89dKSzB0Sk-n6SuV4Imf5064BuEThsJKP5xuImDUlM="
                    alt="Event"
                    sx={{
                        borderRadius: 2,
                        height: '80%',
                        objectFit: 'cover',
                    }}
                />
            </Grid>

            {/* Text Section */}
            <Grid item xs={12} md={6}>
                <Card sx={{ boxShadow: 0 }}>
                    <CardContent>
                        {/* Event Title */}
                        <Typography variant="h5" fontWeight="bold" color="text.primary" gutterBottom>
                            Title of the Risen Event
                        </Typography>

                        {/* Event Address & Time */}
                        <Typography variant="body2" color="text.secondary" fontWeight={1000} fontSize={'16px'} gutterBottom>
                            1015 California Ave, Los Angeles CA <br />
                            5 may , 2025 <br />
                            7:00 pm — 8:00 pm
                        </Typography>

                        {/* Description */}
                        <Typography variant="body1" color="text.primary" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim eu turpis non
                            hendrerit. Nunc nec luctus tellus.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dignissim eu turpis non
                            hendrerit. Nunc nec luctus tellus.
                        </Typography>

                        {/* CTA Button */}
                        <Box display="flex" alignItems="center" mt={2}>
                            <Button
                                variant="contained"
                                color="primary"
                                // endIcon={<ArrowForward />}
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 'bold',
                                }}
                            >
                                Book Seat
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default EventCardDetails;