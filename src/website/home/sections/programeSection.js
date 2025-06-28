import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import { ContainedButton, OutlinedButton } from '../../../styles/styleButton';
import { BodyText1, BodyText2, CardTitle, Headline } from '../../../styles/typographyStyle';
import { ArrowForward } from '@mui/icons-material';

// Replace these with your own images
// import medicalImg from '../../../assets/images/medical.jpg';
// import educationImg from '../../../assets/images/education.jpg';
// import nutritionImg from '../../../assets/images/nutrition.jpg';

const MotionCard = motion(Card);

const programs = [
    {
        title: 'Medical Aid',
        description:
            'We provide essential healthcare services to underserved families, focusing on preventive care and urgent support.',
        image: "https://svmchrc.ac.in/wp-content/uploads/2024/04/commmen.jpg",
    },
    {
        title: 'Education Access',
        description:
            'Empowering children through scholarships, supplies, and supportive learning environments.',
        image: "https://media.istockphoto.com/id/910384920/photo/kid-reading-near-locked-door.webp?a=1&b=1&s=612x612&w=0&k=20&c=J3FL4ZVORItw_bkLzlVo4WO-xUy22S7Qqbuq2xusNnc=",
    },
    {
        title: 'Nutrition Support',
        description:
            'Delivering nutritious meals and awareness programs to fight malnutrition in vulnerable communities.',
        image: "https://plus.unsplash.com/premium_photo-1661777702966-aed29ab4106b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVhbHxlbnwwfHwwfHx8MA%3D%3D",
    },
];

const ProgramsSection = () => {
    const theme = useTheme();

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 8 } }}>

            {/* Section Header */}
            <Box mb={4}>
                <Headline gutterBottom>
                    Our Programs
                </Headline>
                <BodyText1>
                    Making a Difference in Health and Education
                </BodyText1>
            </Box>

            {/* Cards Grid */}
            <Grid container spacing={4}>
                {programs.map((program, index) => (
                    <Grid item xs={12} sm={6} md={4} key={program.title}>
                        <MotionCard
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            elevation={3}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 2,
                                overflow: 'hidden',
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image={program.image}
                                alt={program.title}
                            />
                            <CardContent sx={{ flexGrow: 1, bgcolor: theme.palette.primary.contrastText }}>
                                <CardTitle sx={{ color: 'primary.main' }} >
                                    {program.title}
                                </CardTitle>
                                <BodyText2 gutterBottom>
                                    {program.description}
                                </BodyText2>
                                <OutlinedButton
                                    endIcon={<ArrowForward />}
                                    sx={{ fontWeight: '500' }}
                                >
                                    Read More
                                </OutlinedButton>
                            </CardContent>
                        </MotionCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ProgramsSection;
