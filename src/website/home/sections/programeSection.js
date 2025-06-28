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
// import CarouselComponent from '../../../components/common/CarouselComponent';

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
    {
        title: 'Clean Water Initiative',
        description:
            'Providing access to clean drinking water through bore wells and purification systems in rural areas.',
        image: "https://images.unsplash.com/photo-1541919329513-35f7af297129?w=500&auto=format&fit=crop&q=60",
    },
    {
        title: 'Women Empowerment',
        description:
            'Skill development and entrepreneurship training programs for women in rural communities.',
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60",
    },
];

const ProgramCard = ({ program, index }) => {
    const theme = useTheme();
    
    return (
        <MotionCard
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            elevation={3}
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 3,
                overflow: 'hidden',
                mx: 1,
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={program.image}
                alt={program.title}
            />
            <CardContent sx={{ flexGrow: 1, bgcolor: theme.palette.primary.contrastText, p: 3 }}>
                <CardTitle sx={{ color: 'primary.main', mb: 2 }}>
                    {program.title}
                </CardTitle>
                <BodyText2 gutterBottom sx={{ mb: 3 }}>
                    {program.description}
                </BodyText2>
                <OutlinedButton
                    endIcon={<ArrowForward />}
                    sx={{ fontWeight: '500' }}
                    fullWidth
                >
                    Learn More
                </OutlinedButton>
            </CardContent>
        </MotionCard>
    );
};

const ProgramsSection = () => {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 8 } }}>
            {/* Section Header */}
            <Box mb={6} textAlign="center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Headline gutterBottom>
                        Our Programs
                    </Headline>
                    <BodyText1>
                        Making a Difference in Health and Education
                    </BodyText1>
                </motion.div>
            </Box>

            {/* Programs Grid - Temporarily replacing carousel */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Grid container spacing={3}>
                    {programs.map((program, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <ProgramCard program={program} index={index} />
                        </Grid>
                    ))}
                </Grid>
                {/* 
                <CarouselComponent
                    autoPlay={true}
                    autoPlaySpeed={4000}
                    infinite={true}
                    showDots={true}
                    arrows={true}
                    customResponsive={{
                        desktop: {
                            breakpoint: { max: 3000, min: 1024 },
                            items: 3,
                            slidesToSlide: 1,
                        },
                        tablet: {
                            breakpoint: { max: 1024, min: 600 },
                            items: 2,
                            slidesToSlide: 1,
                        },
                        mobile: {
                            breakpoint: { max: 600, min: 0 },
                            items: 1,
                            slidesToSlide: 1,
                        },
                    }}
                >
                    {programs.map((program, index) => (
                        <ProgramCard key={index} program={program} index={index} />
                    ))}
                </CarouselComponent>
                */}
            </motion.div>

            {/* CTA Section */}
            <Box textAlign="center" mt={8}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Typography variant="h5" fontWeight="600" gutterBottom>
                        Want to support our programs?
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={3}>
                        Your contribution can make a real difference in someone's life
                    </Typography>
                    <ContainedButton size="large">
                        Support Our Programs
                    </ContainedButton>
                </motion.div>
            </Box>
        </Box>
    );
};

export default ProgramsSection;