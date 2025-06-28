import React from 'react';
import {
    Box,
    Typography,
    Card,
    CardMedia,
    CardContent,
    useTheme,
    Grid,
} from '@mui/material';
import { motion } from 'framer-motion';
import { BodyText1, BodyText2, CardTitle, Headline } from '../../../styles/typographyStyle';
import { ArrowForward } from '@mui/icons-material';
import { ContainedButton, OutlinedButton } from '../../../styles/styleButton';
// import CarouselComponent from '../../../components/common/CarouselComponent';

const MotionCard = motion(Card);

const stories = [
    {
        title: 'From Illness to Hope: Rani\'s Journey',
        excerpt: 'Rani received vital treatment through our program and is now thriving with her family.',
        image: "https://media.istockphoto.com/id/524903696/photo/poor-indian-children-asking-for-food-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=DqMSvVaXQxISjdvfNizw6F9ZkaCBMy42Yk6agRcJUE8=",
        category: "Healthcare Success",
        date: "January 15, 2024"
    },
    {
        title: 'Volunteer Spotlight: Meet Ankit',
        excerpt: 'Ankit shares how fieldwork transformed his perspective and inspired his career change.',
        image: "https://media.istockphoto.com/id/524903696/photo/poor-indian-children-asking-for-food-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=DqMSvVaXQxISjdvfNizw6F9ZkaCBMy42Yk6agRcJUE8=",
        category: "Volunteer Story",
        date: "January 10, 2024"
    },
    {
        title: '200+ Families Supported in 2024',
        excerpt: 'Your support helped us reach more homes with essential care packages and medical aid.',
        image: "https://media.istockphoto.com/id/2167876180/photo/happy-gypsy-indian-girl-using-laptop-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=CrimN-yv4w6_xDp2a5mW9Qhrvc9oFCMSl84IuTZucmw=",
        category: "Impact Report",
        date: "January 5, 2024"
    },
    {
        title: 'Education Changes Everything: Priya\'s Story',
        excerpt: 'How our scholarship program helped Priya become the first graduate in her family.',
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500&auto=format&fit=crop&q=60",
        category: "Education Success",
        date: "December 28, 2023"
    },
    {
        title: 'Clean Water Transforms Village Life',
        excerpt: 'See how installing bore wells in rural Rajasthan changed an entire community.',
        image: "https://images.unsplash.com/photo-1541919329513-35f7af297129?w=500&auto=format&fit=crop&q=60",
        category: "Water Initiative",
        date: "December 20, 2023"
    },
];

const StoryCard = ({ story, index }) => {
    const theme = useTheme();
    
    return (
        <MotionCard
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            elevation={3}
            sx={{
                mx: 1,
                borderRadius: 3,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
            }}
        >
            <CardMedia
                component="img"
                height="180"
                image={story.image}
                alt={story.title}
            />
            <CardContent sx={{ flexGrow: 1, bgcolor: theme.palette.primary.contrastText, p: 3 }}>
                <Typography
                    variant="caption"
                    color="primary"
                    sx={{ 
                        fontWeight: 600, 
                        textTransform: 'uppercase', 
                        letterSpacing: 1,
                        display: 'block',
                        mb: 1
                    }}
                >
                    {story.category}
                </Typography>
                
                <CardTitle sx={{ color: 'primary.main', mb: 2 }}>
                    {story.title}
                </CardTitle>
                
                <BodyText2 gutterBottom sx={{ mb: 2 }}>
                    {story.excerpt}
                </BodyText2>
                
                <Typography variant="caption" color="text.secondary" sx={{ mb: 3, display: 'block' }}>
                    {story.date}
                </Typography>
                
                <OutlinedButton
                    endIcon={<ArrowForward />}
                    sx={{ fontWeight: '500' }}
                    fullWidth
                >
                    Read Full Story
                </OutlinedButton>
            </CardContent>
        </MotionCard>
    );
};

const StoriesSection = () => {
    return (
        <Box sx={{ py: { xs: 6, md: 10 }, px: { xs: 2, md: 8 } }}>
            {/* Section Header */}
            <Box mb={6} textAlign="left">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <Headline gutterBottom>
                        Latest News & Success Stories
                    </Headline>
                    <BodyText1>
                        Stories of hope, progress, and the power of community.
                    </BodyText1>
                </motion.div>
            </Box>

            {/* Stories Grid - Temporarily replacing carousel */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <Grid container spacing={3}>
                    {stories.map((story, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <StoryCard story={story} index={index} />
                        </Grid>
                    ))}
                </Grid>
                {/*
                <CarouselComponent
                    autoPlay={true}
                    autoPlaySpeed={5000}
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
                    {stories.map((story, index) => (
                        <StoryCard key={index} story={story} index={index} />
                    ))}
                </CarouselComponent>
                */}
            </motion.div>

            {/* CTA */}
            <Box textAlign="center" mt={8}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Typography variant="h5" fontWeight="600" gutterBottom>
                        Be part of the next success story
                    </Typography>
                    <Typography variant="body1" color="text.secondary" mb={3}>
                        Join our community of changemakers and help create more stories of hope
                    </Typography>
                    <ContainedButton size="large">
                        Get Involved Today
                    </ContainedButton>
                </motion.div>
            </Box>
        </Box>
    );
};

export default StoriesSection;