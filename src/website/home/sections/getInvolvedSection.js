import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Button,
    useTheme,
    Stack,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { BodyText1, BodyText2, Headline } from '../../../styles/typographyStyle';
import { ContainedButton } from '../../../styles/styleButton';

// Motion-enhanced Button
const MotionButton = motion(Button);

// Optional: animated hover scale
const buttonHover = {
    scale: 1.05,
    transition: { type: 'spring', stiffness: 300 },
};

const actions = [
    {
        icon: <VolunteerActivismIcon fontSize="large" color="primary" />,
        title: 'Volunteer',
        description: 'Help us on the ground at events and programs to reach more people directly.',
        buttonText: 'Sign Up',
    },
    {
        icon: <FavoriteIcon fontSize="large" color="primary" />,
        title: 'Donate',
        description: 'Support our mission with a one-time or recurring contribution.',
        buttonText: 'Donate Now',
    },
    {
        icon: <HandshakeIcon fontSize="large" color="primary" />,
        title: 'Partner With Us',
        description: 'Collaborate with us to expand impact through shared resources and expertise.',
        buttonText: 'Contact Us',
    },
];

// Optional: background gradient or SVG pattern
const BackgroundIllustration = styled('div')(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `radial-gradient(circle at 20% 20%, ${theme.palette.primary.light}10 0%, transparent 50%)`,
    pointerEvents: 'none',
    zIndex: 0,
}));

const GetInvolvedSection = () => {
    const theme = useTheme();

    return (
        <Box sx={{ px: { xs: 2, md: 8 } }}>



            {/* Section Title */}
            <Box mb={4} zIndex={1} position="relative">
                <Headline gutterBottom>
                    Get Involved
                </Headline>
                <BodyText1>
                    Join Us in Making a Difference
                </BodyText1>
            </Box>

            {/* Action Blocks */}
            <Grid container spacing={4} position="relative" zIndex={1}>
                {actions.map((action, index) => (
                    <Grid item xs={12} sm={4} key={action.title}>
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <Stack spacing={2} alignItems="center" textAlign="center" sx={{ px: 2 }}>
                                {action.icon}
                                <Typography variant="h6" fontWeight={600}>
                                    {action.title}
                                </Typography>
                                <BodyText2>
                                    {action.description}
                                </BodyText2>

                                {/* Animated Button */}
                                <ContainedButton
                                    sx={{ fontWeight: '500' }}
                                >
                                    {action.buttonText}
                                </ContainedButton>
                            </Stack>
                        </motion.div>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default GetInvolvedSection;
