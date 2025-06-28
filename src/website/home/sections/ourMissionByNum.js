import React from 'react';
import { motion } from 'framer-motion';
import {
    Group,
    LocationOn,
    TrackChanges,
    Favorite
} from '@mui/icons-material';
import { Box, Typography, Grid, Button, } from '@mui/material';
import CounterCard from '../components/counterCard';
import { BodyText1, Headline } from '../../../styles/typographyStyle';
import { ContainedButton } from '../../../styles/styleButton';

const OurMissionByNumber = () => {
    const stats = [
        {
            title: 'People Helped',
            count: 15420,
            suffix: '+',
            icon: <Group fontSize="large" />,
            delay: 200
        },
        {
            title: 'Areas Covered',
            count: 85,
            suffix: '+',
            icon: <LocationOn fontSize="large" />,
            delay: 400
        },
        {
            title: 'Active Projects',
            count: 127,
            suffix: '',
            icon: <TrackChanges fontSize="large" />,
            delay: 600
        },
        {
            title: 'Beneficiaries',
            count: 8950,
            suffix: '+',
            icon: <Favorite fontSize="large" />,
            delay: 800
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const headerVariants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const lineVariants = {
        hidden: { width: 0 },
        visible: {
            width: "6rem",
            transition: {
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: 1.2
            }
        }
    };

    return (
        <Box sx={{ px: { xs: 2, md: 8 } }}>

            {/* Section Header */}

            <motion.div variants={headerVariants} >
                <Headline gutterBottom>
                    Our Impact in Numbers
                </Headline>
                <BodyText1 textAlign={"center"} gutterBottom>
                    Through dedication and community support, we continue to make a meaningful difference
                    in lives across multiple regions and initiatives.
                </BodyText1>
            </motion.div>



            <Grid container spacing={4} sx={{ mt: 4 }}>
                {stats.map((stat, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <CounterCard
                            title={stat.title}
                            count={stat.count}
                            suffix={stat.suffix}
                            icon={stat.icon}
                            delay={stat.delay}
                            index={index}
                        />
                    </Grid>
                ))}
            </Grid>

            {/* CTA Button */}
            <Box
                style={{ textAlign: 'center', marginTop: '2rem' }}
            >
                <motion.div
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <ContainedButton
                        startIcon={<Favorite />}
                        sx={{ fontWeight: '500' }}
                    >
                        Join Our Mission
                    </ContainedButton>
                </motion.div>
            </Box>
        </Box>
    );
};

export default OurMissionByNumber;
