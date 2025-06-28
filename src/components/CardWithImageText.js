import { PlayArrow, SkipNext, SkipPrevious } from '@mui/icons-material';
import { Box, Card, CardContent, CardMedia, IconButton, Typography, useTheme } from '@mui/material'
import React from 'react'

export const CardWithImageText = ({ cardData }) => {
    return (
        <Card
            sx={{
                display: 'flex',
                maxWidth: 600,
                borderRadius: 2,
                boxShadow: 6,
                p: 1,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 10,
                },
            }}
        >
            {/* Left Side Image */}
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={cardData.img}
                alt="Sample Image"
            />

            {/* Right Side Content */}
            <Box sx={{ display: 'flex', flexDirection: 'column', pl: 0.1 }}>
                <CardContent>
                    <Typography variant="h6" component="div" fontWeight="bold">
                        {cardData.header}
                    </Typography>
                    <Typography variant="body1" color="#4a918a" mt={1}>
                        {cardData.text}
                    </Typography>
                </CardContent>
            </Box>
        </Card>


    )
}
