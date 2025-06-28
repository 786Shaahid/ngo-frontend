import React from 'react';
import { motion } from 'framer-motion';
import CounterCard from './counterCard';
import {
    Group,
    LocationOn,
    TrackChanges,
    Favorite
} from '@mui/icons-material';
import { Box, Typography, Container, Grid, Button, } from '@mui/material';

const StatsCards = () => {
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
        <Box sx={{ py: 10, bgcolor: 'grey.50' }}>

            {/* Section Header */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={headerVariants}>
                    <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
                        Our Impact in Numbers
                    </Typography>
                    <Typography variant="h6" align="center" color="text.secondary" maxWidth="md" mx="auto">
                        Through dedication and community support, we continue to make a meaningful difference
                        in lives across multiple regions and initiatives.
                    </Typography>
                </motion.div>

                <motion.div
                    variants={lineVariants}
                    style={{ height: '4px', background: 'linear-gradient(to right, #02133E, #2563eb)', borderRadius: 4, margin: '1rem auto' }}
                />
            </motion.div>

            {/* Stats Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
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
            </motion.div>

            {/* CTA Button */}
            <motion.div
                variants={buttonVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ textAlign: 'center', marginTop: '2rem' }}
            >
                <motion.div
                    whileHover={{
                        scale: 1.05,
                        backgroundColor: "#1e40af",
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                >
                    <Button
                        variant="contained"
                        startIcon={<Favorite />}
                        sx={{
                            bgcolor: '#02133E',
                            color: 'white',
                            px: 4,
                            py: 1.5,
                            borderRadius: 999,
                            fontWeight: 600,
                            fontSize: '1rem',
                            boxShadow: 3,
                            textTransform: 'none',
                            '&:hover': {
                                bgcolor: '#1e40af'
                            }
                        }}
                    >
                        Join Our Mission
                    </Button>
                </motion.div>
            </motion.div>
        </Box>
    );
};

export default StatsCards;
